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
          icon: 'el-icon-s-custom'
        }
      }
    ]
  },
  {
    path: '/example',
    name: 'example',
    redirect: '/example/table',
    component: ()=>import('@/layout/indexLayout.vue'),
    meta: {
      title: 'example',
      icon: 'el-icon-aim'
    },
    children: [
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/example/TableView.vue'),
        meta: { title: 'table' },
        
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/example/TreeView.vue'),
        meta: { title: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: IndexLayout,
    children: [
      {
        component: ()=> import('@/views/FormView.vue'),
        path: 'index',
        meta: {title:'form',icon:'el-icon-document'}
      }
    ]
  },

  {
    path: '/nested',
    component: IndexLayout,
    meta:{title:'nested',icon:'el-icon-plus'},
    children: [
      {
        path: 'menu1',
        meta: {title:'menu1'},
        component: ()=>import('@/views/nested/menu1/index.vue'),
        children: [
          {
            path: 'menu1-1',
            component: ()=> import('@/views/nested/menu1/Menu1-1View.vue'),
            meta: {title: 'menu1-1'}
          },
          {
            path: 'menu1-2',
            component: ()=> import('@/views/nested/menu1/Menu1-2View.vue'),
            meta: {title: 'menu1-2'}
          },
          {
            path: 'menu1-3',
            component: ()=> import('@/views/nested/menu1/Menu1-3View.vue'),
            meta: {title: 'menu1-3'}
          },
        ]
      },
      {
        path: 'menu2',
        meta: {title:'menu2'},
        component: ()=>import('@/views/nested/Menu2.vue')
      }
    ]
  },
  {
    path:'/external',
    // meta: {title: 'external'},
    component: IndexLayout,
    children: [
      {
        path: '',
        meta: {title:'external',icon:'el-icon-s-promotion'},
        component: ()=>import('@/views/ExternalView.vue')
      }
    ]
  },

  {
    path: '/charts',
    component: IndexLayout,
    meta:{title:'charts',icon:'el-icon-s-data'},
    children: [
      {
        path: 'bar',
        meta: {title:'bar'},
        component: ()=>import('@/views/charts/BarChart.vue')
      },
      {
        path: 'line',
        meta: {
          title:'line'
        },
        component: () =>import('@/views/charts/LineChart.vue')
      },
      {
        path: 'pie',
        meta: {
          title: 'pie'
        },
        component: ()=>import('@/views/charts/PieChart.vue')
      }
    ]
  },

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
        component: ()=> import('@/views/component/Upload.vue')
      },
      {
        path: 'richtext',
        meta: {
          title: 'richtext'
        },
        component: ()=> import('@/views/component/Richtext.vue')
      },
      {
        path: 'markdown',
        meta: {
          title: 'markdown'
        },
        component: ()=> import('@/views/component/Markdown.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/404.vue')
  },
  {
    path:'*',redirect: '/404',hidden: true
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if(to.path =='/login'){
    next()
    return
  }
  // console.log('beforeach')
    if(store.state.token){
      // console.log('has token')
      next()
    }else{
      next({path:'/login'})
    }
})
export default router
