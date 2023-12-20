import { createPinia } from 'pinia/dist/pinia.cjs.js'
import { createApp } from 'vue/dist/vue.esm-browser.js'
import './assets/main.css'

import App from './App.vue'
import router from './router/router'

createApp(App).use(createPinia()).use(router).mount('#App')
