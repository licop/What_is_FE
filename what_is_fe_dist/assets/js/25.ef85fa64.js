(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{394:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-高级概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-高级概念"}},[t._v("#")]),t._v(" webpack 高级概念")]),t._v(" "),a("h2",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree Shaking")]),t._v(" "),a("p",[a("code",[t._v("tree shaking")]),t._v(" 就是使得 js 文件中没有被引入的代码不被打包到文件中, "),a("code",[t._v("tree shaking")]),t._v(" 只在 ES Module 的引入方式下生效， 例如 "),a("code",[t._v("import")]),t._v(" 和 "),a("code",[t._v("export")]),t._v(", 如果使用"),a("code",[t._v("commonjs")]),t._v("的打包方式则不生效。")]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("mode")]),t._v(" 配置为"),a("code",[t._v("development")]),t._v(" 则 webpack 配置需要添加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    usedExports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到未引用的代码")]),t._v("\n    mininize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 压缩时删掉未引用的代码")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("确保项目里没有"),a("strong",[t._v("副作用")]),t._v("（模块执行时除了导出成员之外所做的事情），将"),a("code",[t._v("package.json")]),t._v("里添加"),a("code",[t._v("sideEffects")]),t._v("属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以为文件数组，标记那些文件有副作用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webapck.config.js")]),t._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启功能")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果是生成环境 "),a("code",[t._v("mode")]),t._v(" 配置为"),a("code",[t._v("production")]),t._v("，则 webpack 不用添加其他配置，webpack 会自动实现"),a("code",[t._v("tree shaking")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 Tree Shaking"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"development-和-production-区分打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-和-production-区分打包"}},[t._v("#")]),t._v(" development 和 production 区分打包")]),t._v(" "),a("p",[t._v("由于开发模式(development)和生产模式(production) 下对打包需求的不一样，所以 webpack 打包的最佳实践是将两种模式下不同的配置抽离出来")]),t._v(" "),a("p",[t._v("比如"),a("code",[t._v("source map")]),t._v("在两种环境下需求不一样; "),a("code",[t._v("development")]),t._v("模式需要"),a("code",[t._v("热模块替换 HMR")]),t._v("和"),a("code",[t._v("Tree Shaking")]),t._v("配置,"),a("code",[t._v("production")]),t._v("则不需要。")]),t._v(" "),a("p",[t._v("所以我们需要三个 webpack 配置，"),a("code",[t._v("webpack.common.js")]),t._v("， "),a("code",[t._v("webpack.dev.js")]),t._v("和"),a("code",[t._v("webpack.prod.js")]),t._v(", 然后使用"),a("code",[t._v("webpack-merge")]),t._v("插件将其不同环境下的特性和公用的部分合并。")]),t._v(" "),a("h2",{attrs:{id:"代码分割-code-splitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码分割-code-splitting"}},[t._v("#")]),t._v(" 代码分割 code splitting")]),t._v(" "),a("p",[t._v("在最开始使用 Webpack 的时候, 都是将所有的 js 文件全部打包到一个 build.js 文件中(文件名取决与在 webpack.config.js 文件中 output.filename), 但是在大型项目中, build.js 可能过大, 导致页面加载时间过长. 这个时候就需要"),a("code",[t._v("code splitting")]),t._v(", "),a("code",[t._v("code splitting")]),t._v("就是将文件分割成块(chunk), 我们可以定义一些分割点(split point), 根据这些分割点对文件进行分块, 并实现按需加载。")]),t._v(" "),a("p",[t._v("代码分割，也就是 "),a("code",[t._v("Code Splitting")]),t._v(" 一般需要做这些事情：")]),t._v(" "),a("ul",[a("li",[t._v("为 "),a("code",[t._v("Vendor")]),t._v(" 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）")]),t._v(" "),a("li",[t._v("为 "),a("code",[t._v("Manifest")]),t._v(" （Webpack 的 Runtime 代码）单独打包")]),t._v(" "),a("li",[t._v("为不同入口的业务代码打包，也就是代码分割异步加载（同理，也是为了缓存和加载速度）")]),t._v(" "),a("li",[t._v("为异步公共加载的代码打一个的包")])]),t._v(" "),a("p",[t._v("Webpack 4 下还有一个大改动，就是废弃了 "),a("code",[t._v("CommonsChunkPlugin")]),t._v("，引入了 "),a("code",[t._v("optimization.splitChunks")]),t._v(" 这个选项。\n"),a("code",[t._v("optimization.splitChunks")]),t._v(" 默认是不用设置的。默认情况下"),a("code",[t._v("splitChunks")]),t._v("只对异步代码进行分割，")]),t._v(" "),a("blockquote",[a("p",[t._v("默认 Webpack 4 只会对按需加载的代码做分割。"),a("code",[t._v("splitChunks.chunks")]),t._v("默认为"),a("code",[t._v("async")]),t._v(", 如果我们需要配置初始加载的代码也加入到代码分割中，可以设置 "),a("code",[t._v("splitChunks.chunks")]),t._v(" 为 'all'。")])]),t._v(" "),a("p",[t._v("将所有的公共模块提取到单独的 bundler 当中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Webpack 4 的 "),a("code",[t._v("Code Splitting")]),t._v(" 最大的特点就是配置简单（0 配置起步），和"),a("strong",[t._v("基于内置规则自动拆分")]),t._v("。内置的代码切分的规则是这样的：")]),t._v(" "),a("ul",[a("li",[t._v("新 chunk 被两个及以上模块引用，或者来自 "),a("code",[t._v("node_modules")])]),t._v(" "),a("li",[t._v("新 chunk 大于 30kb （压缩之前）")]),t._v(" "),a("li",[t._v("异步加载并发加载的 chunk 数不能大于 5 个")]),t._v(" "),a("li",[t._v("初始加载的 chunk 数不能大于 3 个")])]),t._v(" "),a("p",[t._v("简单的说，Webpack 会把代码中的公共模块自动抽出来，变成一个包，前提是这个包大于 30kb，不然 Webpack 是不会抽出公共代码的，因为增加一次请求的成本是不能忽视的。")]),t._v(" "),a("p",[a("strong",[t._v("更多参考")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitChunksPlugin 的文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366",target:"_blank",rel:"noopener noreferrer"}},[t._v(" webpack 4: Code Splitting, chunk graph and the splitChunks optimization "),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[t._v("#")]),t._v(" chunk")]),t._v(" "),a("p",[a("code",[t._v("Chunk")]),t._v("不同于"),a("code",[t._v("entry")]),t._v("、 "),a("code",[t._v("output")]),t._v("、"),a("code",[t._v("module")]),t._v("这样的概念，它们对应着 Webpack 配置对象中的一个字段，"),a("code",[t._v("Chunk")]),t._v("没有单独的配置字段，但是这个词出现在"),a("code",[t._v("CommonsChunkPlugin")]),t._v("（Webpack3 以前）、"),a("code",[t._v("optimization.splitChunks")]),t._v("（Webpack4 以后）这样的名称之中。在 webpack 中使用"),a("code",[t._v("code splitting")]),t._v("或者"),a("code",[t._v("entry入口")]),t._v("每生成一个入口就是一个"),a("code",[t._v("chunk")]),t._v(";")]),t._v(" "),a("p",[a("img",{attrs:{src:"/chunk.png",alt:""}})]),t._v(" "),a("p",[t._v("产生 Chunk 有三种途径：")]),t._v(" "),a("ol",[a("li",[t._v("entry 入口")]),t._v(" "),a("li",[t._v("异步加载模块")]),t._v(" "),a("li",[t._v("代码分割（code spliting）")])]),t._v(" "),a("h2",{attrs:{id:"预获取-预加载模块-prefetch-preload-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预获取-预加载模块-prefetch-preload-module"}},[t._v("#")]),t._v(" 预获取/预加载模块(prefetch/preload module)")]),t._v(" "),a("p",[t._v("当使用"),a("code",[t._v("import() 语法")]),t._v("动态引入文件实现"),a("code",[t._v("lazy loading")]),t._v("懒加载时，可以仅在需要的时候才实现加载文件，减少加载时长。")]),t._v(" "),a("p",[t._v('在声明 import 时，使用下面这些内置指令，可以让 webpack 输出 "resource hint(资源提示)"，来告知浏览器：')]),t._v(" "),a("ul",[a("li",[t._v("prefetch(预获取)：将来某些导航下可能需要的资源")]),t._v(" "),a("li",[t._v("preload(预加载)：当前导航下可能需要资源")])]),t._v(" "),a("p",[t._v("下面这个 "),a("code",[t._v("prefetch")]),t._v(" 的简单示例中，有一个 "),a("code",[t._v("HomePage")]),t._v(" 组件，其内部渲染一个 "),a("code",[t._v("LoginButton")]),t._v(" 组件，然后在点击后按需加载 "),a("code",[t._v("LoginModal")]),t._v(" 组件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("LoginButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackPrefetch: true */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./path/to/LoginModal.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 prefetch/preload 关于参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"对-css-文件进行代码分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-css-文件进行代码分割"}},[t._v("#")]),t._v(" 对 css 文件进行代码分割")]),t._v(" "),a("p",[t._v("webpack 会默认将 css 打包到 js 文件中，所谓的"),a("code",[t._v("css in js")])]),t._v(" "),a("p",[a("code",[t._v("MiniCssExtractPlugin")]),t._v("插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。 webpack5 已经支持了热更新，多用于"),a("code",[t._v("production")]),t._v("环境下生成。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MiniCssExtractPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mini-css-extract-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("i")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MiniCssExtractPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用"),a("code",[t._v("css-minimizer-webpack-plugin")]),t._v("插件对样式进行压缩")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/plugins/mini-css-extract-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 mini-css-extract-plugin 参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"shimming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shimming"}},[t._v("#")]),t._v(" shimming")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("ProvidePlugin")]),t._v("可以全局自动加载模块，而不必在任何地方"),a("code",[t._v("import")]),t._v("或"),a("code",[t._v("require")]),t._v("这些模块")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProvidePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    _join"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"join"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/shimming/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 shimming 的的参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"输出文件名-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出文件名-hash"}},[t._v("#")]),t._v(" 输出文件名 Hash")]),t._v(" "),a("p",[t._v("为了解决客户端静态文件缓存过期时间过长，应用发生更新部署过后，客户端没有改变的问题。建议在生产模式下，文件名使用 Hash。")]),t._v(" "),a("p",[t._v("webpack 对于文件名支持三种 Hash，效果各不相同。")]),t._v(" "),a("p",[t._v("项目级别 Hash，每个文件的 hash 值都项目，一旦项目有任何改变，hash 值都会发生变化")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]-[hash]-bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("chunk 级别 Hash，同一 chunk 的 hash 值相同，文件改变时同一个 chunk 的 hash 值会发生变化")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]-[chunkhash]-bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("文件 级别 Hash，不同的文件有不同的 hash 值，文件变化更新当前文件的 hash 发生变化，最佳方案")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将hash长度设置为8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]-[contenthash:8]-bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"webpack-分析工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-分析工具"}},[t._v("#")]),t._v(" webpack 分析工具")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://alexkuz.github.io/webpack-chart/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chart"),a("OutboundLink")],1),t._v(": webpack stats 可交互饼图。\n"),a("a",{attrs:{href:"https://chrisbateman.github.io/webpack-visualizer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-visualizer"),a("OutboundLink")],1),t._v(": 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。\n"),a("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-bundle-analyzer"),a("OutboundLink")],1),t._v("：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。\n"),a("a",{attrs:{href:"https://webpack.docschina.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack bundle optimize helper"),a("OutboundLink")],1),t._v("：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。\n"),a("a",{attrs:{href:"https://webpack.docschina.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bundle-stats"),a("OutboundLink")],1),t._v("：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。")])])}),[],!1,null,null,null);s.default=n.exports}}]);