<template>
  <el-container class="layout-container">
    <el-header height="100px">
      <!-- 头部 -->
      <h2>Layout组件</h2>
    </el-header>
    <el-container>
      <el-aside>
        <!-- 侧边栏 -->
        <Asidebar></Asidebar>
      </el-aside>
      <el-container>
        <el-main>
          <!-- main区域 -->
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import Asidebar from './asidebar.vue'
  export default {
    components: {
      Asidebar
    }
  }
</script>

<style scoped>
  .layout-container {
    height: 100%;
    border: 1px solid #eee;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
  }
  .el-aside {
    background-color: #d3dce6;
  }

  .el-main {
    background-color: #e9eef3;
  }

  .fade-leave-active {
    transition-property: all;
    transition-duration: 1s;
  }
  .fade-enter-active {
    transition-property: all;
    transition-duration: 1s;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translate(30px);
  }
  .fade-enter-from {
    opacity: 0;
  }
</style>
