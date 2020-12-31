(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(e,n,r){"use strict";r.r(n);var t=r(27),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"简易的-bundler-源码编写"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简易的-bundler-源码编写"}},[e._v("#")]),e._v(" 简易的 bundler 源码编写")]),e._v(" "),r("p",[e._v("编写一个简易的 es6 语法的 js 文件 "),r("code",[e._v("bundler")]),e._v(" 可以帮助更好的了解 webpack 的原理。")]),e._v(" "),r("h2",{attrs:{id:"分析模块-提取依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析模块-提取依赖"}},[e._v("#")]),e._v(" 分析模块，提取依赖")]),e._v(" "),r("p",[e._v("当我们打包 js 文件时，首先需要一个入口文件"),r("code",[e._v("（entry）")]),e._v("，然后提取文件中的依赖"),r("code",[e._v("（dependencies）")]),e._v("。")]),e._v(" "),r("p",[e._v("使用"),r("code",[e._v("@babel/parser")]),e._v("将文件代买转入未抽象语法树（AST）,使用"),r("code",[e._v("@babel/traverse")]),e._v("从 "),r("code",[e._v("import")]),e._v("声明语句中提取依赖。")]),e._v(" "),r("p",[e._v("使用"),r("code",[e._v("@babel/core")]),e._v("的"),r("code",[e._v("transformFromAst")]),e._v("方法将抽象语法树转化为浏览器可执行的 es5 代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    // 分析模块\n    const moduleAnalyser = (filename) => {\n        // 读取文件内容\n        const content = fs.readFileSync(filename, 'utf-8');\n        // 获取抽象语法树\n        const ast = paser.parse(content, {\n            sourceType: 'module'\n        });\n\n        const dependencies = {};\n        // 遇到声明语法时执行，获取依赖\n        traverse(ast, {\n            ImportDeclaration({node}) {\n                const dirname = path.dirname(filename);\n                const newFile = './' + path.join(dirname, node.source.value)\n\n                dependencies[node.source.value] = newFile;\n            }\n        });\n        // 将抽象语法树转化为浏览器能够识别的代码\n        const {code} = babel.transformFromAst(ast, null, {\n            presets: [\"@babel/preset-env\"]\n        });\n\n        return {\n            filename,\n            dependencies,\n            code\n        }\n    }\n\n")])])]),r("h2",{attrs:{id:"提取深层依赖-绘制依赖图谱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提取深层依赖-绘制依赖图谱"}},[e._v("#")]),e._v(" 提取深层依赖，绘制依赖图谱")]),e._v(" "),r("p",[e._v("入口文件依赖的文件，也可能依赖引入其他文件，使用"),r("strong",[e._v("递归")]),e._v("的方法提取出来，绘制依赖文件的图谱，便于将所有 js 文件打包在一起")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const makeDependenciesGraph = (entry) => {\n    const entryModule = moduleAnalyser(entry);\n    const graphArr = [entryModule]\n    for(let i = 0; i < graphArr.length; i++) {\n        const item = graphArr[i];\n        const { dependencies } = item;\n        if(dependencies) {\n            for(let j in dependencies) {\n                graphArr.push(moduleAnalyser(dependencies[j]));\n            }\n        }\n    }\n    const graph = {};\n    graphArr.forEach(item => {\n        graph[item.filename] = {\n            dependencies: item.dependencies,\n            code: item.code\n        }\n    })\n\n    return graph;\n}\n\n")])])]),r("h2",{attrs:{id:"生成最终代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成最终代码"}},[e._v("#")]),e._v(" 生成最终代码")]),e._v(" "),r("p",[e._v("使用闭包函数将依赖图谱合并成最终代码")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const generateCode = (entry) => {\n    const graph = JSON.stringify(makeDependenciesGraph(entry));\n\n    return `\n        (function(graph) {\n            function require(module) {\n                function localRequire(relativePath) {\n                    return require(graph[module].dependencies[relativePath]);\n                }\n                var exports = {};\n                (function(require, exports, code) {\n                    eval(code);\n                })(localRequire, exports, graph[module].code);\n                return exports;\n            }\n            require('${entry}');\n        })(${graph});\n    `\n}\n\n")])])]),r("p",[r("a",{attrs:{href:"https://github.com/licop/webpack4.0_learn/blob/master/%E7%BC%96%E5%86%99bundler%E6%BA%90%E7%A0%81/bundler/bundler.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整源码地址"),r("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=a.exports}}]);