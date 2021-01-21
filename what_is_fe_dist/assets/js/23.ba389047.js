(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{391:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-实例应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-实例应用"}},[t._v("#")]),t._v(" webpack 实例应用")]),t._v(" "),a("h2",{attrs:{id:"打包-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-library"}},[t._v("#")]),t._v(" 打包 library")]),t._v(" "),a("p",[t._v("webpack 除了可以打包一个业务项目应用程序，还可以打包一些类库"),a("code",[t._v("library")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"暴露-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴露-library"}},[t._v("#")]),t._v(" 暴露 library")]),t._v(" "),a("p",[t._v("当我们打包"),a("code",[t._v("library")]),t._v("时，我们希望使用者有多种方式可以引用它，例如"),a("code",[t._v("ES2015 module import")]),t._v(", "),a("code",[t._v("Commonjs Module require")]),t._v(", "),a("code",[t._v("AMD Module require")]),t._v(", "),a("code",[t._v("script标签")]),t._v("等引用方法，，需要在 output 中添加 "),a("code",[t._v("library")]),t._v("和"),a("code",[t._v("libraryTarget")]),t._v(" 属性。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'libary.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        library"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        libraryTarget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this/window/global")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当"),a("code",[t._v("libraryTarget")]),t._v("配置成'umd'时，将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/output/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 libraryTarget 和 library 参考"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"将公用库-externals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将公用库-externals"}},[t._v("#")]),t._v(" 将公用库 externals")]),t._v(" "),a("p",[t._v("有时如果执行 "),a("code",[t._v("webpack")]),t._v("，你会发现创建了一个体积相当大的文件。如果你查看这个文件，会看到公用库如 "),a("code",[t._v("lodash")]),t._v(" 也被打包到代码中。在这种场景中，我们更倾向于把 "),a("code",[t._v("lodash")]),t._v(" 当作 "),a("code",[t._v("peerDependency")]),t._v("。也就是说，用户应该已经安装过 "),a("code",[t._v("lodash")]),t._v("。这是可以使用"),a("code",[t._v("externals")]),t._v("来配置。")]),t._v(" "),a("p",[t._v("具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 CommonJS, AMD, 全局变量和 ES2015 模块。外部 library 可能是以下任何一种形式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    externals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lodash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            commonjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            commonjs2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            amd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("root")]),t._v("：可以通过一个全局变量访问 "),a("code",[t._v("library")]),t._v("（例如，通过 script 标签）。")]),t._v(" "),a("li",[a("strong",[t._v("commonjs")]),t._v("：可以将 "),a("code",[t._v("library")]),t._v(" 作为一个 "),a("code",[t._v("CommonJS")]),t._v(" 模块访问。")]),t._v(" "),a("li",[a("strong",[t._v("commonjs2")]),t._v("：和上面的类似，但导出的是 "),a("code",[t._v("module.exports.default")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("amd")]),t._v("：类似于 "),a("code",[t._v("commonjs")]),t._v("，但使用 AMD 模块系统")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 externals 的参考"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/guides/author-libraries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 library 库打包参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"打包-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-typescript"}},[t._v("#")]),t._v(" 打包 Typescript")]),t._v(" "),a("p",[a("code",[t._v("TypeScript")]),t._v(" 是 "),a("code",[t._v("JavaScript")]),t._v(" 的超集，为其增加了类型系统，可以编译为普通 "),a("code",[t._v("JavaScript")]),t._v(" 代码。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("ts-loader")]),t._v(" 对 tsx 文件进行打包")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.tsx?$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/typescript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 typescript 参考"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"打包-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-pwa"}},[t._v("#")]),t._v(" 打包 PWA")]),t._v(" "),a("p",[t._v("渐进式网络应用程序("),a("code",[t._v("progressive web application - PWA")]),t._v(")，是一种可以提供类似于 native app(原生应用程序) 体验的 web app(网络应用程序)。PWA 可以用来做很多事。其中最重要的是，在离线("),a("code",[t._v("offline")]),t._v(")时应用程序能够继续运行功能。这是通过使用名为 "),a("code",[t._v("Service Workers")]),t._v(" 的 web 技术来实现的。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("workbox-webpack-plugin")]),t._v("可以实现 PWA 功能。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkboxPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GenerateSW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这些选项帮助快速启用 ServiceWorkers")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不允许遗留任何“旧的” ServiceWorkers")]),t._v("\n  clientsClaim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  skipWaiting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这是打包会发现生成一个"),a("code",[t._v("service-worker.js")]),t._v("文件，接下来我们注册 Service Worker")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serviceWorker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/service-worker.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SW registered: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("registrationError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SW registration failed: "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" registrationError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接下来我们停止 "),a("code",[t._v("server")]),t._v(" 并刷新页面，我们会发现依然可以访问到页面。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/progressive-web-application/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多关于 pwa 打包"),a("OutboundLink")],1),t._v("参考")]),t._v(" "),a("h2",{attrs:{id:"打包单页面应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包单页面应用"}},[t._v("#")]),t._v(" 打包单页面应用")]),t._v(" "),a("p",[t._v("当使用"),a("code",[t._v("react-router-dom")]),t._v(" 的 "),a("code",[t._v("BrowserRouter")]),t._v("的路由使用单页面应用时，开发时需要将"),a("code",[t._v("devServer")]),t._v("的"),a("code",[t._v("historyApiFallback")]),t._v("设置为 "),a("code",[t._v("true")]),t._v("，否则将路由将无法跳转，生产环境下需要后端做 "),a("code",[t._v("nignx")]),t._v(" 配置")])])}),[],!1,null,null,null);s.default=e.exports}}]);