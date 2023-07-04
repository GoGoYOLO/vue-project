import VueRouter from "vue-router";
import LoginPhone from '../components/LoginPhone'
import LoginPassword from '../components/LoginPassword'
import Home from '../components/Home'

const router = new VueRouter({
  routes: [
    {
      name: 'phone',
      path: '/login/phone',
      component: LoginPhone,
    },
    {
      name: 'password',
      path: '/login/password',
      component: LoginPassword,
    }, {
      name: 'home',
      path: '/home',
      component: Home,
    }
  ]
})

export default router