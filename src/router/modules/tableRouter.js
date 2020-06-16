/* Layout */
import Layout from '@/layout'
const TableCommon = () => import(/* webpackChunkName: "TableCommon" */ '../../views/Table/common')
const TableDynamic = () =>
  import(/* webpackChunkName: "TableDynamic" */ '../../views/Table/dynamic')

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
    },
    {
      path: 'dynamic',
      name: 'TableDynamic',
      component: TableDynamic,
      meta: { title: 'Table Dynamic', icon: '' }
    }
  ]
}

export default tableRouter
