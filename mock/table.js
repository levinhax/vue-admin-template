import Mock from 'mockjs'

const List = []
const count = 90

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      timestamp: +Mock.Random.date('T'),
      title: '@ctitle(5, 12)',
      author: '@first',
      contentShort: 'mock data',
      content: '@cparagraph(2, 3)',
      foreCast: '@float(0, 100, 2, 2)',
      importance: '@integer(1, 3)',
      'type|1': ['CN', 'US', 'JP', 'EU'],
      'status|1': ['published', 'draft'],
      createTime: '@date(yyyy-MM-dd)',
      commentDisabled: true,
      pageViews: '@integer(300, 5000)'
    })
  )
}

export default [
  // commonTable 数据列表
  {
    url: '/api/commonTable/list',
    type: 'get',
    response: config => {
      const { title, status, page = 1, limit = 10, sort } = config.query

      let mockList = List.filter(item => {
        if (title && item.title.indexOf(title) < 0) return false
        if (status && item.status !== status) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      )

      return {
        code: 200,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  }
]
