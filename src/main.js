import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import { Button, Row,DatePicker,Carousel ,CarouselItem,Drawer} from 'element-ui';
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Button);
Vue.use(Row)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Drawer)

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线
    Vue.prototype.$bus = this
  }
})
