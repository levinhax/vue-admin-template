<template>
  <div class="permission-directive-wrapper">
    <div style="margin-bottom:15px;">Your roles: {{ userInfo.roles }}</div>
    <h3>自定义指令的实现</h3>
    <i>指令实现初始化有些问题</i>
    <div :key="key" style="margin-top:30px;">
      <el-button v-permission="['admin']" type="primary">admin</el-button>
      <el-button v-permission="['user']" type="primary">user</el-button>
      <el-button v-permission="['admin', 'user']" type="primary">admin, user</el-button>
    </div>
    <h3>v-if的实现</h3>
    <div :key="'checkPermission' + key" style="margin-top:30px;">
      <el-button v-if="checkPermission(['admin'])" type="primary">admin</el-button>
      <el-button v-if="checkPermission(['user'])" type="primary">user</el-button>
      <el-button v-if="checkPermission(['admin', 'user'])" type="primary">admin, user</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import checkPermission from '@/utils/permission'

export default {
  name: 'PermissionDirective',
  data() {
    return {
      key: 1
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    checkPermission
  }
}
</script>

<style lang="scss" scoped>
@import './directive.scss';
</style>
