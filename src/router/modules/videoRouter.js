/* Layout */
import Layout from '@/layout'
const rtmpVideo = () => import(/* webpackChunkName: "rtmpVideo" */ '@/views/Video/rtmp')

const videoRouter = {
  path: '/video',
  name: 'Video',
  component: Layout,
  redirect: '/video/rtmp',
  meta: { title: 'Video', icon: '' },
  children: [
    {
      path: 'rtmp',
      name: 'rtmpVideo',
      component: rtmpVideo,
      meta: { title: 'rtmpVideo', icon: '' }
    }
  ]
}

export default videoRouter