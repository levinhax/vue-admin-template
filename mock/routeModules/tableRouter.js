const tableRouter = {
  id: '0300',
  url: '/table',
  name: 'Table',
  component: 'layout',
  description: null,
  title: 'Table',
  icon: 'dashboard',
  parentId: null,
  parentName: null,
  redirect: '/table/common',
  children: [
    {
      id: '0301',
      url: 'common',
      name: 'TableCommon',
      component: 'Table/common',
      description: null,
      title: 'Common Table',
      icon: '',
      parentId: '0300',
      parentName: 'Table',
      redirect: '',
      hidden: false,
      children: null
    }
  ]
}

export default tableRouter
