import request from '@/utils/myRequest'

// 获取测试数据列表
export function testDataList(params) {
  return request({
    url: '/api/testdata/list',
    method: 'get',
    params
  })
}
