import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/blogview.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/blog', 
      name: 'blog',
      component: BlogView
    }


    

  ]
})

export default router
