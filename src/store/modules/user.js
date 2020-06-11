import { getAccountByToken } from '@/api/user'
import { getToken, setToken, getUserInfo, setUserInfo } from '@/utils/auth'

const state = {
  token: getToken() || '',
  userInfo: getUserInfo() || {}, // 用户信息，userName: ''，roles: []
  init: false // 是否完成初始化 // 默认未完成
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
    setUserInfo(userInfo)
  },
  SET_INIT: (state, status) => {
    state.init = status
  }
}

const actions = {
  updateToken({ commit }, userToken) {
    commit('SET_TOKEN', userToken)
  },
  resetToken({ commit }) {
    commit('SET_TOKEN', '')
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const params = {
        token: state.token
      }
      getAccountByToken(params)
        .then(response => {
          const data = response.data
          // if (data.roles && data.roles.length > 0) {
          //   // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }
          commit('SET_USERINFO', data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
