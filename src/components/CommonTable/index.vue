<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    stripe
    fit
    empty-text="暂无数据"
    style="width: 100%;"
    show-overflow-tooltip
    :header-cell-style="headerCellStyle"
    :cell-style="cellStyle"
    :border="bordered"
    :show-header="showHeader"
    @selection-change="handleSelectionChange"
  >
    <!-- 多选 -->
    <el-table-column v-if="mutipleSelect" type="selection" width="55"> </el-table-column>
    <el-table-column
      v-for="(column, index) in tableLabel"
      :key="column.prop"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
      show-overflow-tooltip
    >
      <!-- <template slot-scope="scope">{{ scope.row[column.prop] }}</template> -->
      <template slot-scope="scope">
        <!-- <span v-if="item.style" :style="column.style">
          {{ scope.row[column.prop] }}
        </span>
        <span v-else>{{ scope.row[column.prop] }}</span> -->
        <template v-if="!column.render">
          <!-- formatter 用来格式化内容 Function(row, column, cellValue, index) -->
          <template v-if="column.formatter">
            <span v-html="column.formatter(scope.row, column)"></span>
          </template>
          <span v-else>{{ scope.row[column.prop] }}</span>
        </template>
        <template v-else>
          <expand-dom
            :column="column"
            :row="scope.row"
            :render="column.render"
            :index="index"
          ></expand-dom>
        </template>
      </template>
    </el-table-column>
    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: 'CommonTable',
  props: {
    tableLabel: {
      type: Array,
      default: function() {
        return []
      }
    },
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    mutipleSelect: {
      type: Boolean,
      default: function() {
        return true
      }
    },
    bordered: {
      type: Boolean,
      default: function() {
        return true
      }
    },
    showHeader: {
      type: Boolean,
      default: function() {
        return true
      }
    },
    cellStyle: {
      type: [Object, Function],
      default: function() {
        return { textAlign: 'center' }
      }
    },
    headerCellStyle: {
      type: [Object, Function],
      default: function() {
        return {
          height: '54px',
          background: 'rgba(250,250,250,1)',
          color: 'rgba(0, 0, 0, 0.85)',
          textAlign: 'center'
        }
      }
    }
  },
  data() {
    return {
      // headerCellStyle: {
      //   height: '54px',
      //   background: 'rgba(250,250,250,1)',
      //   color: 'rgba(0, 0, 0, 0.85)',
      //   textAlign: 'center'
      // }
      currentRow: null
    }
  },
  components: {
    expandDom: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const params = {
          row: ctx.props.row,
          index: ctx.props.index
        }
        if (ctx.props.column) params.column = ctx.props.column
        return ctx.props.render(h, params)
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.currentRow = val
      this.$emit('handleSelectionChange', val)
    }
  }
}
</script>
