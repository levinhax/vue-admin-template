/* Layout */
import Layout from '@/layout'
const FileUpload = () => import(/* webpackChunkName: "FileUpload" */ '@/views/File/upload')

const fileRouter = {
  path: '/file',
  name: 'File',
  component: Layout,
  redirect: '/file/upload',
  meta: { title: 'File', icon: '' },
  children: [
    {
      path: 'upload',
      name: 'FileUpload',
      component: FileUpload,
      meta: { title: 'FileUpload', icon: '' }
    }
  ]
}

export default fileRouter
