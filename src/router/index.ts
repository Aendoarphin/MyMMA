import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const appName = import.meta.env.VITE_APPNAME;

const catchAllRoute = {
  path: '/:pathMatch(.*)*',
  name: '404',
  redirect: '/not-found',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { // Test page for anything
      path: '/test',
      name: 'test',
      component: () => import('../views/FetchExample.vue'),
      meta: {
        title: 'Test'
      }
    },
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
    {
      path: '/not-found',
      name: 'not-found',
      meta: {
        title: 'Not Found'
      },
      component: () => import('../views/NotFoundView.vue'),
    },
    catchAllRoute
  ],
})
// Dynamically set the document title
router.beforeEach((to, from, next) => {
  document.title = appName + " | " + to.meta.title as string
  next()
})

export default router
