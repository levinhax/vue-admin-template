import Mock from 'mockjs'

const mockData = Mock.mock({
  'data|30': [
    {
      testId: '@id',
      test_title: '@sentence(10, 20)',
      'status|1': ['published', 'draft', 'deleted'],
      author: 'name',
      display_time: '@datetime',
      test_inventory: '@integer(300, 5000)'
    }
  ]
})

export default [
  //   测试数据列表
  {
    url: '/api/testdata/list',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: mockData.data
      }
    }
  }
]
