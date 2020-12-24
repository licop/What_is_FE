# 简易的 bundler 源码编写

编写一个简易的 es6 语法的 js 文件 `bundler` 可以帮助更好的了解 webpack 的原理。

## 分析模块，提取依赖

当我们打包 js 文件时，首先需要一个入口文件`（entry）`，然后提取文件中的依赖`（dependencies）`。

使用`@babel/parser`将文件代买转入未抽象语法树（AST）,使用`@babel/traverse`从 `import`声明语句中提取依赖。

使用`@babel/core`的`transformFromAst`方法将抽象语法树转化为浏览器可执行的 es5 代码

```
    // 分析模块
    const moduleAnalyser = (filename) => {
        // 读取文件内容
        const content = fs.readFileSync(filename, 'utf-8');
        // 获取抽象语法树
        const ast = paser.parse(content, {
            sourceType: 'module'
        });

        const dependencies = {};
        // 遇到声明语法时执行，获取依赖
        traverse(ast, {
            ImportDeclaration({node}) {
                const dirname = path.dirname(filename);
                const newFile = './' + path.join(dirname, node.source.value)

                dependencies[node.source.value] = newFile;
            }
        });
        // 将抽象语法树转化为浏览器能够识别的代码
        const {code} = babel.transformFromAst(ast, null, {
            presets: ["@babel/preset-env"]
        });

        return {
            filename,
            dependencies,
            code
        }
    }

```

## 提取深层依赖，绘制依赖图谱

入口文件依赖的文件，也可能依赖引入其他文件，使用**递归**的方法提取出来，绘制依赖文件的图谱，便于将所有 js 文件打包在一起

```
const makeDependenciesGraph = (entry) => {
    const entryModule = moduleAnalyser(entry);
    const graphArr = [entryModule]
    for(let i = 0; i < graphArr.length; i++) {
        const item = graphArr[i];
        const { dependencies } = item;
        if(dependencies) {
            for(let j in dependencies) {
                graphArr.push(moduleAnalyser(dependencies[j]));
            }
        }
    }
    const graph = {};
    graphArr.forEach(item => {
        graph[item.filename] = {
            dependencies: item.dependencies,
            code: item.code
        }
    })

    return graph;
}

```

## 生成最终代码

使用闭包函数将依赖图谱合并成最终代码

```
const generateCode = (entry) => {
    const graph = JSON.stringify(makeDependenciesGraph(entry));

    return `
        (function(graph) {
            function require(module) {
                function localRequire(relativePath) {
                    return require(graph[module].dependencies[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, graph[module].code);
                return exports;
            }
            require('${entry}');
        })(${graph});
    `
}

```

[完整源码地址](https://github.com/licop/webpack4.0_learn/blob/master/%E7%BC%96%E5%86%99bundler%E6%BA%90%E7%A0%81/bundler/bundler.js)
