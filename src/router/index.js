import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Impressum from '../components/Impressum.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum
    }
  ]
})

export default router
