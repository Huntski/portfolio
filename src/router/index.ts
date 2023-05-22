import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView'
import ProjectView from '../views/ProjectView'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/project/:id',
    name: 'ProjectView',
    component: ProjectView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
