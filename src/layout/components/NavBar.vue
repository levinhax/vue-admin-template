<template>
  <div class="nav-bar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <!-- <template v-if="device !== 'mobile'">
        search screenfull
      </template> -->

      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          {{ userInfo.name }}
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
import { mapGetters, mapActions } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'NavBar',
  data() {
    return {
      userName: 'levinhax'
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'sidebar', 'device'])
  },
  components: {
    Hamburger,
    Breadcrumb
  },
  created() {},
  methods: {
    ...mapActions({
      dispatchToggleSideBar: 'app/toggleSideBar',
      logout: 'user/logout'
    }),
    toggleSideBar() {
      // this.$store.dispatch('app/toggleSideBar')
      this.dispatchToggleSideBar()
    },
    async handleLogOut() {
      await this.logout()
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
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

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background-color 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

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
        cursor: pointer;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
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
