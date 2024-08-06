import Vue from 'vue'
import Vuex from 'vuex'
import { login, logOut, getInfo } from '@/api/userapi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,


  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    logOut(state) {
      state.token = null
    }
  },
  actions: {
    // when success is true, login success. or is false, login false.
    async login({ commit }, user) {
      const response = await login(user)
      console.log('response', response)
      if (response.data.success) {
        console.log('action', response.data)
        const token = response.data.token
        commit('setToken', token)
        return true

      } else {
        return false
      }
    },
    async logOut({ commit }) {
      const response = await logOut()
      if (response.data.code == "200") {
        commit('logOut')
        return true
      } else {
        console.log('error,please logout again!')
        return false
      }
    },
    
    async getInfo() {
        const res = await getInfo()
        const rolls = res.rolls
        return rolls
    }
  },
  modules: {
  }
})
