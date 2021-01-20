(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{404:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("code",[t._v("CSRF")]),t._v(" 或 "),a("code",[t._v("XSRF")]),t._v("， 全称 "),a("code",[t._v("Cross-Site Request Forgery")]),t._v(" 跨站请求伪造漏洞, 它是前端常见的一种攻击方式。")]),t._v(" "),a("p",[a("code",[t._v("CSRF")]),t._v(" 攻击允许恶意用户在另一个用户不知情的情况下利用其身份信息执行操作。通过一张图来认识它的攻击手段。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/csrf.png",alt:""}})]),t._v(" "),a("p",[t._v("下面是 MDN 关于 CSRF 举的实例:")]),t._v(" "),a("p",[t._v("John 是一个恶意用户，他知道某个网站允许已登陆用户使用包含了账户名和数额的 HTTP POST 请求来转帐给指定的账户。John 构造了包含他的银行卡信息和某个数额做为隐藏表单项的表单，然后通过 Email 发送给了其它的站点用户（还有一个伪装成到 “快速致富”网站的链接的提交按钮）.")]),t._v(" "),a("h2",{attrs:{id:"如何防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),a("h3",{attrs:{id:"验证码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证码"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),a("p",[t._v("对于敏感操作加入验证码，强制用户与网站进行交互，能很好遏制"),a("code",[t._v("CSRF")]),t._v("攻击。")]),t._v(" "),a("h3",{attrs:{id:"检查-referer-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-referer-字段"}},[t._v("#")]),t._v(" 检查 Referer 字段")]),t._v(" "),a("p",[a("code",[t._v("HTTP")]),t._v(" 协议有一个"),a("code",[t._v("Referer")]),t._v("字段，记录了该"),a("code",[t._v("HTTP")]),t._v('请求的来源地址，浏览器限制其改动，最多将其设置为空 rel="noreferrer"，当然如果不是在浏览器中发起 '),a("code",[t._v("HTTP")]),t._v(" 请求是可以随意改动这个字段的。")]),t._v(" "),a("p",[t._v("但是这种方法也有一定的局限性，某些旧版本的浏览器比如 IE6 可以篡改 "),a("code",[t._v("Referer")]),t._v(" 字段，有些用户认为 "),a("code",[t._v("Referer")]),t._v("字段会侵犯他们的隐私，从而关闭了浏览器发送 "),a("code",[t._v("Referer")]),t._v("，正常访问网站会被误认为为 "),a("code",[t._v("CSRF")]),t._v(" 而拒绝响应。")]),t._v(" "),a("h3",{attrs:{id:"使用-token-验证字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-token-验证字段"}},[t._v("#")]),t._v(" 使用 Token 验证字段")]),t._v(" "),a("p",[t._v("在服务器端要求每个 POST 请求都包含一个用户特定的由站点生成的"),a("code",[t._v("Token")]),t._v("( 这个"),a("code",[t._v("Token")]),t._v("可以由服务器在发送用来传输数据的网页表单时提供）。并通过 "),a("code",[t._v("set-cookie")]),t._v(" 的方式种到客户端，然后客户端发送请求的时候，从 "),a("code",[t._v("cookie")]),t._v(" 中对应的字段读取出 "),a("code",[t._v("token")]),t._v("，然后添加到请求"),a("code",[t._v("headers")]),t._v("中。这样服务端就可以从请求 "),a("code",[t._v("headers")]),t._v(" 中读取这个 "),a("code",[t._v("token")]),t._v(" 并验证，由于这个 "),a("code",[t._v("token")]),t._v(" 是很难伪造的，所以就能区分这个请求是否是用户正常发起的。")]),t._v(" "),a("p",[t._v("Web 框架（如"),a("code",[t._v("Axios")]),t._v("）通常都会包含一些类似的 CSRF 防范技巧。")]),t._v(" "),a("h2",{attrs:{id:"axios-源码如何防御-csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-源码如何防御-csrf"}},[t._v("#")]),t._v(" Axios 源码如何防御 CSRF")]),t._v(" "),a("p",[a("code",[t._v("Axios")]),t._v(" 源码做了三件事")]),t._v(" "),a("ul",[a("li",[t._v("首先判断如果是配置 "),a("code",[t._v("withCredentials")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 或者是同域请求，才会请求 "),a("code",[t._v("headers")]),t._v(" 添加 "),a("code",[t._v("xsrf")]),t._v(" 相关的字段。")]),t._v(" "),a("li",[t._v("如果判断成功，尝试从 "),a("code",[t._v("cookie")]),t._v(" 中读取 "),a("code",[t._v("xsrf")]),t._v(" 的 "),a("code",[t._v("token")]),t._v(" 值。")]),t._v(" "),a("li",[t._v("如果能读到，则把它添加到请求 "),a("code",[t._v("headers")]),t._v(" 的 "),a("code",[t._v("xsrf")]),t._v(" 相关字段中。")])]),t._v(" "),a("h3",{attrs:{id:"同源判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源判断"}},[t._v("#")]),t._v(" 同源判断")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isURLSameOrigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("requestURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parsedOrigin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    parsedOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" currentOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    parsedOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" currentOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" urlParsingNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentOrigin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  urlParsingNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" urlParsingNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"读取-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取-token"}},[t._v("#")]),t._v(" 读取 "),a("code",[t._v("token")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(^|;\\\\s*)("')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")=([^;]*)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"将-token添加到-请求-headers-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-token添加到-请求-headers-中"}},[t._v("#")]),t._v(" 将 "),a("code",[t._v("token")]),t._v("添加到 请求 "),a("code",[t._v("headers")]),t._v(" 中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isURLSameOrigin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xsrfCookieName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xsrfValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xsrfCookieName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xsrfValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xsrfHeaderName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xsrfValue\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);