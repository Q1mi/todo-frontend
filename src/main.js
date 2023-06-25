import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

const app = createApp(App)
app.use(router).use(VueAxios, axios).use(ElementPlus)

app.mount('#app')
