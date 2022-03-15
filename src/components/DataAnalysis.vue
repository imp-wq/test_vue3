<template>
  <div class="data-analysis-container">
    <!-- 标题部分 -->
    <div class="head-row">
      <dl class="title">
        <dt>
          <el-icon><location /></el-icon>{{ stateInfo.deptNames }}
        </dt>
        <dd>数据更新至{{ stateInfo.deadlineTime || '没收到数据' }}</dd>
      </dl>
    </div>
    <div class="population">
      <span>实有人口总数</span>
      <span style="font-weight: bold; margin-left: 16px">
        {{ stateInfo.num || '没收到数据' }}
      </span>
    </div>

    <!-- 数据列表部分 -->
    <ul class="data-list">
      <li v-for="item in listData" :key="item.title" class="list-item">
        <div class="title">{{ item.title }}</div>
        <div class="content">
          <span>{{ item.num }}</span>
          <span> <span class="yesterday">较昨日</span>{{ item.add }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Location } from '@element-plus/icons-vue'

  export default {
    components: { Location },
    props: ['stateInfo'],
    data() {
      return {}
    },
    computed: {
      listData() {
        if (!this.stateInfo.analysisVOList) {
          console.log('没有数据')
          return []
        }
        console.log(this.stateInfo)
        return this.stateInfo.analysisVOList.map((element) => {
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

<style scoped>
  .data-analysis-container {
    margin: 16px 0 20px 0;
    padding: 16px 20px;
    background-color: white;
  }
  .head-row .title dd {
    margin-left: 0;
    color: #8a8a8a;
  }
  .population {
    font-size: 14px;
  }
  .data-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 18px;
    padding: 0;
    font-family: pingFangSC-Medium;
    text-align: center;
  }
  .data-list .list-item {
    flex: 1 225px;
    height: 130px;
    display: flex;
    flex-direction: column;
  }
  .data-list .list-item .title {
    background-color: #f9fafe;
    height: 40px;
    line-height: 40px;
  }
  .data-list .list-item .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: orange;
  }
  .data-list .list-item .content .yesterday {
    color: #cbcccb;
    font-size: 14px;
  }
</style>
