import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/LoginView.vue'),
    
  },
  {
    path: '/',
    // name: 'dashBoard',
    redirect: '/dashboard',
    component: () => import('@/layout/indexLayout.vue'),
    meta: {
      title: 'dashBoard'
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: 'DashBoard'
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    redirect: '/example/table',
    meta: {
      title: 'example'
    },
    children: [
      {
        path: 'table',
        name: 'table',
        meta: { title: 'table' },
        
      },
      {
        path: 'tree',
        name: 'tree',
        meta: { title: 'tree' }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/404.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//     console.log('before route')
//     next({name: 'login'})
// })
export default router
