import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import loginPage from "../views/login";
import index from '../views/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta:{
      requireAuth: false
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
