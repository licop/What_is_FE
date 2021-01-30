let Vue = null
class Store {
  constructor (options) {
    const {
      state = {},
      getters = {},
      mutations = {},
      actions = {}
    } = options
    // this.state = Vue.observable(state)
    // this.getters = Object.create(null)
    // // 没有实现缓存机制
    // Object.keys(getters).forEach(key => {
    //   Object.defineProperty(this.getters, key, {
    //     get: () => getters[key](state)
    //   })
    // })
    this._mutations = mutations
    this._actions = actions
    this._getters = getters

    initStoreVM(this, state)
  }

  get state () {
    return this._vm._data.$$state
  }

  commit (type, payload) {
    this._mutations[type](this.state, payload)
  }

  dispatch (type, payload) {
    this._actions[type](this, payload)
  }
}

function initStoreVM (store, state) {
  const oldVm = store._vm
  const getters = store._getters
  const computed = {}
  store.getters = {}
  Object.keys(getters).forEach(key => {
    const fn = getters[key]
    computed[key] = partial(fn, state)
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true // for local getters
    })
  })

  const silent = Vue.config.silent
  // Vue.config.silent暂时设置为true的目的是在new一个Vue实例的过程中不会报出一切警告
  Vue.config.silent = true
  // 这里new了一个Vue对象，运用Vue内部的响应式实现注册state以及computed
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  Vue.config.silent = silent
  console.log(store)

  if (oldVm) {
    // 解除旧vm的state的引用，以及销毁旧的Vue对象
    Vue.nextTick(() => oldVm.$destroy())
  }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
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
