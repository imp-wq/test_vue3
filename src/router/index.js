import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/login.vue'

// 定义路由
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search-form',
    component: () => import('../components/SearchForm.vue')
  },
  {
    path: '/3',
    component: () => import('../components/3.vue')
  },
  {
    path: '/4',
    component: () => import('../components/4.vue')
  }
]

// 创建路由对象
export default createRouter({
  history: createWebHashHistory(),
  routes
})
