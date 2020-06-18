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
      title: '公共表格',
      icon: '',
      parentId: '0300',
      parentName: 'Table',
      redirect: '',
      hidden: false,
      children: null
    },
    {
      id: '0302',
      url: 'dynamic',
      name: 'TableDynamic',
      component: 'Table/dynamic',
      description: null,
      title: '动态表格',
      icon: '',
      parentId: '0300',
      parentName: 'Table',
      redirect: '',
      hidden: false,
      children: null
    },
    {
      id: '0303',
      url: 'scroll',
      name: 'TableScroll',
      component: 'Table/scroll',
      description: null,
      title: '滚动懒加载',
      icon: '',
      parentId: '0300',
      parentName: 'Table',
      redirect: '',
      hidden: false,
      children: null
    },
    {
      id: '0304',
      url: 'drag',
      name: 'TableDrag',
      component: 'Table/drag',
      description: null,
      title: '拖拽表格',
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
