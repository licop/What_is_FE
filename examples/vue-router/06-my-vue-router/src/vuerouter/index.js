let _Vue = null

export default class VueRouter {
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

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.mode = options.mode || 'hash'
    console.log(this.mode, 30)
    // 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。
    this.data = _Vue.observable({
      current: '#/' // this.mode === 'history' ? this.getPathname() : this.getHash()
    })
    this.init()
  }

  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  // 遍历传入vue-router的路由规则，转化成键值对的形式存到routeMap当中去
  // routeMap key为路由地址，value为对应的组件
  createRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

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
          // this.$router.data.current = this.to
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

  // 获取当前hash串
  getHash () {
    return window.location.hash.slice(1)
  }

  // 获取当前的pathname
  getPathname () {
    return window.location.pathname
  }

  initEvent () {
    if (this.mode === 'hash') {
      window.addEventListener('load', () => {
        // 加载时添加'#/'
        if (!window.location.hash) {
          window.location.hash = '/'
        }
        this.data.current = this.getHash()
      })
      // 监听hashchange事件
      window.addEventListener('hashchange', () => {
        this.data.current = this.getHash()
      })
    } else if (this.mode === 'history') {
      window.addEventListener('load', () => {
        this.data.current = this.getPathname()
      })
      // 监听popstate事件，后退、前进事件改变路径
      window.addEventListener('popstate', () => {
        this.data.current = this.getPathname()
      })
    }
  }
}

function pushState (url, replace = false) {
  const history = window.history
  if (replace) {
    history.replaceState({ key: history.state.key }, '', url)
  } else {
    history.pushState({ key: Date.now() }, '', url)
  }
}
