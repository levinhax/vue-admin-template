import request from '@/utils/myRequest'

// common table
export function commonTableList(params) {
  return request({
    url: '/api/commonTable/list',
    method: 'get',
    params
  })
}
