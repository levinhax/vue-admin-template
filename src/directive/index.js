import Vue from 'vue'
import permission from './permission'

export function directive() {
  Vue.directive('permission', permission)
}

export default permission
