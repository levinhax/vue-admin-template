import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home')
const Login = () => import(/* webpackChunkName: "login" */ '../views/User/login')
// const Redirect = () => import(/* webpackChunkName: "Redirect" */ '../views/Redirect')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../views/Error/404')
const NotAccess = () => import(/* webpackChunkName: "NotFound" */ '../views/Error/403')

Vue.use(VueRouter)

export const StaticRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/403',
    name: 'NotAccess',
    component: NotAccess
  }
]

export const AsyncRouterMap = []

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: StaticRouterMap
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
