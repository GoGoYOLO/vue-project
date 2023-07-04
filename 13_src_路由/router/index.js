import VueRouter from "vue-router";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        isAuth: true,
        title:"关于"
      }
    },
    {
      name: "zhuye",
      path: '/home',
      component: Home,
      meta: {
        isAuth: true,
        title:"主页"
      },
      children: [
        {
          name: "xiaoxi",
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title:"消息"
          },
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              meta: {
                isAuth: true,
                title:"详情"
              },
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              // props(route) {
              //   return {
              //     id: route.query.id,
              //     title: route.query.title
              //   }
              // }
            }
          ]
        },
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: {
            isAuth: true,
            title:"新闻"
          },
          beforeEnter(to,from,next){
            if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
              if(localStorage.getItem('school') === 'atguigu'){
                next()
              }else{
                alert('暂无权限查看')
                // next({name:'guanyu'})
              }
            }else{
              next()
            }
          }
        }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuth) { //判断当前路由是否需要进行权限控制
//     if (localStorage.getItem('school') === 'atguigu') { //权限控制的具体规则
//       next() //放行
//     } else {
//       alert('暂无权限查看')
//       // next({name:'guanyu'})
//     }
//   } else {
//     next() //放行
//   }
// })

// router.afterEach((to, from) => {
//   if (to.meta.title) {
//     document.title = to.meta.title //修改网页的title
//   } else {
//     document.title = 'vue_test'
//   }

// })


export default router