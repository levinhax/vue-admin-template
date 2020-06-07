const tokens = {
  admin: {
    token: 'admin-token',
    roles: ['admin']
  },
  user: {
    token: 'user-token',
    roles: ['user']
  }
}

const users = {
  'admin-token': {
    roleId: 1,
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://cn.vuejs.org/images/logo.png',
    name: 'Super Admin'
  },
  'user-token': {
    roleId: 2,
    roles: ['user'],
    introduction: 'I am user',
    avatar: 'https://cn.vuejs.org/images/logo.png',
    name: 'user'
  }
}

export default [
  // user login
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      console.log(username)
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: 400,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },
  // user info
  {
    url: '/api/user/getAccountByToken',
    type: 'get',
    response: config => {
      const { token } = config.query
      console.log('token: ', token)
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 400,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  }
]
