<template>
  <div class="dynamic-table-wrapper">
    <h3>Dynamic Table</h3>
    <el-row style="margin-bottom: 12px;">
      <el-button @click="changeDynamicTable1">动态表格1</el-button>
      <el-button @click="changeDynamicTable2">动态表格2</el-button>
    </el-row>
    <DynamicTable :tableHead="headOptions" :tableData="tableData" />
  </div>
</template>

<script>
import DynamicTable from './components/DynamicTable'

const defaultHeadOptions = [
  {
    prop: 'name',
    label: '驾驶员'
  },
  {
    prop: 'org',
    label: '部门'
  },
  {
    prop: 'carType',
    label: '驾驶车型'
  },
  {
    prop: 'count',
    label: '运输次数'
  },
  {
    prop: 'strok1',
    label: '1.0-2.0公里'
  },
  {
    prop: 'strok2',
    label: '2.0-3.0公里'
  },
  {
    prop: 'strok3',
    label: '3.0-5.0公里'
  }
]

export default {
  name: 'DynamicTablePage',
  data() {
    return {
      headOptions: defaultHeadOptions,
      tableData: [
        {
          name: '驾驶员01',
          org: '第一项目部',
          carType: 'TL001',
          count: 10,
          strok1: 3,
          strok2: 4,
          strok3: 3
        },
        {
          name: '驾驶员02',
          org: '第一项目部',
          carType: 'TL001',
          count: 9,
          strok1: 3,
          strok2: 2,
          strok3: 4
        },
        {
          name: '驾驶员03',
          org: '第一项目部',
          carType: 'TL001',
          count: 12,
          strok1: 3,
          strok2: 7,
          strok3: 2
        }
      ]
    }
  },
  components: {
    DynamicTable
  },
  methods: {
    changeDynamicTable1() {
      this.headOptions = defaultHeadOptions.slice(0, 5)
    },
    changeDynamicTable2() {
      this.headOptions = defaultHeadOptions.slice(0, 6)
    }
  }
}
</script>

<style lang="scss" scoped>
.dynamic-table-wrapper {
  h3 {
    text-align: center;
  }
}
</style>
