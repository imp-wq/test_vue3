<template>
  <div class="cestc-date-picker">
    <el-date-picker
      v-model="value2"
      v-bind="$attrs"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :type="type"
      :clearable="clearable"
      unlink-panels
      :value-format="valueFormat"
      :popper-class="`cestc-date-picker-popper ${popAddClass}`"
      :disabledDate="disabledDate"
      :shortcuts="type === 'daterange' ? shortcuts : []"
      :default-time="getDefaultTime()"
    />
  </div>
</template>

<script>
  import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'

  export default defineComponent({
    name: 'CestcDatePicker',
    props: {
      recordDate: {
        type: String,
        default: ''
      },
      valueFormat: {
        type: String,
        default: 'YYYY-MM-DD HH:mm:ss'
      },
      type: {
        type: String,
        default: 'date'
      },
      disabledDate: {
        type: Function,
        default: () => {}
      },
      clearable: {
        type: Boolean,
        default: false
      },
      isResetDefaultTime: {
        type: Boolean,
        default: false
      },
      popAddClass: {
        type: String,
        default: 'data'
      }
    },
    setup(props, ctx) {
      const defaultTime1 = new Date(2000, 1, 1, 0, 0, 0)
      const defaultTime2 = [
        new Date(2000, 1, 1, 0, 0, 0),
        new Date(2000, 2, 1, 23, 59, 59)
      ] // '00:00:00', '23:59:59'
      onMounted(() => {
        /* 
      思路：通过document文档，选中日期时间选择器元素，然后创建一个i标签，
            并指定其类名为el-icon-date，并将其插入到日期时间选择器元素中
            然后通过样式的控制调整其到时间选择器尾部的位置
     */
        let keyNode = document.querySelector('.el-date-editor')

        let iNode = document.createElement('i')
        iNode.setAttribute('class', 'el-icon-time') // el-icon-bottom
        if (keyNode) keyNode.appendChild(iNode)
      })
      const state = reactive({
        currentTime: '',
        shortcuts: [
          {
            text: '最近7天',
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            }
          },
          {
            text: '最近30天',
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            }
          },
          {
            text: '最近90天',
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              return [start, end]
            }
          }
        ]
      })
      const value2 = computed({
        get: () => {
          return props.recordDate
        },
        set: (val) => {
          ctx.emit('update:recordDate', val)
        }
      })

      const getDefaultTime = () => {
        if (props.isResetDefaultTime) {
          return new Date()
        } else {
          return props.type === 'datetime'
            ? defaultTime1
            : props.type === 'datetimerange'
            ? defaultTime2
            : new Date()
        }
      }

      return {
        ...toRefs(state),
        value2,
        defaultTime1,
        defaultTime2,
        getDefaultTime
      }
    }
  })
</script>

<style>
  .cestc-date-picker {
  }
  .el-icon-time {
    position: absolute;
    right: 9px;
    top: 9px;
    width: 16px;
    height: 16px;
  }
</style>
