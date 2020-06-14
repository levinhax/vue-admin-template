const blogRouter = {
  id: '0200',
  url: '/blog',
  name: 'Blog',
  component: 'layout',
  description: null,
  title: 'Blog',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/blog/index',
  children: [
    {
      id: '0201',
      url: 'index',
      name: 'BlogList',
      component: 'Blog/list',
      description: null,
      title: 'BlogList',
      icon: 'dashboard',
      parentId: '0200',
      parentName: 'Blog',
      redirect: '',
      hidden: false,
      children: null
    },
    {
      id: '0202',
      url: 'create',
      name: 'BlogCreate',
      component: 'Blog/create',
      description: null,
      title: 'BlogCreate',
      icon: '',
      parentId: '0200',
      parentName: 'Blog',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default blogRouter
