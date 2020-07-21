/* Layout */
import Layout from '@/layout'
import blogRoute from './modules/blogRoute'
import tableRouter from './modules/tableRouter'
import formRouter from './modules/formRouter'
import fileRouter from './modules/fileRouter'
import videoRouter from './modules/videoRouter'

const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard')

export const AsyncRouterMap = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: '首页' }
  },
  blogRoute,
  tableRouter,
  fileRouter,
  videoRouter
]
