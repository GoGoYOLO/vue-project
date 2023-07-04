import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  store,
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线
    Vue.prototype.$bus = this
  }
})
