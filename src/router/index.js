import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
// import Home from '../views/Home.vue'
// const Home = () => import(/* webpackChunkName: "home" */ '../views/Home')
const Login = () => import(/* webpackChunkName: "login" */ '../views/User/login')
const Redirect = () => import(/* webpackChunkName: "Redirect" */ '../views/Redirect')
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../views/Error/404')
const NotAccess = () => import(/* webpackChunkName: "NotFound" */ '../views/Error/403')

const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard')
// const Blog = () => import(/* webpackChunkName: "BlogList" */ '../views/Blog')
// const BlogList = () => import(/* webpackChunkName: "BlogList" */ '../views/Blog/list')
// const BlogCreate = () => import(/* webpackChunkName: "BlogCreate" */ '../views/Blog/create')

Vue.use(VueRouter)

export const StaticRouterMap = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   name: 'App',
  //   meta: { title: '主页', icon: 'el-icon-s-home' },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'Dashboard',
  //       component: Dashboard
  //     }
  //     // ================== 写法一 =====================
  //     // {
  //     //   path: 'blog/index',
  //     //   name: 'BlogList',
  //     //   component: BlogList
  //     // },
  //     // {
  //     //   path: 'blog/create',
  //     //   name: 'BlogCreate',
  //     //   component: BlogCreate
  //     // },
  //     // ================== 写法二 ======================
  //     // {
  //     //   path: '/blog',
  //     //   name: 'Blog',
  //     //   component: Blog,
  //     //   redirect: '/blog/index',
  //     //   meta: { title: 'Blog', icon: 'el-icon-menu' },
  //     //   children: [
  //     //     {
  //     //       path: 'index',
  //     //       name: 'BlogList',
  //     //       component: BlogList,
  //     //       // hidden: true,
  //     //       meta: {
  //     //         title: 'BlogList',
  //     //         icon: 'el-icon-s-grid'
  //     //         // roles: ['admin', 'editor'],
  //     //         // breadcrumb: false
  //     //       }
  //     //     },
  //     //     {
  //     //       path: 'create',
  //     //       name: 'BlogCreate',
  //     //       component: BlogCreate,
  //     //       meta: { title: 'BlogCreate', icon: 'el-icon-s-grid' }
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'redirect',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: Redirect
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    hidden: true,
    meta: {
      title: '404'
    }
  },
  {
    path: '/403',
    name: 'NotAccess',
    component: NotAccess,
    hidden: true,
    meta: {
      title: '403'
    }
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
