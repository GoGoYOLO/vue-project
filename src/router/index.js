import VueRouter from "vue-router";
import store from '../store/index'

const router = new VueRouter({
  routes: [
    {
      name: 'phone',
      path: '/login/phone',
      component: () => import('../components/LoginPhone'),
      meta: {
        needLogin: false
      }
    },
    {
      name: 'password',
      path: '/login/password',
      component: () => import('../components/LoginPassword'),
      meta: {
        needLogin: false
      }
    },
    {
      name: 'code',
      path: '/login/code',
      component: () => import('../components/LoginCode'),
      meta: {
        needLogin: false
      }
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../components/Home'),
      meta: {
        needLogin: true
      }
    },
    {
      name: 'user',
      path: '/user',
      component: () => import('../components/User'),
      meta: {
        needLogin: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (store.state.userAbout.isLogin) {
      next()
    } else {
      next({ path: '/login/phone' })
    }
  } else {
    next()
  }
})

export default router