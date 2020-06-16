<template>
  <div class="dynamic-table">
    <el-table :data="tableData" border fit highlight-current-row>
      <el-table-column v-for="column in tableHead" :key="column.prop" :label="column.label">
        <template slot-scope="scope">
          {{ scope.row[column.prop] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'DynamicTable',
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    tableHead: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  created() {
    // console.log(this.tableHead)
  }
}
</script>
