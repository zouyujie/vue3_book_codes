import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FragmentDemo from '../views/FragmentDemo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'FragmentDemo',
    component: FragmentDemo
  },
  {
    path: '/cmodal',
    name: 'CModalDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CModalDemo.vue')
  },
  {
    path:'/suspense',
    name:'SuspenseDemo',
    component:()=>import('../views/SuspenseDemo.vue')
  },
  {
    path:'/cvmodel',
    name:'CVModel',
    component:()=>import('../views/v-model/CVModel.vue')
  },
  {
    path:'/vifvelse',
    name:'VIfVElse',
    component:()=>import('../views/VIfVElse.vue')
  },
  {
    path:'/NextTickDemo',
    name:'NextTickDemo',
    component:()=>import('../views/NextTickDemo.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
