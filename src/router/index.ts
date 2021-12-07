import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories/home'
  },
  {
    path: '/memories/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/memories/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'add',
        component: () => import('@/views/AddPage.vue')
      },
      {
        path: 'details/:id',
        component: () => import('@/views/DetailsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
