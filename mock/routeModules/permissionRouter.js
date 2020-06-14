const permissionRouter = {
  id: '9900',
  url: '/permission',
  name: 'Permission',
  component: 'layout',
  description: null,
  title: '权限测试',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/permission/directive',
  children: [
    {
      id: '9901',
      url: 'directive',
      name: 'PermissionDirective',
      component: 'Permission/directive',
      description: null,
      title: '指令权限',
      icon: '',
      parentId: '9900',
      parentName: 'Permission',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default permissionRouter
