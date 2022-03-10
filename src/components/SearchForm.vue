<template>
  <div class="SearchForm-container">
    <el-form inline>
      <el-form-item label="社区网格">
        <el-cascader
          :options="gridOptions"
          :props="{ label: 'name', value: 'id' }"
        ></el-cascader
      ></el-form-item>
      <el-form-item label="选择日期"> <el-cascader></el-cascader></el-form-item>
      <el-form-item>3</el-form-item>
    </el-form>
  </div>
</template>

<script>
  import utils from '../utils'

  export default {
    data() {
      return {
        gridOption: []
      }
    },
    methods: {
      initGrid() {
        utils.request.get(
          'http://10.32.67.95:9982/cityie/system/fx/org/listTree',
        )
      }
    }
  }
</script>

<style>
  .SearchForm-container {
    padding: 20px;
    background-color: white;
  }
  .el-form {
    display: flex;
    align-items: center;
    line-height: 52px;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: calc(50% - 15px - 15px);
    padding-right: 15px;
    padding-left: 0;
    margin: 0;
  }
</style>
