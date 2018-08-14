<template>
  <div class="main_content" id="main_content">
    <div id="bedroom"></div>
    <button @click="changeData">修改数据</button>
    <div>
      <ul>
         <li v-for="(item, index) in testList" :key="index">{{item}}</li>
      </ul>
      <button @click="changeList">修改列表</button>
    </div>
    <div class="test">
      123
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('line')
export default {
  data () {
    return {
      chart: null,
      opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好']
    }
  },
  computed: {
    ...mapState(['opinionData', 'testList']),
    opt () {
      console.log('aaaaa')
      const obj = {
        title: {
          text: '寝室学习氛围情况调查',
          left: 'center',
          top: 10,
          textStyle: {
            fontSize: 24,
            fontFamily: 'Helvetica',
            fontWeight: 400
          }
        },
        tooltip: {
          trigger: 'item',
          formatte: '{b}: {c} ({d}%)'
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {}
          },
          right: 15,
          top: 10
        },
        legend: {
          orient: 'vertical',
          left: 5,
          top: 10,
          data: this.opinion
        },
        series: [
          {
            name: '寝室学习氛围',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '24',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      return obj
    }
  },

  methods: {
    drawPie (id) {
      this.chartDiv = document.getElementById(id)
      this.chart = this.$echarts.init(this.chartDiv)
      this.chart.setOption(this.opt)
      // window.addEventListener('resize', this.chart.resize)
      // 用于使chart自适应高度和宽度
      window.onresize = function () {
        // 重置容器高宽
        this.resizeWorldMapContainer()
        this.chart.resize()
      }.bind(this)
    },
    resizeWorldMapContainer () {
      //    this.chartDiv.style.width = window.innerWidth + 'px'
      //    this.chartDiv.style.height = window.innerWidth + 'px'
      // debugger
      this.chartDiv.style.width = document.getElementById('main_content').style.width + 'px'
      this.chartDiv.style.height = document.getElementById('main_content').style.height + 'px'
      console.log(this.chartDiv.style.width + this.chartDiv.style.height)
    },
    ...mapActions({
      changeData: 'changeData',
      changeList: 'changeList'
    })
  },
  mounted () {
    this.$nextTick(function () {
      this.drawPie('bedroom')
    })
  },
  updated () {
    /**
     * 因为界面中引用了testList 这个数组，所以它变化后，会执行updated生命周期方法，进行更新
     * 界面中没有引用opinionData， 它只是在script代码中使用到了，所以它的变化不会触发updated执行，要想对应进行更新，
     * 有两种方式
     * 1、<div style="display: none">{{opinionData}}</div>
     * 2, 使用watch进行监听，并在回调函数中触发相应的更新方法
     */
    if (this.chart) {
      this.chart.setOption(this.opt)
    } else {
      this.chart = this.$echarts.init(document.getElementById('bedroom'))
      this.chart.setOption(this.opt)
    }
  },
  watch: {
    // 观察监听数据的变化，当数据变化，就执行回调方法handler
    opinionData: {
      // 注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler (curVal, oldVal) {
        debugger
        this.chart = this.$echarts.init(document.getElementById('bedroom'))
        this.chart.setOption(this.opt)
      },
      deep: true
    },
    testList: {
      // 注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
      handler (curVal, oldVal) {
        debugger
        console.log('ccccccccccc')
      },
      deep: true
    }
  }
}
</script>
<style scoped>
  .main_content {
    border: solid #ff0000 1px;
    width: 10rem;
    height: 8rem;
  }
  #bedroom {
    /*position: relative;*/
    /*left: 50%;*/
    /*margin-left: -400px;*/
    /*margin-bottom: 70px;*/
    width: 100%;
    height: 60%;
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
    background-color: aqua;
  }
.test {
  width: 750px;
  height: 600px;
  background-color: #FFF000;
}
</style>
