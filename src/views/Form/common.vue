<template>
  <div class="common-form-wrapper">
    <h3>Common Form</h3>
    <CommonForm
      class="form-content"
      :ref-obj.sync="formRef"
      :formModel="formModel"
      :formField="formField"
      :formRules="formRules"
      :labelWidth="labelWidth"
      :formInLine="formInLine"
    ></CommonForm>
  </div>
</template>

<script>
import CommonForm from '@/components/CommonForm'

export default {
  name: 'CommonFormPage',
  data() {
    return {
      formRef: 'form',
      formModel: {
        name: '',
        desc: '',
        resource: 1,
        type: [],
        stepNum: 1,
        region: '',
        delivery: false,
        date1: '',
        date2: '',
        date3: ''
      },
      formField: [
        {
          value: 'name',
          label: '活动名称',
          type: 'input',
          placeholder: '请输入活动名称',
          show: true,
          disabled: false,
          clearable: true
        },
        {
          value: 'desc',
          label: '活动形式',
          type: 'textarea',
          placeholder: '请输入活动形式',
          show: true,
          disabled: false,
          clearable: true,
          autosize: {
            minRows: 2,
            maxRows: 5
          }
        },
        {
          value: 'resource',
          label: '特殊资源',
          type: 'radio',
          placeholder: '请选择活动资源',
          option: [
            {
              label: '线上品牌商赞助',
              value: 1,
              disabled: false
            },
            {
              label: '线下场地免费',
              value: 2,
              disabled: false
            }
          ]
        },
        {
          value: 'type',
          label: '活动性质',
          type: 'checkbox',
          placeholder: '请选择活动性质',
          option: [
            {
              label: '美食/餐厅线上活动',
              value: 1,
              disabled: false
            },
            {
              label: '地推活动',
              value: 2,
              disabled: false
            },
            {
              label: '线下主题活动',
              value: 3,
              disabled: false
            },
            {
              label: '单纯品牌曝光',
              value: 4,
              disabled: true
            }
          ]
        },
        {
          value: 'stepNum',
          label: '步数',
          type: 'inputNumber',
          placeholder: '请输入步数',
          step: 5,
          min: 1,
          max: 20,
          disabled: true
        },
        {
          value: 'region',
          label: '活动区域',
          type: 'select',
          placeholder: '请选择活动区域',
          disabled: false,
          clearable: true,
          filterable: true,
          multiple: false,
          option: [
            {
              value: 'beijing',
              label: '北京',
              disabled: false
            },
            {
              value: 'shanghai',
              label: '上海',
              disabled: false
            },
            {
              value: 'guangzhou',
              label: '广州',
              disabled: true
            }
          ]
        },
        {
          value: 'delivery',
          label: '即时配送',
          type: 'switch',
          activeColor: '#13ce66',
          inactiveColor: '#ff4949',
          disabled: false
        },
        {
          value: 'date1',
          label: '活动日期1',
          type: 'date',
          dateType: 'date',
          TimePickerOptions: [],
          placeholder: '请选择活动日期',
          disabled: false,
          clearable: true
        },
        {
          value: 'date2',
          label: '活动日期2',
          type: 'date',
          dateType: 'datetime',
          TimePickerOptions: [],
          placeholder: '请选择活动日期',
          disabled: false,
          clearable: true
        },
        {
          value: 'date3',
          label: '活动日期3',
          type: 'date',
          dateType: 'daterange',
          TimePickerOptions: [],
          rangeSeparator: '至',
          startPlaceHolder: '开始时间',
          endPlaceHolder: '结束时间',
          placeholder: '请选择活动日期',
          disabled: false,
          clearable: true
        }
      ],
      formRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }]
      },
      labelWidth: '160px',
      formInLine: false
    }
  },
  watch: {
    formModel: {
      handler: function(val) {
        // 将form实例返回到父级
        console.log('formModel: ')
        console.log(val)
      },
      deep: true // 深度监听
    }
  },
  components: {
    CommonForm
  }
}
</script>

<style lang="scss" scoped>
.common-form-wrapper {
  h3 {
    text-align: center;
  }

  .form-content {
    width: 72%;
    box-sizing: border-box;
    border: 1px dotted #ccc;
    margin: 20px auto 0;
    padding: 20px 16px;
  }
}
</style>
