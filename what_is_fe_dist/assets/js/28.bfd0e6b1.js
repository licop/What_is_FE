(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{395:function(e,r,t){"use strict";t.r(r);var a=t(27),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[e._v("#")]),e._v(" CSRF")]),e._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("p",[t("code",[e._v("CSRF")]),e._v(" 或 "),t("code",[e._v("XSRF")]),e._v("， 全称 "),t("code",[e._v("Cross-Site Request Forgery")]),e._v(" 跨站请求伪造漏洞, 它是前端常见的一种攻击方式。")]),e._v(" "),t("p",[t("code",[e._v("CSRF")]),e._v(" 攻击允许恶意用户在另一个用户不知情的情况下利用其身份信息执行操作。通过一张图来认识它的攻击手段。")]),e._v(" "),t("p",[t("img",{attrs:{src:"/csrf.png",alt:""}})]),e._v(" "),t("p",[e._v("下面是 MDN 关于 CSRF 举得实例:")]),e._v(" "),t("p",[e._v("John 是一个恶意用户，他知道某个网站允许已登陆用户使用包含了账户名和数额的 HTTP POST 请求来转帐给指定的账户。John 构造了包含他的银行卡信息和某个数额做为隐藏表单项的表单，然后通过 Email 发送给了其它的站点用户（还有一个伪装成到 “快速致富”网站的链接的提交按钮）.")]),e._v(" "),t("h2",{attrs:{id:"如何防御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[e._v("#")]),e._v(" 如何防御")]),e._v(" "),t("h3",{attrs:{id:"验证码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证码"}},[e._v("#")]),e._v(" 验证码")]),e._v(" "),t("p",[e._v("对于敏感操作加入验证码，强制用户与网站进行交互，能很好遏制"),t("code",[e._v("CSRF")]),e._v("攻击。")]),e._v(" "),t("h3",{attrs:{id:"检查-referer-字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查-referer-字段"}},[e._v("#")]),e._v(" 检查 Referer 字段")]),e._v(" "),t("p",[t("code",[e._v("HTTP")]),e._v(" 协议有一个"),t("code",[e._v("Referer")]),e._v("字段，记录了该"),t("code",[e._v("HTTP")]),e._v('请求的来源地址，浏览器限制其改动，最多将其设置为空 rel="noreferrer"，当然如果不是在浏览器中发起 '),t("code",[e._v("HTTP")]),e._v(" 请求是可以随意改动这个字段的。")]),e._v(" "),t("p",[e._v("但是这种方法也有一定的局限性，某些旧版本的浏览器比如 IE6 可以篡改 "),t("code",[e._v("Referer")]),e._v(" 字段，有些用户认为 "),t("code",[e._v("Referer")]),e._v("字段会侵犯他们的隐私，从而关闭了浏览器发送 "),t("code",[e._v("Referer")]),e._v("，正常访问网站会被误认为为 "),t("code",[e._v("CSRF")]),e._v(" 而拒绝响应。")]),e._v(" "),t("h3",{attrs:{id:"使用-token-验证字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-token-验证字段"}},[e._v("#")]),e._v(" 使用 Token 验证字段")]),e._v(" "),t("p",[e._v("在服务器端要求每个 POST 请求都包含一个用户特定的由站点生成的"),t("code",[e._v("Token")]),e._v("( 这个"),t("code",[e._v("Token")]),e._v("可以由服务器在发送用来传输数据的网页表单时提供）。并通过 "),t("code",[e._v("set-cookie")]),e._v(" 的方式种到客户端，然后客户端发送请求的时候，从 "),t("code",[e._v("cookie")]),e._v(" 中对应的字段读取出 "),t("code",[e._v("token")]),e._v("，然后添加到请求"),t("code",[e._v("headers")]),e._v("中。这样服务端就可以从请求 "),t("code",[e._v("headers")]),e._v(" 中读取这个 "),t("code",[e._v("token")]),e._v(" 并验证，由于这个 "),t("code",[e._v("token")]),e._v(" 是很难伪造的，所以就能区分这个请求是否是用户正常发起的。")]),e._v(" "),t("p",[e._v("Web 框架（如"),t("code",[e._v("Axios")]),e._v("）通常都会包含一些类似的 CSRF 防范技巧。")]),e._v(" "),t("h2",{attrs:{id:"axios-源码如何防御-csrf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-源码如何防御-csrf"}},[e._v("#")]),e._v(" Axios 源码如何防御 CSRF")]),e._v(" "),t("p",[t("code",[e._v("Axios")]),e._v(" 源码做了三件事")]),e._v(" "),t("ul",[t("li",[e._v("首先判断如果是配置 "),t("code",[e._v("withCredentials")]),e._v(" 为 "),t("code",[e._v("true")]),e._v(" 或者是同域请求，才会请求 "),t("code",[e._v("headers")]),e._v(" 添加 "),t("code",[e._v("xsrf")]),e._v(" 相关的字段。")]),e._v(" "),t("li",[e._v("如果判断成功，尝试从 "),t("code",[e._v("cookie")]),e._v(" 中读取 "),t("code",[e._v("xsrf")]),e._v(" 的 "),t("code",[e._v("token")]),e._v(" 值。")]),e._v(" "),t("li",[e._v("如果能读到，则把它添加到请求 "),t("code",[e._v("headers")]),e._v(" 的 "),t("code",[e._v("xsrf")]),e._v(" 相关字段中。")])]),e._v(" "),t("h3",{attrs:{id:"同源判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同源判断"}},[e._v("#")]),e._v(" 同源判断")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export function isURLSameOrigin(requestURL) {\n  const parsedOrigin = resolveURL(requestURL)\n  return (\n    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host\n  )\n}\n\nconst urlParsingNode = document.createElement('a')\nconst currentOrigin = resolveURL(window.location.href)\n\nfunction resolveURL(url) {\n  urlParsingNode.setAttribute('href', url)\n  const { protocol, host } = urlParsingNode\n\n  return {\n    protocol,\n    host\n  }\n}\n\n")])])]),t("h3",{attrs:{id:"读取-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取-token"}},[e._v("#")]),e._v(" 读取 "),t("code",[e._v("token")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    const cookie = {\n        read(name) {\n            const match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'))\n            return match ? decodeURIComponent(match[3]) : null\n        }\n    }\n\n    export default cookie\n")])])]),t("h3",{attrs:{id:"将-token添加到-请求-headers-中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-token添加到-请求-headers-中"}},[e._v("#")]),e._v(" 将 "),t("code",[e._v("token")]),e._v("添加到 请求 "),t("code",[e._v("headers")]),e._v(" 中")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName){\n    const xsrfValue = cookie.read(xsrfCookieName);\n    if (xsrfValue) {\n        headers[xsrfHeaderName!] = xsrfValue\n    }\n}\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);