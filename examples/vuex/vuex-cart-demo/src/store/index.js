import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import carts from './modules/carts'

Vue.use(Vuex)

const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation, 10)
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
