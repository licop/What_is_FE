# vue-router

- this.\$router.replace this.\$router.push

## Hash 和 History 模式的区别

不管哪种模式都是客户端路由的实现方式，当路径发生变化时不会对服务器发送请求，由 js 监控路径的变化，然后根据不同的地址渲染不同的内容，如果需要服务端内容的话使用 Ajax 来获取。

**表现形式的区别**

- Hash 模式
  - https://music.163.com/#/playlist?id=3102961863
- History 模式
  - https://music.163.com/playlist/3102961863

**原理的区别**

- Hash 模式
  - Vue Router **默认**使用的是 hash 模式，使用 hash 来模拟一个完整的 URL，#号后面的内容作为路径,通过 onhashchange 监听路径的变化
- History 模式
  - 基于 DOM window 对象提供的 [history](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API) 对象(IE10 以后才兼容)，通过 history.pushState()方法改变地址栏，并把当前地址记录在浏览器访问历史中，并不会想服务器发送请求，监听 [popstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate) 事件，根据当前路由地址找到对应组件进行重新渲染。
  ```
    history.pushState()
    history.replaceState()
    history.go()
  ```

> 注意：调用 `history.pushState()`或者 `history.replaceState()`不会触发 `popstate` 事件. `popstate` 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在 JavaScript 中调用 `history.back()`、`history.forward()`、`history.go()`方法)，此外，a 标签的锚点也会触发该事件.

**History 模式需要服务器的支持**

在单页面应用中，服务只有一个页面 index.html,服务器不存在http://spacex.com/login这样的页面，当使用浏览器**刷新**该地址是服务器会找不到该页面，返回404，所以在服务器端应该除了静态资源外都返回单页面应用中的index.html。

- nodejs 服务器配置, 使用 [connect-history-api-fallback 中间件](https://github.com/bripkens/connect-history-api-fallback),可以解决单页面应用切换路由刷新浏览器后找不到页面的问题。

```
const path = require('path')
// 导入处理 history 模式的模块
const history = require('connect-history-api-fallback')
// 导入 express
const express = require('express')

const app = express()
// 注册处理 history 模式的中间件
app.use(history())
// 处理静态资源的中间件，网站根目录 ../web
app.use(express.static(path.join(__dirname, '../web')))

// 开启服务器，端口是 3000
app.listen(3000, () => {
  console.log('服务器开启，端口：3000')
})
```

- nignx 服务器配置

```

location / {
  try_files $uri $uri/ /index.html;
}
```

## vue-router 源码实现

`vue-router`是`Vue`的一个[插件](https://cn.vuejs.org/v2/guide/plugins.html)，通过全局方法`Vue.use( plugin )`来安装插件。
根据`Vue`开发插件的方式和`vue-router`的功能需求, `vue-router`是需要一个类，而且有一个静态的`install`方法。
