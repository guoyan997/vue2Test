<template>
  <div>
    <div class='chart-div' id='barChart'>
    </div>
    <div>
      <button @click="changeChart">改变数据</button>
      <div>{{code}}</div>
      <button @click="changeTest">改变测试</button>
    </div>
    <div class="chart-div">
      <MCBar></MCBar>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('bar')
export default {
  name: 'BarChart',
  data () {
    return {
      myChart: {}
    }
  },
  mounted () {
    this.setEchart()
  },
  updated () {
    debugger
    if (!this.myChart) {
      this.setEchart()
    }
    this.chartChange()
  },
  computed: {
    code () {
      return this.$store.state.bar.dataVal.code
    },
    ...mapState({
      origin: 'dataVal'
    }),
    opt () {
      /**
      let obj = {
        grid: {
          show: false,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          show: false,
          type: 'value',
          max: 100
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            barWidth: 600,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [30]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [70]
          }
        ]
      }**/
      let opt = {
        series: [{
          type: 'liquidFill',
          data: [0.6]
        }]
      }
      return opt
    }
  },
  methods: {
    setEchart () {
      let dom = document.getElementById('barChart')
      this.myChart = this.$echarts.init(dom)
      this.myChart.setOption(this.opt)
    },
    chartChange () {
      debugger
      this.myChart.setOption(this.opt)
    },
    ...mapActions({
      changeChart: 'changeChart',
      changeTest: 'changeTest'
    })
  }
}
</script>
<style scoped lang='scss'>
@import './Bar.scss';

</style>
