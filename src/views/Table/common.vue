<template>
  <div class="common-table-wrapper">
    <h3>Common Table</h3>
    <CommonTable :tableLabel="commonTableLabel" :tableData="commonTableData">
      <!-- slot -->
      <el-table-column label="操作" width="90">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="handleClickRow(scope.$index, scope.row.id)"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
    </CommonTable>

    <Pagination
      :total="total"
      :page="page"
      :limit="limit"
      :layout="layout"
      @pagination="handleCurrentChange"
      class="pagination-wrapper"
    />
  </div>
</template>

<script>
import { commonTableList } from '@/api/table'
import CommonTable from '@/components/CommonTable'
import Pagination from '@/components/Pagination'

export default {
  name: 'CommonTablePage',
  data() {
    return {
      page: 1,
      limit: 10,
      total: 0,
      layout: 'total, sizes, prev, pager, next, jumper',
      commonTableLabel: [
        {
          prop: 'title',
          label: '标题',
          width: '240px'
        },
        {
          prop: 'author',
          label: '作者'
        },
        {
          prop: 'content',
          label: '内容',
          width: '420px'
        },
        {
          prop: 'createTime',
          label: '创建时间'
        },
        {
          prop: 'status',
          label: '状态',
          style: {
            color: '#1890FF',
            cursor: 'pointer'
          }
        },
        {
          prop: 'pageViews',
          label: '浏览量'
        }
      ],
      commonTableData: []
    }
  },
  components: {
    CommonTable,
    Pagination
  },
  created() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      const params = {
        page: this.page,
        limit: this.limit
      }
      const res = await commonTableList(params)
      if (res.code === 200) {
        this.commonTableData = res.data.list
        this.total = res.data.total
      } else {
        this.$message.error('数据请求错误')
      }
    },
    handleCurrentChange(val) {
      this.page = val.page
      this.limit = val.limit
      this.getTableData()
    },
    handleClickRow(index, id) {
      this.$message.success('currentRow index: ' + index + ' id: ' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-table-wrapper {
  h3 {
    text-align: center;
  }
  .pagination-wrapper {
    float: right;
  }
}
</style>
