<template>
  <div class="scroll-table-wrapper">
    <h3>滚动懒加载</h3>

    <el-table
      :data="tableData"
      style="width: 100%"
      height="360"
      border
      v-tableLoadMore="tableLoadMore"
    >
      <el-table-column prop="id" label="Id" width="180"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { commonTableList } from '@/api/table'

export default {
  name: 'ScrollTablePage',
  data() {
    return {
      total: 0,
      page: 1,
      limit: 8,
      tableData: []
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    async getTableData(page, limit) {
      const params = {
        page: page || this.page,
        limit: limit || this.limit
      }
      const res = await commonTableList(params)
      if (res.code === 200) {
        this.tableData = this.tableData.concat(res.data.list)
        this.total = res.data.total
      } else {
        this.$message.error('数据请求错误')
      }
    },
    tableLoadMore(val) {
      if (val.direction === 'down' && val.distanceRelativeToBottom === 0) {
        if (this.page < Math.ceil(this.total / this.limit)) {
          this.page++
          this.getTableData()
        }
      }

      if (val.direction === 'up' && val.scrollTop === 0) {
        this.page = 1
        this.tableData = []
        this.getTableData()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-table-wrapper {
  h3 {
    text-align: center;
  }
}
</style>
