import { createRouter, createWebHistory } from 'https://unpkg.com/vue-router@4.2.5/dist/vue-router.cjs'

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