const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  routes: state => state.permission.routes,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
}

export default getters
