<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import utils from '../utils'

  export default {
    data() {
      return {
        userInfo: {
          username: 'yqadmin',
          password: '12345678'
        }
      }
    },
    methods: {
      async login() {
        const { data: res } = await utils.request.post(
          'http://10.32.67.95:9982/api/uc/openApi/user/login',
          this.userInfo
        )
        console.log(res)
      }
    }
  }
</script>

<style></style>
