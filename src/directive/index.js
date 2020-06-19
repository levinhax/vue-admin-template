import Vue from 'vue'
import permission from './permission'
import tableLoadMore from './tableLoadMore'
import clipboard from './clipboard'

export function directive() {
  Vue.directive('permission', permission)
  Vue.directive('tableLoadMore', tableLoadMore)
  Vue.directive('clipboard', clipboard)
}

// export default permission
