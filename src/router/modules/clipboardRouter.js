/* Layout */
import Layout from '@/layout'
const Clipboard = () => import(/* webpackChunkName: "Clipboard" */ '../views/Clipboard')

const ClipboardRoute = {
  path: '/clipboard',
  name: '',
  component: Layout,
  redirect: '/clipboard/index',
  meta: { title: 'Clipboard', icon: '' },
  children: [
    {
      path: 'index',
      name: 'Clipboard',
      component: Clipboard,
      meta: { title: 'Clipboard', icon: '' }
    }
  ]
}

export default ClipboardRoute
