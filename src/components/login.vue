<template>
  <button @click="login">获取数据</button>
  <button @click="getUserInfo">获取用户信息</button>
  <table>
    <thead>
      <th>
        <td>id</td>
      </th>
      <th>
        <td>用户名</td>
      </th>
    </thead>
    <tbody>
        <tr>
            <td>{{userInfo.id}}</td>
            <td>{{userInfo.name}}</td>
        </tr>
    </tbody>
  </table>
  <hr>

  <div>
    <input type="text" v-model.number="pageNum">  
    <button @click="queryFiveMsg">获得五条信息</button>
    <p v-for="item in msgList" :key=item.msgId>{{item.msgId}}:{{item.text}}</p>
    </div>
    <hr>

    <input type="text" v-model.number="NProgress_set">
    <button @click="start">start</button>
    <button @click="set">set</button>
    <button @click="done">done</button>

</template>

<script>
import utils from "../utils";
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'

export default {
  data() {
    return {
      baseURL: "http://10.255.144.70/api/uc/",
      pageNum:0,
      NProgress_set:0,
      userData: {
        loginAccount: "szjsc",
        loginPwd: "111111",
      },
      userInfo: {
        id: "",
        name: "",
        workadm: "",
        workrec: "",
      },
      msgList:[]
    }
  },
  methods: {
    login() {
      utils.request
        .post(this.baseURL + "/ioc/user/login", this.userData)
        .then((response) => {
          const res = response.data;
          console.log(res);
          // 保存token，在vuex中保存token，在cookie中保存token，在本地存储中保存token
          utils.setToken("token", res.data.token);
          // localStorage.setItem('token', res.data.token)

          // 重定向到'/'路径,layout组件
          // this.$router.push({ path: this.redirect || '/' })
          // 保存用户信息到sessionStorage
          // sessionStorage.setItem('user')

          console.log(window.postMessage);
        });
    },
    async getUserInfo() {
      const { data: res } = await utils.request.post(
        this.baseURL + "/ioc/user/info",
        {
          // token: localStorage.getItem('token'),
        },
        {
          headers: {
            // 需要设置请求头，实际开发最好使用拦截器，放在axios的配置中
            token: utils.getToken("token"),
          },
        }
      );
      console.log(res);
      this.userInfo.id = res.data.userId
      this.userInfo.name = res.data.userName
    },
    async queryFiveMsg() { 
      this.msgList=[] 
      const {data:res}=await utils.request.post('http://10.255.144.70/api/msg_service/msg/queryNewFiveMsgList',{
          senderId:this.userInfo.id,
          readFlag:2,
          terminalCodeList: ['PC'],
          pageNum: this.pageNum,
          pageSize: 5
      },
      {
        headers:{
          token: utils.getToken('token')
        }
      })
      console.log(res)
      this.msgList=res.data.list
      console.log(this.msgList)
    },
    start() {
      NProgress.start()
    },
    set() {
      NProgress.set(this.NProgress_set)
    },
    done() {
      NProgress.done()
    }
  },
};
</script>
    
<style scoped>


table {
  border: 1px solid #000;
}
</style>
