<template>
  <div class="drag-table-wrapper">
    <h3>可拖拽表格</h3>

    <!-- row-key 用来优化 Table 的渲染 -->
    <el-table
      ref="dragTable"
      v-loading="listLoading"
      :data="tableData"
      row-key="id"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="id" label="Id" width="180"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者" width="180"> </el-table-column>
    </el-table>

    <div class="show-d"><el-tag>The default order :</el-tag> {{ oldList }}</div>
    <div class="show-d"><el-tag>The after dragging order :</el-tag> {{ newList }}</div>
  </div>
</template>

<script>
import { commonTableList } from '@/api/table'
import Sortable from 'sortablejs'

export default {
  name: 'DragTablePage',
  data() {
    return {
      listLoading: true,
      tableData: [],
      page: 1,
      limit: 8,
      sortable: null,
      oldList: [],
      newList: []
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    async getTableData(page, limit) {
      this.listLoading = true
      const params = {
        page: page || this.page,
        limit: limit || this.limit
      }
      const res = await commonTableList(params)
      if (res.code === 200) {
        this.tableData = this.tableData.concat(res.data.list)
        this.total = res.data.total
        this.listLoading = false
        this.oldList = this.tableData.map(v => v.id)
        this.newList = this.oldList.slice()
        this.$nextTick(() => {
          this.setSort()
        })
      } else {
        this.$message.error('数据请求错误')
        this.listLoading = false
      }
    },
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        '.el-table__body-wrapper > table > tbody'
      )[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.tableData.splice(evt.oldIndex, 1)[0]
          this.tableData.splice(evt.newIndex, 0, targetRow)

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
  }
}
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}
</style>

<style lang="scss" scoped>
.drag-table-wrapper {
  h3 {
    text-align: center;
  }

  .show-d {
    margin-top: 15px;
  }
}
</style>
