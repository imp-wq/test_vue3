<template>
  <div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    props: {
      options: {
        type: Object,
        default() {
          return { title: '图表标题', xAxis: [], name: '数据', chartData: [] }
        }
      }
    },
    data() {
      return {
        chart: undefined,
        option: {
          title: {
            text: this.options.title
          },
          tooltip: {},
          xAxis: {
            data: this.options.xAxis
          },
          yAxis: {},
          series: [
            {
              name: this.options.name,
              type: 'bar',
              data: this.options.chartData
            }
          ]
        }
      }
    },
    methods: {
      init() {
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(this.option)
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped>
  .chart {
    width: 300px;
    height: 300px;
  }
</style>
