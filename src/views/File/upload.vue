<template>
  <div class="file-upload-wrapper">
    <h3 class="title">文件上传</h3>

    <h4 class="item-title">拖拽上传图片</h4>
    <el-upload
      class="img-drap-upload"
      action=""
      drag
      multiple
      :limit="5"
      :file-list="imgDragFileList"
      accept=".jpg, .jpeg, .png, .gif"
      :http-request="handleUploadImg"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10M</div>
    </el-upload>
  </div>
</template>

<script>
import { uploadFile } from '@/api/file'

export default {
  name: 'FileUpload',
  data() {
    return {
      imgDragFileList: []
    }
  },
  methods: {
    async handleUploadImg(e) {
      let fileObj = e.file
      // FormData 对象
      let formData = new FormData()
      formData.append('file', fileObj)
      formData.append('id', 111)

      //   for (var [name, value] of formData.entries()) {
      //     console.log(name, value)
      //   }
      //   console.log(formData.get('id'))

      //   const res = await uploadFile(formData)
      //   console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.file-upload-wrapper {
  box-sizing: border-box;
  padding: 20px 40px;
  .title {
    text-align: center;
  }

  .item-title {
    color: 16px;
    margin-top: 21px;
  }
}
</style>
