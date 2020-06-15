/* Layout */
import Layout from '@/layout'
const TableCommon = () => import(/* webpackChunkName: "TableCommon" */ '../../views/Table/common')

const tableRouter = {
  path: '/table',
  name: 'Table',
  component: Layout,
  redirect: '/table/common',
  meta: { title: 'Table', icon: '' },
  children: [
    {
      path: 'common',
      name: 'TableCommon',
      component: TableCommon,
      meta: { title: 'Table Common', icon: '' }
    }
  ]
}

export default tableRouter
