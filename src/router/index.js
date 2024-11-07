import { createRouter, createWebHistory } from 'vue-router'
const routes = [

  {
    path: '/',
    name: 'start',
    component: () => import('../views/StartView.vue')
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/QuizView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
