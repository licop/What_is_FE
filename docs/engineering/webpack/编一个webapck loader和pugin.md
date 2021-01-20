# 编写一个简单的 loader 和 plugin

## loader 编写

`loader`就是一个函数的 javascript 模块，第一个参数为 webpack 配置里`rules`匹配的文件内容，可以使用`loader-utils`获取从配置中传入`loader`的参数。

以下例子可以将文件里的所有`console.log`打包变成`console.error`

```js
const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  return source.replace("console.log", "console.error");
};
```

我们可以编写 loader 对想要的文件源代码进行包装，比如添加全局的异常监控，国际化等等

webapck 的 loader 加载资源的过程有点类似于一个工作管道，可以在加载过程中依次使用多个 loader，要求管道工作过后的结果必须是一段 javascript 代码，否则打包的内容会报错。所以一个 loader 返回的结果要么要么是一段 javascript 代码，要么在找个一个其他的 loader 来处理这段结果。

[示例完整的 loader 源码](https://github.com/licop/webpack4.0_learn/tree/master/%E7%BC%96%E5%86%99loader/makeLoader)
[编写一个 markdown 文件的 loader](https://github.com/licop/What_is_FE/tree/master/examples/webpack-demo/11-markdown-loader)
[更多关于 loader 查看](https://webpack.docschina.org/api/loaders/)

## plugin 编写

`plugin` 通过钩子机制实现，webpack 工作过程中很多环节，便于 webpack 的扩展几乎给每个环节都埋下了一个钩子(hooks)，我们给每个节点挂载不同的任务，就可以通过`plugin`扩展 webpack 的能力。与 `loader` 是一个函数不同，`plugin` 是一个带有 `apply` 方法的 `class` 类

`Compiler` 模块是 `webpack` 的主要引擎，它通过 CLI 传递的所有选项， 或者 `Node API`，创建出一个 `compilation` 实例。 它扩展(extend)自 `Tapable` 类，用来注册和调用插件。 大多数面向用户的插件会首先在 `Compiler` 上注册。

`plugin`的作用是在 webpack 的某个时刻执行某项功能，通过`compiler.hooks`来触发某个时刻

以下例子打包之后生成一个版权文件

```js
class CopyrightWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap("CopyrightWebpackPlugin", (compilation) => {
      console.log("compiler");
    });
    // emit是一个钩子，即将往输出目录输出文件时执行
    compiler.hooks.emit.tapAsync(
      "CopyrightWebpackPlugin",
      (compilation, cb) => {
        compilation.assets["copyright.txt"] = {
          source: function() {
            return "copyright by licop";
          },
          size: function() {
            return 17;
          },
        };
        cb();
      }
    );
  }
}
```

[示例完整的 plugin 源码](https://github.com/licop/webpack4.0_learn/tree/master/%E7%BC%96%E5%86%99plugin/plugin)
[编写一个删除注释的插件](https://github.com/licop/What_is_FE/tree/master/examples/webpack-demo/16-my-webpack-plugin)
[更多关于 plugin 查看](https://webpack.docschina.org/api/plugins/)
