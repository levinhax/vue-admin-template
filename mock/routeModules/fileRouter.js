const fileRouter = {
  id: '0600',
  url: '/file',
  name: 'File',
  component: 'layout',
  description: null,
  title: '文件',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/file/upload',
  children: [
    {
      id: '0601',
      url: 'upload',
      name: 'FileUpload',
      component: 'File/upload',
      description: null,
      title: '文件上传',
      icon: '',
      parentId: '0600',
      parentName: 'File',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default fileRouter
