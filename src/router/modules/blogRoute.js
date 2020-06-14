/* Layout */
import Layout from '@/layout'
const BlogList = () => import(/* webpackChunkName: "BlogList" */ '../views/Blog/list')
const BlogCreate = () => import(/* webpackChunkName: "BlogCreate" */ '../views/Blog/create')

const blogRoute = {
  path: '/blog',
  name: 'Blog',
  component: Layout,
  redirect: '/blog/index',
  meta: { title: 'Blog', icon: '' },
  children: [
    {
      path: 'index',
      name: 'BlogList',
      component: BlogList,
      meta: { title: 'Blog list', icon: '' }
    },
    {
      path: 'create',
      name: 'BlogCreate',
      component: BlogCreate,
      meta: { title: 'Blog Create', icon: '' }
    }
  ]
}

export default blogRoute
