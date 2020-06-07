import request from '@/utils/myRequest'

// 用户登录
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getAccountByToken(params) {
  return request({
    url: '/api/user/getAccountByToken',
    method: 'get',
    params
  })
}
