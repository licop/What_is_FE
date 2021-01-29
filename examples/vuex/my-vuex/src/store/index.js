import Vue from 'vue'
import Vuex from '../myvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    msg: 'Hello World'
  },
  getters: {
    reverseMsg (state) {
      console.log(state, 13)
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    increate (state, payload) {
      state.count += payload
    },
    changeMsg (state, payload) {
      state.msg = payload
    }
  },
  actions: {
    increateAsync (context, payload) {
      setTimeout(() => {
        context.commit('increate', payload)
      }, 2000)
    }
  }
})
