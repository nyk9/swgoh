import { createRouter, createWebHistory } from './vue-router.cjs.js'

const routes = [
    {
        path: '/GeneralKenobi',
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
// export default router