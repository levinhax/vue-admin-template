<template>
  <div :class="classObj" class="layout-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <NavBar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResizeMixin from './mixin/ResizeHandler'
import NavBar from './components/NavBar'
import Sidebar from './components/SideBar'
import AppMain from './components/AppMain'

export default {
  name: 'Layout',
  data() {
    return {}
  },
  components: {
    NavBar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.layout-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    width: 100%;
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .mobile .fixed-header {
    width: 100%;
  }
}
</style>
