<template>
  <el-menu default-active="" :router="true">
    <!-- <el-menu-item index="login">Layout组件</el-menu-item> -->
    <el-menu-item index="dashboard">总体数据分析</el-menu-item>
    <el-menu-item index="3">发请求</el-menu-item>
    <el-menu-item index="Echart">Echart</el-menu-item>
    <el-menu-item index="breadcrumb">breakcrumb</el-menu-item>
    <el-menu-item index="login">测试组件</el-menu-item>
    <el-menu-item index="search-form">查询表格</el-menu-item>
  </el-menu>
</template>

<script>
  export default {}
</script>

<style scoped>
  .el-menu {
  }
</style>
