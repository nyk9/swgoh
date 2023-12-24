import { createApp } from 'vue'
import { createPinia } from "../node_modules/pinia/dist/pinia/"
import './assets/main.css'

import App from './App.vue'
import router from './router/router'

createApp(App).use(router).use(createPinia).mount('#App')
// "c:/Users/81704/OneDrive/ドキュメント/swgoh-gg/swgoh/node_modules/pinia/dist/pinia"
//  "c:/Users/81704/OneDrive/ドキュメント/swgoh-gg/swgoh/node_modules/vue/dist/vue"