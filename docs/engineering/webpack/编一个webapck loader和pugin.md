# 编写一个简单的 loader 和 plugin

## loader 编写

`loader`就是一个函数的 javascript 模块，第一个参数为 webpack 配置里`rules`匹配的文件内容，可以使用`loader-utils`获取从配置中传入`loader`的参数。

以下例子可以将文件里的所有`console.log`打包变成`console.error`

```
    const loaderUtils = require('loader-utils');

    module.exports = function(source) {
        const options = loaderUtils.getOptions(this);
        return source.replace('console.log', 'console.error');
    }

```

我们可以编写 loader 对想要的文件源代码进行包装，比如添加全局的异常监控，国际化等等

[更多关于 loader 查看](https://webpack.docschina.org/api/loaders/)

## plugin 编写

`plugin` 编写使用事件驱动发布订阅的方式进行编写，与 `loader` 是一个函数不同，`plugin` 是一个 `class` 类

`Compiler` 模块是 `webpack` 的主要引擎，它通过 CLI 传递的所有选项， 或者 `Node API`，创建出一个 `compilation` 实例。 它扩展(extend)自 `Tapable` 类，用来注册和调用插件。 大多数面向用户的插件会首先在 `Compiler` 上注册。

`plugin`的作用是在 webpack 的某个时刻执行某项功能，通过`compiler.hooks`来触发某个时刻

以下例子打包之后生成一个版权文件

```
class CopyrightWebpackPlugin {

	apply(compiler) {

		compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
		})

		compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
			compilation.assets['copyright.txt']= {
				source: function() {
					return 'copyright by licop'
				},
				size: function() {
					return 17;
				}
			};
			cb();
		})
	}

}

```

[更多关于 plugin 查看](https://webpack.docschina.org/api/plugins/)
