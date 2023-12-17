// import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'GeneralKenobi',
        componet: ()=> import('../views/GeneralKenobi.vue')
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