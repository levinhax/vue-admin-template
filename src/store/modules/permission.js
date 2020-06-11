import { StaticRouterMap } from '@/router'

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = StaticRouterMap.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, routerList) {
    commit('SET_ROUTES', routerList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
