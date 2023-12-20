import { createApp } from 'vue'
import { createPinia } from '../node_modules/pinia/dist/pinia.cjs'
import './assets/main.css'

import App from './App.vue'
import router from './router/router'

createApp(App).use(createPinia()).use(router).mount('#App')
