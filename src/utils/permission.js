import store from '@/store'

export default function checkPermission(value) {
  const roles = store.getters && store.getters.userInfo.roles

  if (roles && roles.length > 0) {
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        return false
      }
      return true
    } else {
      console.error(`need roles! Like v-permission="['admin','user']"`)
      return false
    }
  }
}
