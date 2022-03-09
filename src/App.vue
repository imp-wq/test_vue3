<template>
  <el-config-provider>
    <slot name="app">
      <!-- <Login></Login> -->
      <Layout></Layout>
    </slot>
  </el-config-provider>
</template>

<script>
  import Login from './components/login.vue'
  import Layout from './components/layout.vue'

  export default {
    components: {
      Login,
      Layout,
    },
  }
</script>

<style>
  .el-container {
    height: 100%;
  }
</style>
