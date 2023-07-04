import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const userAbout = {
  namespaced: true,
  state: {
    userList: [{
      id: '001',
      phone: "11",
      password: '22'
    }]
  },
  actions: {
   
  },
  mutations: {
    addUser(state, value) {
      state.userList.push(value)
    },
   
  }
}
export default new Vuex.Store({
  modules: {
    userAbout,
  }
})