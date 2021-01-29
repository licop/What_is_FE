let _Vue = null
class Store {
  constructor (options) {
    const {
      state = {},
      getters = {},
      mutations = {},
      actions = {}
    } = options
    this.state = _Vue.observable(state)
    this.getters = Object.create(null)
    // 没有实现缓存机制
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](state)
      })
    })
    this._mutations = mutations
    this._actions = actions
  }

  commit (type, payload) {
    this._mutations[type](this.state, payload)
  }

  dispatch (type, payload) {
    this._actions[type](this, payload)
  }
}

function install (Vue) {
  _Vue = Vue
  _Vue.mixin({
    beforeCreate () {
      const options = this.$options
      // store injection
      if (options.store) {
        /* 存在store其实代表的就是Root节点，直接执行store（function时）或者使用store（非function） */
        this.$store = typeof options.store === 'function'
          ? options.store()
          : options.store
      } else if (options.parent && options.parent.$store) {
        /* 子组件直接从父组件中获取$store，这样就保证了所有组件都公用了全局的同一份store */
        this.$store = options.parent.$store
      }

      // 挂载到原型方法上，使其每个实例都有store对象
      // 不合理: 会对Vue实例造成污染, 应该挂载到根实例上。然后让其子组件也依次挂载store
      // if (options.store) {
      //   _Vue.prototype.$store = options.store
      // }
    }
  })
}

export default {
  Store,
  install
}
