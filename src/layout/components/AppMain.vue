<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.app-main {
  /* 50 = navbar */
  width: 100%;
  min-height: calc(100vh - 50px);
  box-sizing: border-box;
  padding: 20px 16px;
  position: relative;
  /* overflow: hidden; */
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>
