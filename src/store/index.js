import Vue from 'vue'
import Vuex from 'vuex'
import { login, logOut, getInfo } from '@/api/userapi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    username: null,
    role: null,
    routes: null,
  },
  getters: {
    role(state) {
      return state.role
    },
    token(state) {
      return state.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    logOut(state) {
      state.token = null
      state.username = null
      state.role = null
      state.routes = null
    },
    setName(state, username) {
      state.username = username
    },
    setInfo(state, { username, role }) {
      state.username = username
      state.role = role
    },
    setRoutes(state, routes){
      state.routes = routes
    }

  },
  actions: {
    // when success is true, login success. or is false, login false.
    async login({ commit }, user) {
      const response = await login(user)
      if (response.data.success) {
        console.log('action', response.data)
        const { token, username } = response.data
        commit('setToken', token)
        commit('setName', username)
        // dispatch('getInfo')
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
      const data = res.data
      console.log(res, 'res in  getinfo')
      return data
    }
  },
  modules: {
  }
})
