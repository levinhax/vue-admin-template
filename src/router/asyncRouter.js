/* Layout */
import Layout from '@/layout'
import blogRoute from './modules/blogRoute'
import tableRouter from './modules/tableRouter'

const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard')

export const AsyncRouterMap = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: '首页' }
  },
  blogRoute,
  tableRouter
]
