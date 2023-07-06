import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const userAbout = {
  namespaced: true,
  state: {
    isLogin: false,
    currentUser: {},
    userList: [{
      id: '001',
      phone: "11",
      password: '22',
      nickName: 'xiaoA',
      currentMusic: '默认',
      typeList: [{
        id: "001",
        name: "喜欢",
        num: 10,
        icon: 'el-icon-star-on'
      }, {
        id: "002",
        name: '历史',
        num: 200,
        icon: 'el-icon-star-off'
      }, {
        id: "003",
        name: '本地',
        num: 100,
        icon: 'el-icon-s-help'
      }],
      songList: [{
        id: "001",
        name: "循环",
        num: 10
      },
      {
        id: "002",
        name: "回忆",
        num: 20
      },
      {
        id: "003",
        name: "循环1",
        num: 10
      },
      {
        id: "004",
        name: "回忆1",
        num: 20
      }]
    }, {
      id: '002',
      phone: "22",
      password: '33',
      nickName: 'xiaoB',
      currentMusic: '默认',
      typeList: [],
      songList: []
    }
    ],

  },
  actions: {

  },
  mutations: {
    addUser(state, value) {
      state.userList.push(value)
      state.isLogin = true
      state.currentUser = value
    },
    updateLoginStatus(state, value) {
      state.isLogin = true
      state.currentUser = value
    },
    updateUserCurrentMusic(state, value) {
      for (var i in state.userList) {
        if (state.userList[i].phone === value.user.phone) {
          state.userList[i].currentMusic = value.name
        }
      }
    }
  }
}

const musicAbout = {
  namespaced: true,
  state: {
    musicList: [{
      id: "001",
      name: "111",
    },
    {
      id: "002",
      name: "222",
    },
    {
      id: "003",
      name: "333",
    },
    {
      id: "004",
      name: "444",
    }],
  }
}

export default new Vuex.Store({
  modules: {
    userAbout,
    musicAbout
  }
})