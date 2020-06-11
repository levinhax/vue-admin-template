const state = {
  sidebar: {
    opened: sessionStorage.getItem('sidebarStatus')
      ? !!+sessionStorage.getItem('sidebarStatus')
      : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  toggleSideBar: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      sessionStorage.setItem('sidebarStatus', 1)
    } else {
      sessionStorage.setItem('sidebarStatus', 0)
    }
  },
  closeSidebar: (state, withoutAnimation) => {
    sessionStorage.setItem('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  toggleDevice: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('toggleSideBar')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('closeSideBar', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
