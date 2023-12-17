import { createRouter, createWebHistory } from 'vue-router'
import GeneralKenobi from '../views/GeneralKenobi.vue'

const routes = [
    {
        path: '/',
        name: 'GeneralKenobi',
        componet: GeneralKenobi
    },
    // {
    //     paht: '/',
    //     name: 'namae',
    //     componet
    // }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router