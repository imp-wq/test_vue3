<template>
  <div class="SearchForm-container">
    <el-form>
      <!-- 两个选择框 -->
      <el-form-item label="社区网格">
        <el-cascader
          v-model="deptId"
          :options="gridData"
          :props="{ value: 'id', label: 'name' }"
        />
      </el-form-item>
      <el-form-item label="选择日期">
        <el-date-picker
          type="date"
          placeholder="请选择"
          v-model="date"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
    </el-form>
    <!-- 两个按钮 -->
    <div class="button">
      <el-button type="primary" @click="emitSearch">查询</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
  // import { gridData } from '../mock.js'
  import DataAnalysis from './DataAnalysis.vue'
  import moment from 'moment'

  export default {
    components: { DataAnalysis },
    props: ['gridData'],
    emit: ['search'],
    data() {
      return {
        // gridOptions: gridData,
        // 选择的日期和需要查询的id
        date: moment().format('YYYY-MM-DD'),
        deptId: '1545'
      }
    },
    methods: {
      reset() {
        this.date = ''
        this.deptId = []
      },
      emitSearch() {
        this.$emit('search', { date: this.date, deptId: this.deptId })
      }
    }
  }
</script>

<style scoped>
  .SearchForm-container {
    padding: 20px;
    background-color: white;
    display: flex;
    min-width: calc(1024px - 255px - 20px - 32px);
    border-top: 1px solid blue;
  }
  .el-form {
    display: block;
    flex-wrap: wrap;
  }
  .el-form-item {
    margin-right: 15px;
    margin-bottom: 0;
  }
  .button {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: center;
  }
  .el-button {
    width: 80px;
  }

  .el-cascader {
    width: 306px;
  }
</style>
