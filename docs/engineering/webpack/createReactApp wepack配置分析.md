# creactReactApp webapck 配置分析

`creactReactApp`是最流行的`React`脚手架工具,可以满足各种不同的需求项目的开发和打包， 通过阅读学习`creactReactApp`这种脚手架项目`webpack`配置，可以更多的了解到关于`webpack`的一些细节和深层次的东西，并且学会了如何配置大型项目的`wepbapck`。

执行`npm run eject`之后目录生成`scripts`和`config`两个文件家，`scripts`文件夹包含`npm`命令文件，`config`文件夹则是`webpack`配置相关的文件。

`config`文件夹下包含以下文件和具体作用

```
├── env.js // 获取环境变量
├── getHttpsConfig.js // 获取 Https 配置
├── modules.js // 获取 alias 等
├── paths.js // 获取路径信息
├── pnpTs.js // pnp 加速
├── webpack.config.js // webpack 配置
└── webpackDevServer.config.js // devserver 配置
```

## 思维导图

webpack 开发模式`delvploment`和生产模式`production`很多配置是不一样的，`creactReactApp`没有像常规的做法分为`common`,`dev`,`prd`三个配置文件进行打包，而是将所有环境配置都写在一个文件中。为方便分析，提取了不同环境相同和不同配置做成思维导图

![](/create-react-app+webpack配置.svg)

## 配置详解

### mode

- dev
  - develop // 开发模式，不进行优化提升开发效率
- prd
  - production // 生产模式，默认开启代码优化

### bail

在第一个错误出现时抛出失败结果，而不是容忍它，会导致打包退出

- dev
  - 默认值 false
- prd
  - true

### devtool

- dev
  - cheap-module-source-map 没有列信息不包含 loader 的 sourcemap
- prd
  - source-map

### entry

- common
  - \${appIndexJs} 代码入口
- dev
  - \${appIndexJs} 代码入口
  - react-dev-utils/webpackHotDevClient // 解决模块热更新 websocket 可能出现的问题

### output

- common
  - publicPath: \${publicUrlOrPath} // 可以放置 cdn 地址
  - jsonpFunction
  - globalObject: 'this' // 决定使用哪个全局对象来挂载 library
  - devtoolModuleFilenameTemplate // 从硬盘上获取依赖的具体位置，来帮助调错
- dev
  - path: undefined // 打包进入内存
  - pathInfo: true // bundle 中引入「所包含模块信息」的相关注释
  - filename: static/js/bundle.js // 文件名
  - chunkFilename: static/js/[name].bundle.js // 非入口 chunk 文件的名称
- prd
  - path: \${appBuildPath} // 目标输出目录 path 的绝对路径
  - filename: static/js/[name].[contenthash:8].js // 文件名
  - chunkFilename: static/js/[name].[contenthash:8].chunk.js // 非入口 chunk 文件的名称

### resolve

- common
  - alias // 别名
  - extensions // 自动解析确定的扩展
  - modules // webpack 解析模块时应该搜索的目录
  - plugins
    - ModuleScopePlugin // 限制自己编写的模块只能从 src 引入
    - PnpWebpackPlugin //

### resolveLoader

引入 loader 时才会执行

### optimization

- prd
  - minimize: true // 是否压缩， 线上环境压缩
  - minimizer
    - TerserPlugin // 压缩 js
    - OptimizeCSSAssetsPlugin // 优化压缩 css
  - splitChunks // 用于 code-splitting 代码拆分
    - chunks: all //动态和非动态模块同时进行优化打包
    - name: false
  - runtimeChunk // 把 runtime 模块的代码单独打包
    - name: entrypoint => runtime-\${entrypoint.name}

### module

- common
  - strictExportPresence // 引入模块必须明确导出自己的内容
- rules
  - js|mjs|jsx|ts|tsx 先进行 eslint 语法检测
  - /.bmp/, /\.gif/, /.jpe?g/, /\.png/ url-loader 解析
  - js|mjs|jsx|ts|tsx babel-loader，cacheDirectory: true 开启缓存
  - /.css\$/ style-loader MiniCssExtractPlugin css-loader postcss-loader
  - /.module.css\$/ 开启 cssmodule
  - 同时也支持 sass 和 sassmodule

### plugins

- common

  - HtmlWebpackPlugin //打包到 Html 中
  - InterpolateHtmlPlugin // 允许在 html 中加入变量
  - ModuleNotFoundPlugin // 找不到 module 提示
  - DefinePlugin // 定义变量
  - ManifestPlugin // 资源映射文件
  - IgnorePlugin // 忽略掉某些包
  - ForkTsCheckerWebpackPlugin // Ts 类型检测

- dev

  - HotModuleReplacementPlugin // 热更新
  - CaseSensitivePathsPlugin // 路径区分大小写
  - WatchMissingNodeModulesPlugin // npm install 后不需要重新 restart

- prd

  - MiniCssExtractPlugin // 将 css 提取到单独的文件
  - WorkboxWebpackPlugin // pwa 开启 servicework
