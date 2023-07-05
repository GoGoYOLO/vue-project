import VueRouter from "vue-router";
import LoginPhone from '../components/LoginPhone'
import LoginPassword from '../components/LoginPassword'
import LoginCode from '../components/LoginCode'
import Home from '../components/Home'
import User from '../components/User'

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
    },
    {
      name: 'code',
      path: '/login/code',
      component: LoginCode,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'user',
      path: '/user',
      component: User,
    },
  ]
})

export default router