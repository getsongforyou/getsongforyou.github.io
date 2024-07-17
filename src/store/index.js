import Vue from 'vue'
import Vuex from 'vuex'
import {login,logOut} from '@/api/userapi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  getters: {
  },
  mutations: {
    setToken(state, token){
      state.token = token
      console.log('set token')
    },
    logOut(state){
      state.token = null
    }
  },
  actions: {
    async login({commit}, user){
      const response = await login(user)
      console.log('response',response)
      if(response.data.code == '200'){
        console.log('action', response.data)
        const token = response.data.data.token
        commit('setToken',token)

      }else{
        return false
      }
    },
    async logOut({commit} ){
      const response = await logOut()
      if(response.data.code =="200"){
        commit('logOut')
      }else{
        console.log('error,please logout again!')
      }
    }
  },
  modules: {
  }
})
