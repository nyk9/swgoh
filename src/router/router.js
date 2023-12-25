import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Character/General-Kenobi',
      name: 'GeneralKenobi',
      component: () => import('../views/GeneralKenobi.vue')
    },
    {
      path: '/Character/Jedi-Knight-Cal-Kestis',
      name: 'JediKnightCalKestis',
      component: ()=> import('../views/JediKnightCalKestis.vue')
    }
    // {
    //   path: '/Character/:name',
    //   name: 'Character',
    //   component: ()=> import('../views/Character.vue'),
    //   props: true
    // }
  ]
})

export default router
