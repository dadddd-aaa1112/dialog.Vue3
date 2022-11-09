import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import MainLayout from '@/layouts/MainLayout.vue'


const routes = [
  {
    path: '/',
    component: Main,
    name: 'main',
    meta: {
      layout: MainLayout,
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
