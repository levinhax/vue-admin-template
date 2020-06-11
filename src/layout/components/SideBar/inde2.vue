<template>
  <div class="side-bar-wrapper">
    <logo v-if="showLogo" :collapse="isCollapse" />

    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="isCollapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menuData">
        <template v-if="item.children">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-submenu v-if="subItem.children" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.children"
                  :key="i"
                  :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{
                subItem.title
              }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'

export default {
  name: 'SideBar',
  data() {
    return {
      showLogo: true,
      isCollapse: false,
      menuData: [
        {
          index: '/',
          title: '系统首页',
          icon: 'el-icon-lx-home'
        },
        {
          index: '0201',
          title: 'Blog',
          icon: 'el-icon-rank',
          children: [
            {
              index: '/blog/index',
              title: 'BlogList'
            },
            {
              index: '/blog/create',
              title: 'BlogCreate'
            }
          ]
        }
      ]
    }
  },
  components: {
    Logo
  },
  computed: {
    ...mapGetters({
      menuRouteData: 'routes'
    }),
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  created() {
    console.log('menuRouteData: ', this.menuRouteData)
  },
  methods: {
    handleNavRouter(path) {
      console.log('path: ', path)
    }
  }
}
</script>
