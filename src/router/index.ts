// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'tabla_2',
        name: 'Tabla2',

        component: () => import('@/components/Tabla2.vue'),
      },
      {
        path: 'tabla_dinamica',
        name: 'TablaDinamica',

        component: () => import('@/components/TablaDinamica.vue'),
      },
      {
        path: 'tabla_3',
        name: 'Tabla3',

        component: () => import('@/components/Tabla3.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
