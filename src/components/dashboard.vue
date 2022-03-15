<template>
  <div class="dashboard-container">
    <search-form :gridData="gridOptions" @search="resultList" />
    <data-analysis :stateInfo="stateInfo" />

    <!-- 图表区域 -->
    <div class="chartsArea">
      <echart :options="chartOption" />
      <echart :options="chartOption" />
    </div>
  </div>
</template>

<script>
  import utils from '../utils'
  import SearchForm from './SearchForm.vue'
  import DataAnalysis from './DataAnalysis.vue'
  import Echart from './Echart.vue'

  export default {
    components: { SearchForm, DataAnalysis, Echart },
    data() {
      return {
        gridOptions: [],
        stateInfo: {},
        chartOption: {
          title: 'ECharts 入门示例',
          xAxis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          name: '销量',
          chartData: [5, 20, 36, 10, 10, 20]
        }
      }
    },
    methods: {
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
        this.gridOptions = res.data
      },
      async resultList(payload) {
        console.log(payload)
        const { data: res } = await utils.request.get(
          'http://10.32.67.95:9982/cityie/epidemic/analysis/dashboard/countEachStateNum',
          {
            params: {
              orgId: payload.deptId[payload.deptId.length - 1],
              recordDate: payload.date
            }
          }
        )
        this.stateInfo = res.data
      }
    },
    created() {
      this.initGrid()
    }
  }
</script>

<style scoped>
  .dashboard-container {
    padding: 16px 20px 0 20px;
    height: 100px;
  }
  .chartsArea {
    display: flex;
    background-color: white;
  }
</style>
