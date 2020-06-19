const clipboardRouter = {
  id: '0500',
  url: '/clipboard',
  name: 'Clipboard',
  component: 'layout',
  description: null,
  title: 'Clipboard',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/clipboard/index',
  children: [
    {
      id: '0501',
      url: 'index',
      name: 'ClipboardIndex',
      component: 'Clipboard/index',
      description: null,
      title: 'Clipboard',
      icon: '',
      parentId: '0500',
      parentName: 'Clipboard',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default clipboardRouter
