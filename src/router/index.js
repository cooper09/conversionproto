import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: () => import( '../views/MainView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import( '../views/UsersView.vue')
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: () => import( '../views/CampaignsView.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import( '../views/ReportsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/campaign/:id',
    name: 'campaign',
    params: true,
    component: () => import( '../views/CampaignView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
