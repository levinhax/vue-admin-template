import dashboardRouter from './routeModules/dashboardRouter'
import blogRouter from './routeModules/blogRouter'
import permissionRouter from './routeModules/permissionRouter'
import tableRouter from './routeModules/tableRouter'
import formRouter from './routeModules/formRouter'
import clipboardRouter from './routeModules/clipboardRouter'
import fileRouter from './routeModules/fileRouter'
import videoRouter from './routeModules/videoRouter'

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
      const { userName } = config.body
      console.log(userName)
      const token = tokens[userName]
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
  },
  // permission menu
  {
    url: '/api/user/getRouter',
    type: 'post',
    response: config => {
      if (config.body.userRole === 'admin-token') {
        return {
          code: 200,
          data: {
            router: [
              dashboardRouter,
              blogRouter,
              permissionRouter,
              tableRouter,
              formRouter,
              clipboardRouter,
              fileRouter,
              videoRouter
            ]
          }
        }
      } else if (config.body.userRole === 'user-token') {
        return {
          code: 200,
          data: {
            router: [
              dashboardRouter,
              permissionRouter,
              tableRouter,
              formRouter,
              clipboardRouter,
              fileRouter,
              videoRouter
            ]
          }
        }
      }
    }
  },
  // user logout
  {
    url: '/api/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: 'logout success'
      }
    }
  }
]
