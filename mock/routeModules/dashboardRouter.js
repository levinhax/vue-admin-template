const dashboardRouter = {
  id: '0100',
  url: '/',
  name: 'App',
  component: 'layout',
  description: null,
  title: '首页',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/dashboard',
  children: [
    {
      id: '0101',
      url: 'dashboard',
      name: 'Dashboard',
      component: 'Dashboard/index',
      description: null,
      title: '首页',
      icon: 'dashboard',
      parentId: '0100',
      parentName: 'Dashboard',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default dashboardRouter
