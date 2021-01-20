# vue-router 实现原理

## Hash 和 History 模式的区别

不管哪种模式都是客户端路由的实现方式的，也就是**前端路由**，当路径发生变化时不会对服务器发送请求，由 js 监控路径的变化，然后根据不同的地址渲染不同的内容，如果需要服务端内容的话使用 Ajax 来获取。

**表现形式的区别**

- Hash 模式
  - https://music.163.com/#/playlist?id=3102961863
- History 模式
  - https://music.163.com/playlist/3102961863

**原理的区别**

- Hash 模式
  - Vue Router **默认**使用的是 hash 模式，使用 hash 来模拟一个完整的 URL，#号后面的内容作为路径,通过 `onhashchange` 监听路径的变化
- History 模式

  - 基于 DOM window 对象提供的 [history](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API) 对象(IE10 以后才兼容)，通过 `history.pushState()`方法改变地址栏，并把当前地址记录在浏览器访问历史中，并不会想服务器发送请求，监听 [popstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate) 事件，根据当前路由地址找到对应组件进行重新渲染。

  ```js
  history.pushState();
  history.replaceState();
  history.go();
  ```

> 注意：调用 `history.pushState()`或者 `history.replaceState()`不会触发 `popstate` 事件. `popstate` 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在 JavaScript 中调用 `history.back()`、`history.forward()`、`history.go()`方法)，此外，a 标签的锚点也会触发该事件.

**History 模式需要服务器的支持**

在单页面应用中，服务只有一个页面 index.html,服务器不存在http://spacex.com/login这样的页面，当使用浏览器**刷新**该地址是服务器会找不到该页面，返回404，所以在服务器端应该除了静态资源外都返回单页面应用中的index.html。

- nodejs 服务器配置, 使用 [connect-history-api-fallback 中间件](https://github.com/bripkens/connect-history-api-fallback),可以解决单页面应用切换路由刷新浏览器后找不到页面的问题。

```js
const path = require("path");
// 导入处理 history 模式的模块
const history = require("connect-history-api-fallback");
// 导入 express
const express = require("express");

const app = express();
// 注册处理 history 模式的中间件
app.use(history());
// 处理静态资源的中间件，网站根目录 ../web
app.use(express.static(path.join(__dirname, "../web")));

// 开启服务器，端口是 3000
app.listen(3000, () => {
  console.log("服务器开启，端口：3000");
});
```

- nignx 服务器配置

```bash
location / {
  try_files $uri $uri/ /index.html;
}
```

## vue-router 源码实现

### 需求分析

首先我们来看一下，`vue-router`如何和`Vue`结合使用的。

```js
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [...]
})

new Vue({
  router
  ...
})
```

可以看出`vue-router`是`Vue`的一个[插件](https://cn.vuejs.org/v2/guide/plugins.html)，首先通过全局方法`Vue.use( plugin )`来安装插件，然后将一些配置的构建选项传入获取一个`VueRouter`实例，然后将实例`router`作为自定义初始化选项传入 Vue 中，Vue 将获得`$router`实例方法。

所以根据`Vue`开发插件的方式和`vue-router`的功能需求, `vue-router`是需要一个类，而且有一个静态的`install`方法。

### vue-router 工作流程

1. url 变更
2. 触发不同模式下的监听事件`popstate`或者`hashchange`
3. 根据 url 改变响应式数据 `current` 属性
4. 根据 `routeMap` 找到 `current` 对应的组件
5. 渲染

### 源码实现

先整体看下`vue-router`的属性和方法

**vue-router 属性**

- options: 记录`new VueRouter`构造函数中传入的对象
- mode: 模式 'hash' | 'history'
- data: 响应式对象，属性 current 记录当前地址
- routeMap: 记录路由地址和组件的对应关系

**vue-router 方法**

- install(Vue)
- constructor(options): VueRouter
- init(): void
- initEvent(): void
- createRouteMap(): void
- initComponents(Vue): void
- push(url): void
- replace(url): void

### install 方法实现

`install`方法是一个静态方法，接收一个`Vue`实例作为参数，通过 `Vue.mixin()`全局混入 `beforeCreate` 生命周期钩子,通过`this.$options`获取`Vue`初始化选项将`router`实例添加为 Vue 的方法。

```js
static install (Vue) {
    // 1. 判断当前插件是否已经被安装
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 2. 把Vue构造函数记录到全局变量
    _Vue = Vue
    // 3. 把创建Vue实例时候传入的router对象注入到Vue实例上
    _Vue.mixin({
      beforeCreate () {
        // 添加实例方法
        // $options为Vue初始化选项，用于选项中自定义property
        // 如果是组件的话不执行，如果是vue实例的话执行
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
        }
      }
    })
  }
```

### constructor 实现

初始化`options`、`routeMap`、`mode`和`data`属性,执行初始化方法`init()`

```js
constructor (options) {
  this.options = options
  this.routeMap = {}
  this.mode = options.mode || 'hash'
  // 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
  this.data = _Vue.observable({
    current: '/'
  })
  this.init()
}
```

### createRouteMap

遍历传入 `vue-router` 的路由规则，转化成键值对的形式存到 `routeMap` 中去,`routeMap` key 为路由地址，value 为对应的组件

```js
createRouteMap () {
  this.options.routes.forEach(route => {
    this.routeMap[route.path] = route.component
  })
}
```

### initComponents

使用`Vue.component`定义两个组件`router-link`和`router-view`

`router-link`是一个 a 标签，`to`属性是一个 url，当点击标签时调用`push`和`replace`方法

`router-view`根据当前的`current`的路径找到对应组件，然后渲染

> 注意: 这里渲染组件最好使用[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)渲染组件而不是`template`,因为**运行时**状态模板不会编译，如果想要使用`template`则需要将`vue-cli`中的[runtimeCompiler](https://cli.vuejs.org/zh/config/#runtimecompiler)设置为 true

```js
initComponents (Vue) {
  const self = this
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true
      },
      replace: {
        type: Boolean,
        default: false
      }
    },
    // 运行时不能使用template，不会编译
    // template: '<a :href="to"><slot></slot></a>'
    render (h) {
      return h('a', {
        attrs: {
          href: this.to
        },
        on: {
          click: this.clickHandler
        }
      }, [this.$slots.default])
    },
    methods: {
      clickHandler (e) {
        if (this.replace) {
          this.$router.replace(this.to)
        } else {
          this.$router.push(this.to)
        }
        e.preventDefault()
      }
    }
  })
  Vue.component('router-view', {
    render (h) {
      const component = self.routeMap[self.data.current]
      return h(component)
    }
  })
}
```

### push 和 replace 方法

`push`和`replace`根据不同模式改变浏览器路径地址，如果是`mode`为`hash`改变`location.hash`的值，如果`mode`为`history`调用`pushState`和`replaceState`方法，根据 url 改变响应式数据 current 属性

```js
  push (url) {
    if (this.mode === 'hash') {
      location.hash = url
    } else {
      pushState(url)
    }
    this.data.current = url
  }

  replace (url) {
    if (this.mode === 'hash') {
      location.hash = url
    } else {
      pushState(url, true)
    }
    this.data.current = url
  }

  function pushState (url, replace = false) {
    const history = window.history
    if (replace) {
      history.replaceState({ key: history.state.key }, '', url)
    } else {
      history.pushState({ key: Date.now() }, '', url)
    }
  }
```

### initEvent 方法

监听事件，hash 模式监听`load`事件将地址末尾加上'#/',监听`hashchange`当 hash 改变时，将`current`设置为当前 hash 地址；history 模式监听 popstate 事件，后退、前进事件改变路径，将`current`设置为当前 pathname。

```js
initEvent () {
  if (this.mode === 'hash') {
    window.addEventListener('load', () => {
      // 加载时添加'#/'
      if (!window.location.hash) {
        window.location.hash = '/'
      }
      this.data.current = getHash()
    })
    // 监听hashchange事件
    window.addEventListener('hashchange', () => {
      this.data.current = getHash()
    })
  } else if (this.mode === 'history') {
    window.addEventListener('load', () => {
      this.data.current = getPathname()
    })
    // 监听popstate事件，后退、前进事件改变路径
    window.addEventListener('popstate', () => {
      this.data.current = getPathname()
    })
  }
}
```

## 更多参考

- [完整源码实现](https://github.com/licop/What_is_FE/blob/master/examples/vue-router/06-my-vue-router/src/vuerouter/index.js)
- [vue-router 官方文档](https://router.vuejs.org/zh/)
