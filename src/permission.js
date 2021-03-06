import router from './router'
import store from './store'
import user from './store/modules/user'
import { Message } from 'element-ui'
import { getRouter } from './api/user'
import { getToken, removeToken } from './utils/auth'
import { addRouter } from './utils/addRouter'

const whiteList = ['/login', '/about']

router.beforeEach((to, from, next) => {
  // NProgress.start()
  if (getToken()) {
    // has token
    if (to.path !== '/login') {
      if (user.state.init) {
        // 已经获取动态路由后一定true，就无需再次请求路由
        next()
      } else {
        // false，还没有获取动态路由，前往获取动态路由
        getAsyncRouter(to, next)
      }
    } else {
      Message({ message: '您已经登录', type: 'info' })
      next({ path: '/' })
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // 免登陆白名单，
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach((to, from) => {
  // NProgress.done() // 结束Progress
})

async function getAsyncRouter(to, next) {
  const params = {
    userRole: store.getters.token
  }
  const resRouter = await getRouter(params)
  if (resRouter.code === 200) {
    const asyncRouter = addRouter(resRouter.data.router)
    // 后置添加404页面,防止刷新404
    asyncRouter.push({
      path: '*',
      redirect: '/404',
      hidden: true
    })
    router.addRoutes(asyncRouter) // vue-router提供的addRouter方法进行路由拼接
    await store.dispatch('permission/generateRoutes', asyncRouter) // 存储到vuex
    await store.dispatch('user/getInfo')
    store.commit('user/SET_INIT', true)
    // hack method to ensure that addRoutes is complete
    // set the replace: true, so the navigation will not leave a history record
    // https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
    next({ ...to, replace: true })
  } else {
    console.log('============ async router error ===========')
    removeToken()
  }
}
