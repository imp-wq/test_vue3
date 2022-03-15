import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from './router'

// import * as ElIcons from '@element-plus/icons-vue'
import El from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(store).use(El, { locale: zhCn }).use(router).mount('#app')
