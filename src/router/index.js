import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cases from "@/views/Cases.vue";
import AuthView from "@/views/AuthView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cases',
    name: 'cases',
    component: Cases
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
