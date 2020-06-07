<template>
  <div class="error-not-access-page">
    <div class="error-code">403</div>
    <div class="error-desc">Sorry ~~ 你没有权限访问该页面哦</div>
    <div class="error-handle">
      <el-button type="primary" size="large" @click="goHome">返回首页</el-button>
      <el-button class="error-btn" type="primary" size="large" @click="goBack"
        >返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotAccess',
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.error-not-access-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  box-sizing: border-box;
  .error-code {
    line-height: 1;
    font-size: 124px;
    font-weight: 600;
    color: #f02d2d;
  }
  .error-desc {
    font-size: 30px;
    color: #777;
  }
  .error-handle {
    margin-top: 30px;
    padding-bottom: 120px;
    .error-btn {
      margin-left: 100px;
    }
  }
}
</style>
