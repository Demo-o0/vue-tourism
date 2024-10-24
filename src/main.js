import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// 创建app
const app = createApp(App)

// 注册 router 
import router from './router'

// 状态管理
import { createPinia } from 'pinia'
app.use(createPinia())
app.use(router)
app.mount('#app')

