import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  }
}

const actions = {
  updateToken({ commit }, userToken) {
    commit('SET_TOKEN', userToken)
  },
  resetToken({ commit }) {
    commit('SET_TOKEN', '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
