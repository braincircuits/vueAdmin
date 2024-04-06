import '@/style/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'

import {useElIcon} from "@/util/setGlobal";


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
useElIcon(app)
app.mount('#app')
