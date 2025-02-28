import { createRouter, createWebHistory } from 'vue-router'
const routes = [

  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/quiz/:id',
    name: 'quiz',
    component: () => import('../views/QuizView.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/StartView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },

  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SigninView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
