<template>
  <el-form
    ref="form"
    :model="formModel"
    class="common-form"
    :rules="formRules"
    :label-width="labelWidth"
    :inline="formInLine"
  >
    <el-form-item
      v-for="(item, index) in formField"
      :key="index"
      :prop="item.value"
      :label="item.label"
      :class="item.className"
    >
      <!-- <template v-if="item.show"></template> -->
      <!-- solt -->
      <!-- <template v-if="item.type === 'slot'">
        <slot :name="'form-' + item.value" />
      </template> -->

      <!-- input 输入框 -->
      <el-input
        v-if="item.type === 'input'"
        v-model="formModel[item.value]"
        :type="item.type"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :placeholder="getPlaceholder(item)"
      />
      <!-- 密码框 -->
      <el-input
        v-if="item.type === 'password'"
        v-model="formModel[item.value]"
        show-password
        :type="item.type"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :placeholder="getPlaceholder(item)"
      />
      <!-- 文本域 -->
      <el-input
        v-if="item.type === 'textarea'"
        v-model="formModel[item.value]"
        :type="item.type"
        :disabled="item.disabled"
        :autosize="item.autosize || { minRows: 2, maxRows: 10 }"
        :placeholder="getPlaceholder(item)"
      />
      <!-- 单选框 -->
      <el-radio-group v-if="item.type === 'radio'" v-model="formModel[item.value]">
        <el-radio
          v-for="ite in item.option"
          :key="ite.value"
          :label="ite.value"
          :disabled="ite.disabled"
        >
          {{ ite.label }}
        </el-radio>
      </el-radio-group>
      <!-- 多选框 -->
      <el-checkbox-group v-if="item.type === 'checkbox'" v-model="formModel[item.value]">
        <el-checkbox
          v-for="ite in item.option"
          :key="ite.value"
          :label="ite.value"
          :disabled="ite.disabled"
        >
          {{ ite.label }}
        </el-checkbox>
      </el-checkbox-group>
      <!-- 计数器 -->
      <el-input-number
        v-if="item.type === 'inputNumber'"
        v-model="formModel[item.value]"
        size="small"
        :step="item.step || 1"
        :min="item.min"
        :max="item.max"
        :disabled="item.disabled"
        @change="handleEvent(item.event)"
      />
      <!-- 选择器 -->
      <el-select
        v-if="item.type === 'select'"
        v-model="formModel[item.value]"
        :disabled="item.disabled"
        :clearable="item.clearable"
        :filterable="item.filterable"
        :multiple="item.multiple"
        :placeholder="getPlaceholder(item)"
      >
        <el-option
          v-for="ite in item.option"
          :key="ite.value"
          :label="ite.label"
          :value="ite.value"
          :disabled="ite.disabled"
        />
      </el-select>
      <!-- Switch 开关 -->
      <el-switch
        v-if="item.type === 'switch'"
        v-model="formModel[item.value]"
        :active-color="item.activeColor"
        :inactive-color="item.inactiveColor"
        :disabled="item.disabled"
      >
      </el-switch>
      <!-- 日期选择器 -->
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="formModel[item.value]"
        :type="item.dateType"
        :picker-options="item.TimePickerOptions"
        :clearable="item.clearable"
        :disabled="item.disabled"
        :range-separator="item.rangeSeparator"
        :start-placeholder="item.startPlaceHolder"
        :end-placeholder="item.endPlaceHolder"
        :placeholder="getPlaceholder(item)"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    // 表单数据
    formModel: {
      type: Object,
      default: function() {
        return {}
      }
    },
    // 表单field
    formField: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 校验规则
    formRules: {
      type: Object,
      default: function() {
        return {}
      }
    },
    // 表单域标签的宽度
    labelWidth: {
      type: String,
      default: '120px'
    },
    // 是否行内表单
    formInLine: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      required: true
    }
  },
  watch: {
    formModel: {
      handler: function(val) {
        // 将form实例返回到父级
        this.$emit('update:refObj', this.$refs.form)
      },
      deep: true // 深度监听
    }
  },
  methods: {
    getPlaceholder(item) {
      let placeholder
      if (item.type === 'input' || item.type === 'textarea') {
        placeholder = '请输入' + item.label
      } else if (item.type === 'select' || item.type === 'time' || item.type === 'date') {
        placeholder = '请选择' + item.label
      } else {
        placeholder = item.label
      }
      return placeholder
    }
  }
}
</script>

<style lang="scss">
// .el-form--inline .el-form-item {
//     width: 48%;
// }
</style>
