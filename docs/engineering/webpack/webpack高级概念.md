# webpack 高级概念

## Tree Shaking

`tree shaking` 就是使得 js 文件中没有被引入的代码不被打包到文件中, `tree shaking` 只在 ES Module 的引入方式下生效， 例如 `import` 和 `export`, 如果使用`commonjs`的打包方式则不生效。

### 使用

如果 `mode` 配置为`development` 则 webpack 配置需要添加

```

  mode: 'development',
  optimization: {
    usedExports: true, // 找到未引用的代码
    mininize: true   // 压缩时删掉未引用的代码
  }
```

确保项目里没有**副作用**（模块执行时除了导出成员之外所做的事情），将`package.json`里添加`sideEffects`属性

```
  // package.json
  {
    "sideEffects": false // 可以为文件数组，标记那些文件有副作用
  }

  // webapck.config.js
  optimization: {
    "sideEffects": true  //开启功能
  }
```

如果是生成环境 `mode` 配置为`production`，则 webpack 不用添加其他配置，webpack 会自动实现`tree shaking`

[更多关于 Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/)

## development 和 production 区分打包

由于开发模式(development)和生产模式(production) 下对打包需求的不一样，所以 webpack 打包的最佳实践是将两种模式下不同的配置抽离出来

比如`source map`在两种环境下需求不一样; `development`模式需要`热模块替换 HMR`和`Tree Shaking`配置,`production`则不需要。

所以我们需要三个 webpack 配置，`webpack.common.js`， `webpack.dev.js`和`webpack.prod.js`, 然后使用`webpack-merge`插件将其不同环境下的特性和公用的部分合并。

## 代码分割 code splitting

在最开始使用 Webpack 的时候, 都是将所有的 js 文件全部打包到一个 build.js 文件中(文件名取决与在 webpack.config.js 文件中 output.filename), 但是在大型项目中, build.js 可能过大, 导致页面加载时间过长. 这个时候就需要`code splitting`, `code splitting`就是将文件分割成块(chunk), 我们可以定义一些分割点(split point), 根据这些分割点对文件进行分块, 并实现按需加载。

代码分割，也就是 `Code Splitting` 一般需要做这些事情：

- 为 `Vendor` 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
- 为 `Manifest` （Webpack 的 Runtime 代码）单独打包
- 为不同入口的业务代码打包，也就是代码分割异步加载（同理，也是为了缓存和加载速度）
- 为异步公共加载的代码打一个的包

Webpack 4 下还有一个大改动，就是废弃了 `CommonsChunkPlugin`，引入了 `optimization.splitChunks` 这个选项。
`optimization.splitChunks` 默认是不用设置的。默认情况下`splitChunks`只对异步代码进行分割，

> 默认 Webpack 4 只会对按需加载的代码做分割。`splitChunks.chunks`默认为`async`, 如果我们需要配置初始加载的代码也加入到代码分割中，可以设置 `splitChunks.chunks` 为 'all'。

将所有的公共模块提取到单独的 bundler 当中

```
  optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
```

Webpack 4 的 `Code Splitting` 最大的特点就是配置简单（0 配置起步），和**基于内置规则自动拆分**。内置的代码切分的规则是这样的：

- 新 chunk 被两个及以上模块引用，或者来自 `node_modules`
- 新 chunk 大于 30kb （压缩之前）
- 异步加载并发加载的 chunk 数不能大于 5 个
- 初始加载的 chunk 数不能大于 3 个

简单的说，Webpack 会把代码中的公共模块自动抽出来，变成一个包，前提是这个包大于 30kb，不然 Webpack 是不会抽出公共代码的，因为增加一次请求的成本是不能忽视的。

**更多参考**

- [SplitChunksPlugin 的文档](https://webpack.js.org/plugins/split-chunks-plugin/)
- [ webpack 4: Code Splitting, chunk graph and the splitChunks optimization ](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

## chunk

`Chunk`不同于`entry`、 `output`、`module`这样的概念，它们对应着 Webpack 配置对象中的一个字段，`Chunk`没有单独的配置字段，但是这个词出现在`CommonsChunkPlugin`（Webpack3 以前）、`optimization.splitChunks`（Webpack4 以后）这样的名称之中。在 webpack 中使用`code splitting`或者`entry入口`每生成一个入口就是一个`chunk`;

![](/chunk.png)

产生 Chunk 有三种途径：

1. entry 入口
2. 异步加载模块
3. 代码分割（code spliting）

## 预获取/预加载模块(prefetch/preload module)

当使用`import() 语法`动态引入文件实现`lazy loading`懒加载时，可以仅在需要的时候才实现加载文件，减少加载时长。

在声明 import 时，使用下面这些内置指令，可以让 webpack 输出 "resource hint(资源提示)"，来告知浏览器：

- prefetch(预获取)：将来某些导航下可能需要的资源
- preload(预加载)：当前导航下可能需要资源

下面这个 `prefetch` 的简单示例中，有一个 `HomePage` 组件，其内部渲染一个 `LoginButton` 组件，然后在点击后按需加载 `LoginModal` 组件。

```
LoginButton.js

import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```

[更多 prefetch/preload 关于参考](https://webpack.docschina.org/guides/code-splitting/)

## 对 css 文件进行代码分割

webpack 会默认将 css 打包到 js 文件中，所谓的`css in js`

`MiniCssExtractPlugin`插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。 webpack5 已经支持了热更新，多用于`production`环境下生成。

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};

```

使用`css-minimizer-webpack-plugin`插件对样式进行压缩

[更多 mini-css-extract-plugin 参考](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)

## shimming

使用`ProvidePlugin`可以全局自动加载模块，而不必在任何地方`import`或`require`这些模块

```
  plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			_join: ['lodash', 'join']
		}),
	]
```

[更多关于 shimming 的的参考](https://webpack.docschina.org/guides/shimming/)

## 输出文件名 Hash

为了解决客户端静态文件缓存过期时间过长，应用发生更新部署过后，客户端没有改变的问题。建议在生产模式下，文件名使用 Hash。

webpack 对于文件名支持三种 Hash，效果各不相同。

项目级别 Hash，每个文件的 hash 值都项目，一旦项目有任何改变，hash 值都会发生变化

```
{
  output: {
    filename: '[name]-[hash]-bundle.js'
  }
}
```

chunk 级别 Hash，同一 chunk 的 hash 值相同，文件改变时同一个 chunk 的 hash 值会发生变化

```
{
  output: {
    filename: '[name]-[chunkhash]-bundle.js'
  }
}
```

文件 级别 Hash，不同的文件有不同的 hash 值，文件变化更新当前文件的 hash 发生变化，最佳方案

```
// 将hash长度设置为8
{
  output: {
    filename: '[name]-[contenthash:8]-bundle.js'
  }
}
```

## webpack 分析工具

[webpack-chart](https://alexkuz.github.io/webpack-chart/): webpack stats 可交互饼图。
[webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/): 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
[webpack bundle optimize helper](https://webpack.docschina.org/guides/code-splitting/)：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。
[bundle-stats](https://webpack.docschina.org/guides/code-splitting/)：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。
