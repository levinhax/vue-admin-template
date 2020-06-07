import { getToken, setToken, getUserInfo, setUserInfo } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: getUserInfo() || {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
    setUserInfo(userInfo)
  }
}

const actions = {
  updateToken({ commit }, userToken) {
    commit('SET_TOKEN', userToken)
  },
  resetToken({ commit }) {
    commit('SET_TOKEN', '')
  },
  updateUserInfo({ commit }, userInfo) {
    commit('SET_USERINFO', userInfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
