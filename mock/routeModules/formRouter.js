const formRouter = {
  id: '0400',
  url: '/form',
  name: 'Form',
  component: 'layout',
  description: null,
  title: 'Form',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/form/common',
  children: [
    {
      id: '0401',
      url: 'common',
      name: 'FormCommon',
      component: 'Form/common',
      description: null,
      title: 'Common Form',
      icon: '',
      parentId: '0400',
      parentName: 'Form',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default formRouter
