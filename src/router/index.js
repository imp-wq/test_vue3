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
  }
]

// 创建路由对象
export default createRouter({
  history: createWebHashHistory(),
  routes
})
