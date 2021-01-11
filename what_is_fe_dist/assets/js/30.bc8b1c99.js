(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{397:function(e,t,n){"use strict";n.r(t);var r=n(27),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"自动化构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建"}},[e._v("#")]),e._v(" 自动化构建")]),e._v(" "),n("p",[e._v("自动化构建就是把"),n("strong",[e._v("源代码")]),e._v("自动转化为"),n("strong",[e._v("生产代码")]),e._v("。作用就是脱离运行环境兼容的带来的种种问题，在开发阶段可以使用提高效率的语法、规范和标准。")]),e._v(" "),n("h2",{attrs:{id:"npm-scripts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts"}},[e._v("#")]),e._v(" Npm Scripts")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/using-npm/scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Npm Scripts"),n("OutboundLink")],1),e._v(" 是实现自动化构建工作流最简单的方式。npm 允许在 package.json 文件里面，使用 scripts 字段定义脚本命令。具体使用细节可以参考"),n("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Npm Scripts 使用指南"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("但是如果构建较大型的项目，实现复杂的功能，"),n("strong",[e._v("Npm Script")]),e._v("的功能就显得有点吃力，可以借助一些自动化构建工具，如 Grunt，Gulp 和 FIS 等")]),e._v(" "),n("blockquote",[n("p",[e._v("注： 这里自动化构建工具没有 webpack，因为 webpack 和 rollup.js 这种 本质上是一个模块打包器")])]),e._v(" "),n("h2",{attrs:{id:"grunt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grunt"}},[e._v("#")]),e._v(" Grunt")]),e._v(" "),n("p",[e._v("Grunt 是老牌的构建工具，特点是配置驱动，需要做的就是了解各种插件的功能，然后把配置整合到 Gruntfile.js 中")]),e._v(" "),n("p",[e._v("Grunt 缺点也是配置驱动，当任务非常多的情况下，试图用配置完成所有事简直就是个灾难；再就是它的 I/O 操作也是个弊病，它的每一次任务都需要从磁盘中读取文件，处理完后再写入到磁盘，例如：我想对多个 less 进行预编译、压缩操作，那么 Grunt 的操作就是：")]),e._v(" "),n("blockquote",[n("p",[e._v("读取 less 文件 -> 编译成 css -> 存储到磁盘 -> 读取 css -> 压缩处理 -> 存储到磁盘")])]),e._v(" "),n("p",[e._v("这样一来当资源文件较多，任务较复杂的时候性能就是个问题了。")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/grunt",target:"_blank",rel:"noopener noreferrer"}},[e._v("grunt examples 参考"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"glup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#glup"}},[e._v("#")]),e._v(" Glup")]),e._v(" "),n("p",[e._v("Glup 是目前市面上最流行的自动化构建系统。Gulp 特点是代码驱动，写任务就和写普通的 Node.js 代码一样。")]),e._v(" "),n("p",[e._v("对文件读取是流式操作（Stream），也就是说一次 I/O 可以处理多个任务，还是 less 的例子，Gulp 的流程就是：")]),e._v(" "),n("blockquote",[n("p",[e._v("读取 less 文件 -> 编译成 css -> 压缩处理 -> 存储到磁盘")])]),e._v(" "),n("p",[e._v("Gulp 作为任务类型的工具没有明显的缺点，唯一的问题可能就是完成相同的任务它需要写的代码更多一些，所以除非是项目有历史包袱（原有项目就是基于 Grunt 构建）在 Grunt 与 Gulp 对比看来还是比较推荐 Gulp。")]),e._v(" "),n("h3",{attrs:{id:"gulp-基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-基本使用"}},[e._v("#")]),e._v(" gulp 基本使用")]),e._v(" "),n("p",[e._v("gulp 构建任务的方式就是 commonjs 导出函数成员的方式，每一个导出的函数是一个任务。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// gulp 的任务函数都是异步的\n// 可以通过调用回调函数标识任务完成\nexports.foo = done => {\n  console.log('foo task working~')\n  done() // 标识任务执行完成\n}\n\n// default 是默认任务\n// 在运行是可以省略任务名参数\nexports.default = done => {\n  console.log('default task working~')\n  done()\n}\n\n// v4.0 之前需要通过 gulp.task() 方法注册任务\nconst gulp = require('gulp')\n\ngulp.task('bar', done => {\n  console.log('bar task working~')\n  done()\n})\n")])])]),n("h3",{attrs:{id:"gulp-的组合任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-的组合任务"}},[e._v("#")]),e._v(" gulp 的组合任务")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("series")]),e._v(", "),n("code",[e._v("parallel")]),e._v("可以创建串行任务和并行任务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const { series, parallel } = require('gulp')\n\nconst task1 = done => {\n  setTimeout(() => {\n    console.log('task1 working~')\n    done()\n  }, 1000)\n}\n\nconst task2 = done => {\n  setTimeout(() => {\n    console.log('task2 working~')\n    done()\n  }, 1000)\n}\n\nconst task3 = done => {\n  setTimeout(() => {\n    console.log('task3 working~')\n    done()\n  }, 1000)\n}\n\n// 让多个任务按照顺序依次执行\nexports.foo = series(task1, task2, task3)\n\n// 让多个任务同时执行\nexports.bar = parallel(task1, task2, task3)\n\n")])])]),n("h3",{attrs:{id:"gulp-的异步任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-的异步任务"}},[e._v("#")]),e._v(" gulp 的异步任务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const fs = require('fs')\n\nexports.callback = done => {\n  console.log('callback task')\n  done()\n}\n\nexports.callback_error = done => {\n  console.log('callback task')\n  done(new Error('task failed'))\n}\n\nexports.promise = () => {\n  console.log('promise task')\n  // resolve不虚返回任何值，gulp会忽略\n  return Promise.resolve()\n}\n\nexports.promise_error = () => {\n  console.log('promise task')\n  return Promise.reject(new Error('task failed'))\n}\n\nconst timeout = time => {\n  return new Promise(resolve => {\n    setTimeout(resolve, time)\n  })\n}\n\nexports.async = async () => {\n  await timeout(1000)\n  console.log('async task')\n}\n\nexports.stream = () => {\n  const read = fs.createReadStream('yarn.lock')\n  const write = fs.createWriteStream('a.txt')\n  read.pipe(write)\n  return read\n}\n")])])]),n("h3",{attrs:{id:"gulp-构建核心工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-构建核心工作原理"}},[e._v("#")]),e._v(" Gulp 构建核心工作原理")]),e._v(" "),n("p",[e._v("Gulp 构建三个核心的概念：")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("读取流（输入）")])]),e._v(" "),n("li",[n("strong",[e._v("转换流（加工）")])]),e._v(" "),n("li",[n("strong",[e._v("写入流（输出）")])])]),e._v(" "),n("p",[e._v("下面使用这三个概念将实现 css 文件 进行压缩")]),e._v(" "),n("p",[n("img",{attrs:{src:"/engineering/gulp1.png",alt:""}})]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const fs = require('fs')\nconst { Transform } = require('stream')\n\nexports.default = () => {\n  // 文件读取流\n  const readStream = fs.createReadStream('normalize.css')\n\n  // 文件写入流\n  const writeStream = fs.createWriteStream('normalize.min.css')\n\n  // 文件转换流\n  const transformStream = new Transform({\n    // 核心转换过程\n    transform: (chunk, encoding, callback) => {\n      // 核心装换过程实现\n      // chunk => 读取流中读取到到内容（Buffer）\n      const input = chunk.toString()\n      const output = input.replace(/\\s+/g, '').replace(/\\/\\*.+?\\*\\//g, '')\n      callback(null, output)\n    }\n  })\n\n  // 把读取出来的文件流导入写入文件流\n  return readStream\n    .pipe(transformStream) // 转换\n    .pipe(writeStream) // 写入\n}\n")])])]),n("h3",{attrs:{id:"gulp-文件操作-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-文件操作-api"}},[e._v("#")]),e._v(" gulp 文件操作 API")]),e._v(" "),n("p",[e._v("使用"),n("code",[e._v("src")]),e._v("方法创建文件读取流，使用"),n("code",[e._v("插件")]),e._v("创建转换流对文件进行加工。使用"),n("code",[e._v("dest")]),e._v("方法创建写入流")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const { src, dest } = require('gulp')\nconst cleanCSS = require('gulp-clean-css')\nconst rename = require('gulp-rename')\n\nexports.default = () => {\n  return src('src/*.css')\n    .pipe(cleanCSS())\n    .pipe(rename({ extname: '.min.css' }))\n    .pipe(dest('dist'))\n}\n\n")])])]),n("h3",{attrs:{id:"gulp-案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp-案例"}},[e._v("#")]),e._v(" gulp 案例")]),e._v(" "),n("p",[e._v("下面实现一个 gulp 构建项目的完整案例，包含文件，样式、脚本、模板文件的编译、图片文字的转换、文件清除、开发服务器，文件压缩等")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/gulp/zce-gulp-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("gulp 构建完整案例"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"封装工作流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装工作流"}},[e._v("#")]),e._v(" 封装工作流")]),e._v(" "),n("p",[e._v("为了让一个 gulp 案例可以复用，给更多项目和团队使用，可以将 gulpfile.js 封装成一个工作流，发布一个 npm 包的形式")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/gulp/zce-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("gulp 封装工作流"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);