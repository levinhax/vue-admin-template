/* Layout */
import Layout from '@/layout'
const FormCommon = () => import(/* webpackChunkName: "FormCommon" */ '../../views/Form/common')

const formRouter = {
  path: '/form',
  name: 'Form',
  component: Layout,
  redirect: '/form/common',
  meta: { title: 'Form', icon: '' },
  children: [
    {
      path: 'common',
      name: 'FormCommon',
      component: FormCommon,
      meta: { title: 'Form Common', icon: '' }
    }
  ]
}

export default formRouter
