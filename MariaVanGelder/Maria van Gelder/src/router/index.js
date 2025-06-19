import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kunstwerken from '../views/Kunstwerken.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kunstwerken',
    name: 'kunstwerken',
    component: Kunstwerken
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

