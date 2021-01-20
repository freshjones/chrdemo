import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home6.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('../views/Home2.vue')
    },
    {
      path: '/home3',
      name: 'home3',
      component: () => import('../views/Home3.vue')
    },
    {
      path: '/home4',
      name: 'home4',
      component: () => import('../views/Home4.vue')
    },
    {
      path: '/home5',
      name: 'home5',
      component: () => import('../views/Home5.vue')
    },
    {
      path: '/home6',
      name: 'home6',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/home7',
      name: 'home7',
      component: () => import('../views/Home7.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('../views/Applications.vue')
    },
    {
      path: '/markets',
      name: 'markets',
      component: () => import('../views/Markets.vue')
    },
    {
      path: '/markets/life-science-healthcare-biophotonices',
      name: 'life-science',
      component: () => import('../views/LifeSciences.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/Company.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/Resources.vue')
    },
    {
      path: '/spectra-viewer',
      name: 'spectraviewer',
      component: () => import('../views/SpectraViewer.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
