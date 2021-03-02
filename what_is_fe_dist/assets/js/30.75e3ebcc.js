(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{396:function(e,t,r){"use strict";r.r(t);var a=r(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"脚手架工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脚手架工具"}},[e._v("#")]),e._v(" 脚手架工具")]),e._v(" "),r("p",[r("strong",[e._v("脚手架")]),e._v("的本质作用创建项目基础结构、提供项目规范和约定。")]),e._v(" "),r("p",[e._v("我们可以通过脚手架工具搭建特定类型的项目骨架，然后基于这个骨架进行后续的开发工作，可以减少大量重复的工作，也有利与新开发者快速入手项目")]),e._v(" "),r("p",[e._v("使用脚手架开发的项目通常有：")]),e._v(" "),r("ul",[r("li",[e._v("相同的组织结构")]),e._v(" "),r("li",[e._v("相同的开发范式")]),e._v(" "),r("li",[e._v("相同的模块依赖")]),e._v(" "),r("li",[e._v("相同的工具配置")]),e._v(" "),r("li",[e._v("相同的基础代码")])]),e._v(" "),r("h2",{attrs:{id:"yeoman"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yeoman"}},[e._v("#")]),e._v(" Yeoman")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeoman"),r("OutboundLink")],1),e._v("是一个通用的脚手架工具，我们可以通过创建一个"),r("a",{attrs:{href:"https://yeoman.io/authoring/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generators"),r("OutboundLink")],1),e._v("来创建自己的项目脚手架")]),e._v(" "),r("h3",{attrs:{id:"使用流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[e._v("#")]),e._v(" 使用流程")]),e._v(" "),r("ul",[r("li",[e._v("安装 Yeoman")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install -g yo\n")])])]),r("ul",[r("li",[e._v("明确需求，找到合适的 Generators 并安装")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install generator-node -g\n")])])]),r("ul",[r("li",[e._v("通过 yo 运行 generator")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yo node\n")])])]),r("ul",[r("li",[e._v("通过命令行交互填写选项")]),e._v(" "),r("li",[e._v("生成你所需要的项目结构")])]),e._v(" "),r("h3",{attrs:{id:"自定义-generators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义-generators"}},[e._v("#")]),e._v(" 自定义 Generators")]),e._v(" "),r("p",[e._v("一般通过 Yeoman 开发实现自定义脚手架实际上就是开发一个 "),r("strong",[e._v("Generator")])]),e._v(" "),r("p",[r("strong",[e._v("Generators")]),e._v("基本结构")]),e._v(" "),r("p",[r("img",{attrs:{src:"/engineering/generator.png",alt:""}})]),e._v(" "),r("p",[e._v("下面是使用 Yeoman 开发的脚手架的两个 demo")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/generator-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("generator-sample"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/generators-licop-vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("generator-licop-vue"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"plop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plop"}},[e._v("#")]),e._v(" Plop")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/plopjs/plop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plop"),r("OutboundLink")],1),e._v("一个小而美的脚手架工具, 使用 Plop 可以根据配置自动帮我们在项目创建一些重复的目录结构文件，可以提升创建重复文件时的效率。")]),e._v(" "),r("p",[e._v("下面在 react 项目中使用 plop 自动生成组件文件夹")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/licop/What_is_FE/tree/master/examples/plop-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("plop-react-app"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"脚手架的工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脚手架的工作原理"}},[e._v("#")]),e._v(" 脚手架的工作原理")]),e._v(" "),r("p",[e._v("脚手架工具其实就是一个 "),r("strong",[e._v("node-cli")]),e._v(" 应用")]),e._v(" "),r("p",[e._v("首先在 package.json 里添加 bin 文件，然后新建文件添加"),r("code",[e._v("#!/usr/bin/env node")]),e._v("文件头")]),e._v(" "),r("p",[e._v("脚手架的主要工作过程：通过命令行交互询问用户问题,根据用户回答的结果生成文件，使用"),r("code",[e._v("inquirer")]),e._v("完成这一问答式过程")]),e._v(" "),r("p",[e._v("下面实现一个简易的脚手架 demo")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/licop/js-demo-templates",target:"_blank",rel:"noopener noreferrer"}},[e._v("js-demo-templates"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"更多参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多参考"}},[e._v("#")]),e._v(" 更多参考")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 命令行程序开发教程"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);