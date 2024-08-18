import IndexLayout from '@/layout/indexLayout.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    redirect: '/dashboard',
    component: () => import('@/layout/indexLayout.vue'),

    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashBoard.vue'),
        meta: {
          title: 'DashBoard',
          icon: 'el-icon-s-custom',
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    redirect: '/example/table',
    component: () => import('@/layout/indexLayout.vue'),
    meta: {
      title: 'example',
      icon: 'el-icon-aim'
    },
    children: [
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/example/ArticleView.vue'),
        meta: {title: 'create article'}
      },
      {
        path: 'article list',
        name: 'article list',
        component: ()=> import('@/views/example/ArticleList.vue'),
        meta: {title: 'Article list'}
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: ()=> import('@/views/example/Pagination.vue'),
        meta: {title: 'Pagination'}
      }
    ]
  },
  
  {
    path: '/form',
    component: IndexLayout,
    children: [
      {
        component: () => import('@/views/FormView.vue'),
        path: 'index',
        meta: { title: 'form', icon: 'el-icon-document', roll: 'super admin' }
      }
    ]
  },
  
  {
    path: '/nested',
    component: IndexLayout,
    meta: { title: 'nested', icon: 'el-icon-plus' },
    children: [
      {
        path: 'menu1',
        meta: { title: 'menu1' },
        component: () => import('@/views/nested/menu1/index.vue'),
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/Menu1-1View.vue'),
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/Menu1-2View.vue'),
            meta: { title: 'menu1-2' }
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/Menu1-3View.vue'),
            meta: { title: 'menu1-3' }
          },
        ]
      },
      {
        path: 'menu2',
        meta: { title: 'menu2' },
        component: () => import('@/views/nested/Menu2.vue')
      }
    ]
  },
  {
    path: '/others',
    component: IndexLayout,
    meta: {title:'others', icon: 'el-icon-more'},
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/others/TableView.vue'),
        meta: { title: 'table' },
        
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/others/TreeView.vue'),
        meta: { title: 'tree' }
      }
      
    ]
  },
  {
    path: '/external',
    // meta: {title: 'external'},
    component: IndexLayout,
    children: [
      {
        path: '',
        meta: { title: 'external', icon: 'el-icon-s-promotion' },
        component: () => import('@/views/ExternalView.vue')
      }
    ]
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const asyncRouter = [
  // charts
  {
    path: '/charts',
    component: IndexLayout,
    meta: { title: 'charts', icon: 'el-icon-s-data' },
    children: [
      {
        path: 'bar',
        meta: { title: 'bar' },
        component: () => import('@/views/charts/BarChart.vue')
      },
      {
        path: 'line',
        meta: {
          title: 'line'
        },
        component: () => import('@/views/charts/LineChart.vue')
      },
      {
        path: 'pie',
        meta: {
          title: 'pie'
        },
        component: () => import('@/views/charts/PieChart.vue')
      }
    ]
  },
  // component
  {
    path: '/component',
    component: IndexLayout,
    redirect: '/component/upload',
    meta: {
      title: 'component',
      icon: 'el-icon-orange'
    },
    children: [
      {
        path: 'upload',
        meta: {
          title: 'upload'
        },
        component: () => import('@/views/component/Upload.vue')
      },
      {
        path: 'richtext',
        meta: {
          title: 'richtext'
        },
        component: () => import('@/views/component/Richtext.vue')
      },
      {
        path: 'markdown',
        meta: {
          title: 'markdown'
        },
        component: () => import('@/views/component/Markdown.vue')
      }
    ]
  },
  // 404
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/404.vue')
  },
  // {
  //   path: '*', redirect: '/404', hidden: true,conmponent: IndexLayout
  // }

]


function filterRouter(asyncR, role) {
  if (role == 'super admin' || role == 'admin') {
    return asyncR
  } else {
    let res = []
    asyncR.forEach(route => {
      if (route.meta && route.meta.role.includes(role)) {

        if (route.children) {
          route.children = filterRouter(route, role)
        }
        res.push(route)

      }
    })
    return res
  }
}

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach(async (to, from, next) => {
  // apply for pessmission
  // has token
  //   if to login,then redirect root
  //   if to other view,judge router if add sayncRouter,if no then add
  // no token 
  //   redirect to login view
  if (store.state.token) {
    if (to.path == '/login') {

      next({ path: '/' })
    } else {
      if (store.getters.role) {
        console.log('get role at  beforeeach', store.getters.role)
        next()
      } else {
        try {
          const data = await store.dispatch('getInfo')
          store.commit('setInfo', data)
          // store.dispatch('getInfo').then((data) => {
          //   store.commit('setInfo', data)

          //   // 动态挂载路由
          //   const {role} = data
          //   filterRouter(asyncRouter, role)
          const { role } = data
          const accessRouter = filterRouter(asyncRouter, role)
          console.log(accessRouter)
          for (let index = 0; index < accessRouter.length; index++) {
            console.log(accessRouter[index])
            router.addRoute(accessRouter[index])
          }
          

          // router.addRoutes(accessRouter)
          console.log( router.getRoutes())
          console.log(router.options)
          // router.push({...to,replace: true})
          store.commit('setRoutes', routes.concat(accessRouter))
          next({ ...to, replace: true })
        } catch (e) {
          console.log(e, 'try')
        }

      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {

      next({ path: '/login' })
    }

  }
})
export { asyncRouter }
export default router
