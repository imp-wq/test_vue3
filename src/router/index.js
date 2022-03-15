import { createRouter, createWebHashHistory, routerKey } from 'vue-router'
import Login from '../components/login.vue'
import NProgress from 'nprogress'

// 定义路由
const routes = [
  {
    path: '/login',
    component: () => import('../components/example.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/dashboard',
    component: () => import('../components/dashboard.vue'),
    meta: { title: '总体数据分析' }
  },
  {
    path: '/3',
    component: () => import('../components/3.vue'),
    meta: { title: '发请求' }
  },
  {
    path: '/Echart',
    component: () => import('../components/Echart.vue'),
    title: '图表'
  },
  {
    path: '/breadcrumb',
    component: () => import('../components/Breadcrumb.vue'),
    meta: { title: '面包屑' }
  },
  {
    path: '/search-form',
    component: () => import('../components/SearchForm.vue'),
    meta: { title: '查询表格' }
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 挂载导航守卫
router.beforeEach((to, from) => {
  NProgress.start()
  NProgress.done()
})
export default router
