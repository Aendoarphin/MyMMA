import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/mma',
      name: 'mma',
      meta: {
        title: 'MMA'
      },
      component: () => import('../views/MmaView.vue'),
    },
    {
      path: '/bjj',
      name: 'bjj',
      meta: {
        title: 'BJJ'
      },
      component: () => import('../views/BjjView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
