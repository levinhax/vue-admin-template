<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ filterStr | uppercaseFirst }}</h3>
  </div>
</template>

<script>
import { testDataList } from '@/api/test'

export default {
  name: 'About',
  data() {
    return {
      filterStr: 'filter'
    }
  },
  created() {
    this.getTestDataList()
  },
  methods: {
    async getTestDataList() {
      const res = await testDataList()
      if (res.code === 200) {
        this.$message({
          message: '测试数据列表获取成功',
          type: 'success'
        })
        console.log(res.data)
      } else {
        this.$message.error('测试数据列表获取失败')
      }
    }
  }
}
</script>
