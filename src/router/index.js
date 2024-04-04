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
      path: '/',
      name: 'products',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
