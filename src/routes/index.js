import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import Admin from './Admin.vue'
import Query from './Query.vue'
import NotFound from './NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/admin/query',
      component: Query
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})

export default router
