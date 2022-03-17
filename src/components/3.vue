<template>
  <div>
    <button @click="login">登录</button>
    <button @click="initGrid">请求列表信息</button>
    <br />
    <input type="text" v-model.number="orgId" />
    <button @click="resultList">查询疫情数据</button>
    <button>查询人数</button>
    <br />
    <CompositionAPI></CompositionAPI>
    <br />
    {{ test }}
    <Test v-model="test" />
    <super-map />
  </div>
</template>

<script>
  import utils from '../utils'
  import Test from './test.vue'
  import CompositionAPI from './CompositionAPI.vue'
  import SuperMap from './SuperMap.vue'

  export default {
    components: { Test, CompositionAPI, SuperMap },
    data() {
      return {
        test: '',
        userInfo: {
          username: 'yqadmin',
          password: '12345678'
        },
        orgId: 1550
      }
    },
    methods: {
      async login() {
        const { data: res } = await utils.request.post(
          'http://10.32.67.95:9982/api/uc/openApi/user/login',
          this.userInfo
        )
        console.log(res)
        // 存储登录信息
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('orgId', res.data.orgRoleList[0].org.id)
      },
      async initGrid() {
        const { data: res } = await utils.request.get(
          'http://10.32.67.95:9982/cityie/system/fx/org/listTree',
          {
            params: {
              id: localStorage.getItem('orgId'),
              level: 6
            }
          }
        )
        console.log(res)
      },
      async resultList() {
        const { data: res } = await utils.request.get(
          'http://10.32.67.95:9982/cityie/epidemic/analysis/dashboard/countEachStateNum',
          {
            params: {
              orgId: this.orgId,
              recordDate: '2022-03-11'
            }
          }
        )
        console.log(res)
        const test = res.data.analysisVOList.map((element) => {
          return {
            title: element.statisticsItem,
            num: element.num,
            add: element.compare
          }
        })
      }
    }
  }
</script>

<style></style>
