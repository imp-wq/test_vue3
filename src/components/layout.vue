<template>
  <el-container>
    <el-header height="100px">
      <!-- 头部 -->
      <h2>Layout组件</h2>
    </el-header>
    <el-container>
      <el-aside>
        <!-- 侧边栏 -->
        <Asidebar></Asidebar>
      </el-aside>
      <el-main>
        <!-- main区域 -->
        <router-view v-slot="{ Component }">
          <Breadcrumb></Breadcrumb>
          <keep-alive>
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Asidebar from './asidebar.vue'
  import Breadcrumb from './Breadcrumb.vue'

  export default {
    components: {
      Asidebar,
      Breadcrumb
    }
  }
</script>

<style scoped>
  .el-header {
    height: 72px;
    /* position: fixed; */
  }

  .el-container {
    height: 100%;
    border: 1px solid #eee;
    overflow: hidden;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
  }
  .el-aside {
    width: 255px;
    background-color: #d3dce6;
    overflow: auto;
    position: fixed;
    top: 74px;
    bottom: 0;
    position: fixed;
  }

  .el-main {
    width: calc(100% - 255px);
    padding: 64px 0 0 0;
    margin-left: 255px;
    overflow: auto;
    background-color: #e9eef3;
  }

  .fade-leave-active {
    transition-property: all;
    transition-duration: 0.5s;
  }
  .fade-enter-active {
    transition-property: all;
    transition-duration: 0.5s;
  }
  .fade-leave-to {
    opacity: 0;
    transform: translate(30px);
  }
  .fade-enter-from {
    opacity: 0;
  }
</style>
