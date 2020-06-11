<template>
  <div class="nav-bar">
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          {{ userName }}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/levinhax/vue-admin-template">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item @click.native="handleLogOut">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      userName: 'levinhax'
    }
  },
  computed: {
    // ...mapGetters(['userName', 'avatar'])
  },
  methods: {
    handleLogOut() {
      console.log('登出')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    padding-left: 16px;
    line-height: 50px;
    &:focus {
      outline: none;
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
