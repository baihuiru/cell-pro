import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import { registerWebComponents } from './components/web-components'

// 注册Web Components
registerWebComponents()

const app = createApp(App)

app.use(createPinia())
app.use(Antd)

app.mount('#app')
