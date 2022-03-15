<template>
  <el-breadcrumb separator="/">
    <transition-group tag="span" name="transition">
      <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      test() {
        console.log(this.$route.matched)
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb {
    height: 64px;
    width: 100%;
    margin: 0;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height: 64px;

    padding-left: 28px;
    background-color: #f9fafe;
    /* 使用固定定位，相对于视图窗口进行定位，top为header的高度，width为100%占满整个el-main区域 */
    position: fixed;
    top: 72px;
    width: 100%;
    z-index: 1;
  }

  .transition-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  .transition-enter-active,
  .transition-leave-active {
    transition: all 2s;
    position: absolute;
  }
  .transition-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
