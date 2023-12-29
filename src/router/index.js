import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Impressum from '../components/Impressum.vue'
import Datenschutz from '../components/Datenschutz.vue'
import Contact from '../components/Contact.vue'

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
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPostion) {
    return { top: 0 }
  }
})

export default router
