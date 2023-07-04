//创建vuex中的store

//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const countAbout = {
  namespaced: true,//开启命名空间
  state: {
    sum: 0,
    school: 'sss',
    subject: 'qqq',
  },
  mutations: {
    increment(state, value) {
      state.sum += value
    },
    decrement(state, value) {
      state.sum -= value
    },
    incrementOdd(state, value) {
      state.sum += value

    },
    incrementWait(state, value) {
      state.sum += value
    },
  },
  actions: {
    incrementOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('incrementOdd', value)
      }
    },
    incrementWait(context, value) {
      setTimeout(() => {
        context.commit('incrementWait', value)
      }, 500)
    },
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}

const personAbout = {
  namespaced: true,//开启命名空间
  state: {
    personList: [
      { id: '001', name: '小a' }
    ]
  },
  mutations: {
    addPerson(state, value) {
      state.personList.unshift(value)
    },
  },
  actions: {},
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}

//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
