//引入Vue
import Vue from 'vue'

//引入App组件，它是所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el:'#app',
  //将app组件放入容器中
  render: h => h(App),
})
