import request from '@/utils/myRequest'

// 上传单个文件
export function uploadFile(data) {
  return request({
    url: '/api/uploadfile',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
