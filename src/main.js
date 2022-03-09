import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from './router'

import El from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(El).use(router).mount('#app')
