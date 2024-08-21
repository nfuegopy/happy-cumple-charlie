import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/galeria',
      name: 'gallery',
      // Uso de carga perezosa para la galería
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/confirmar',
      name: 'confirm',
      // Uso de carga perezosa para la página de confirmación
      component: () => import('../components/ConfirmModal.vue')
    },
    // Puedes agregar más rutas aquí según sea necesario
  ]
})

export default router