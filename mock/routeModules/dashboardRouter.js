const dashboardRouter = {
  id: '0100',
  url: '/',
  name: 'App',
  component: 'layout',
  description: null,
  parentId: null,
  parentName: null,
  redirect: '/dashboard',
  title: '首页',
  icon: 'dashboard',
  children: [
    {
      id: '0101',
      url: 'dashboard',
      name: 'Dashboard',
      component: 'Dashboard/index',
      description: null,
      parentId: '0100',
      parentName: 'Dashboard',
      title: '首页',
      icon: 'dashboard',
      hidden: false,
      children: null
    }
  ]
}

export default dashboardRouter
