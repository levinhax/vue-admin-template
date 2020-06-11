const blogRouter = {
  id: '0200',
  url: '/blog',
  name: 'Blog',
  component: 'layout',
  description: null,
  parentId: null,
  parentName: null,
  redirect: '/blog/index',
  title: 'Blog',
  icon: 'dashboard',
  children: [
    {
      id: '0201',
      url: 'index',
      name: 'BlogList',
      component: 'Blog/list',
      description: null,
      parentId: '0200',
      parentName: 'Blog',
      title: 'BlogList',
      icon: 'dashboard',
      hidden: false,
      children: null
    },
    {
      id: '0202',
      url: 'create',
      name: 'BlogCreate',
      component: 'Blog/create',
      description: null,
      parentId: '0200',
      parentName: 'Blog',
      title: 'BlogCreate',
      icon: '',
      hidden: false,
      children: null
    }
  ]
}

export default blogRouter
