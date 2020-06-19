<template>
  <div class="clipboard-wrapper">
    <h3 class="title">复制粘贴</h3>

    <h4>直接使用clipboard</h4>
    <div>
      <el-input
        v-model="inputData"
        placeholder="Please input"
        style="width: 400px; margin-right: 16px;"
      />
      <el-button type="primary" icon="el-icon-document" @click="handleCopy(inputData, $event)">
        copy
      </el-button>
    </div>

    <h4>使用指令</h4>
    <div>
      <el-input
        v-model="inputData"
        placeholder="Please input"
        style="width: 400px; margin-right: 16px;"
      />
      <el-button
        v-clipboard:copy="inputData"
        v-clipboard:success="clipboardSuccess"
        type="primary"
        icon="el-icon-document"
      >
        copy
      </el-button>
    </div>

    <h4>内容粘贴区：</h4>
    <el-input
      type="textarea"
      v-model="pasteText"
      :autosize="{ minRows: 3, maxRows: 6 }"
      placeholder="请输入内容"
      style="width: 640px"
    ></el-input>
  </div>
</template>

<script>
import handleClipboard from '@/utils/clipboard'

export default {
  name: 'Clipboard',
  data() {
    return {
      inputData: 'hello world',
      pasteText: ''
    }
  },
  methods: {
    handleCopy(text, event) {
      handleClipboard(text, event)
    },
    clipboardSuccess() {
      this.$message({
        message: 'Copy successfully',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.clipboard-wrapper {
  .title {
    text-align: center;
  }
}
</style>
