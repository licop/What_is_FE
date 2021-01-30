import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import carts from './modules/carts'

Vue.use(Vuex)

// 插件用于本地存储
const myPlugin = store => {
  // 订阅 store 的 mutation,在每个commit时执行
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('carts/')) {
      window.localStorage.setItem('cart-products', JSON.stringify(state.carts.cartProducts))
    }
  })
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    carts
  },
  plugins: [myPlugin]
})
