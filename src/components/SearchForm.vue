<template>
  <div class="SearchForm-container">
    <el-form inline>
      <el-form-item> <el-cascader></el-cascader></el-form-item>
      <el-form-item> <el-cascader></el-cascader></el-form-item>
      <el-form-item>3</el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {}
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
  }
</style>
