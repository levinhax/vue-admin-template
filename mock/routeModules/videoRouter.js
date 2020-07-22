const videoRouter = {
  id: '0700',
  url: '/video',
  name: 'Video',
  component: 'layout',
  description: null,
  title: '视频',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/video/rtmp',
  children: [
    {
      id: '0701',
      url: 'rtmp',
      name: 'rtmpVideo',
      component: 'Video/rtmp',
      description: null,
      title: 'Rtmp - VideoJs',
      icon: '',
      parentId: '0700',
      parentName: 'Video',
      redirect: '',
      hidden: false,
      children: null
    },
    {
      id: '0702',
      url: 'hls',
      name: 'hlsVideo',
      component: 'Video/hls',
      description: null,
      title: 'Hls - VideoJs',
      icon: '',
      parentId: '0700',
      parentName: 'Video',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default videoRouter
