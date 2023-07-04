import Vue from 'vue'
import App from './App.vue'

//按需引入
import { Button, Select,DatePicker } from 'element-ui';

//全局引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Select);
Vue.use(DatePicker);

// Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
})
