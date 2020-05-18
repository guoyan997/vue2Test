<template>
    <div class="province-map-content" id="provinceContent">
      <div class="province-map-container" id="provinceContainer">
      </div>
      <div class="option-btn">
        <button @click="chooseArea">选择西南大区</button>
        <button @click="chooseProvince">选择新疆</button>
        <button @click="chooseCity">选择佛山</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'echarts/map/js/province/guangdong.js' // 引入广东地图
import 'echarts/map/js/china' // 引入全国地图

export default {
  name: 'ProvinceMap',
  data () {
    return {
      chart: null,
      opt: {
        title: {
          text: '地图操作',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['iphoneX']
        },
        dataRange: {
          min: 0,
          max: 2500,
          x: 'left',
          y: 'bottom',
          text: ['max', 'min'],
          calculable: true
        },
        roamController: {
          show: true,
          x: 'right',
          mapTypeControl: {
            'china': true
          }
        },
        series: [
          {
            name: 'iphoneX',
            type: 'map',
            mapType: 'china',
            aspectScale: 0.9,
            zoom: 1.1,
            selectedMode: 'single',
            itemStyle: {
              normal: {
                label: {show: true},
                areaColor: 'rgba(255,255,255,0.5)',
                color: '#000000',
                shadowBlur: 200,
                borderColor: '#999', // 图形的描边颜色
                borderWidth: 1, // 描边线宽。为 0 时无描边
                borderType: 'solid',
                shadowColor: '#e0e0e0',
                opacity: 1
              },
              emphasis: {
                label: {show: true},
                areaColor: '#3be2fb',
                color: '#000000',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'red'
                },
                formatter: function (params) {
                  return params.name + '\n' + params.value
                }
              },
              emphasis: {
                textStyle: {
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'green'
                },
                formatter: function (params) {
                  return params.name + '\n' + params.value
                }
              }
            },
            data: [
              {name: '新疆', value: 130},
              {name: '西藏', value: 50},
              {name: '青海', value: 31}
            ]
          }
        ]
      },
      areaChildrenList: [
        {name: '新疆', value: 130},
        {name: '西藏', value: 50},
        {name: '青海', value: 31}
      ],
      gdCityList: [
        {name: '珠海市', value: 130},
        {name: '广州市', value: 50},
        {name: '中山市', value: 31},
        {name: '佛山市', value: 55},
        {name: '清远市', value: 90},
        {name: '梅州市', value: 10},
        {name: '汕头市', value: 70},
        {name: '东莞市', value: 50},
        {name: '惠州市', value: 30},
        {name: '深圳市', value: 50}
      ]
    }
  },
  computed: {
    // opt () {
    //   const obj = {
    //
    //   }
    //   return obj
    // }
  },
  methods: {
    drawPie (id, list = []) {
      if (this.chart) {
        this.chart.setOption(this.opt)
      } else {
        this.chartDiv = document.getElementById(id)
        this.chart = this.$echarts.init(this.chartDiv)
        /**
         * 获取省份的json后，用于地图展示
         */
        this.chart.setOption(this.opt)
        this.chart.on('click', (params) => {
          // 当地图的某一块被点击时
          this.clickOneMapBlock(params)
        })
      }

      // // 用于使chart自适应高度和宽度
      // window.onresize = function () {
      //   // 重置容器高宽
      //   this.resizeWorldMapContainer()
      //   this.chart.resize()
      // }.bind(this)
    },
    // resizeWorldMapContainer () {
    //   this.chartDiv.style.width = document.getElementById('provinceContent').style.width + 'px'
    //   this.chartDiv.style.height = document.getElementById('provinceContent').style.height + 'px'
    //   console.log(this.chartDiv.style.width + this.chartDiv.style.height)
    // }
    chooseArea () {
      this.opt.series[0].mapType = 'china'
      this.opt.series[0].data = this.areaChildrenList
      this.chart.setOption(this.opt)
      // 找到一个大区在
      this.chart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0})
      this.chart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 1})
      this.chart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 2})
    },
    chooseProvince () {
      this.opt.series[0].mapType = 'china'
      this.opt.series[0].data = this.areaChildrenList
      this.chart.setOption(this.opt)
      // 找到需要高亮的省的dataIndex,然后高亮
      const dataIndex = 0
      this.chart.dispatchAction({type: 'highlight', dataIndex: dataIndex})
    },
    chooseCity () {
      // 当选择佛山时，要先切换为广东省地图，然后佛山再高亮
      this.opt.series[0].mapType = '广东'
      this.opt.series[0].data = this.gdCityList
      this.chart.setOption(this.opt)
      let dataIndex = 0
      this.gdCityList.map((item, index) => {
        if (item.name.indexOf('佛山') > -1) {
          dataIndex = index
        }
      })
      this.chart.dispatchAction({type: 'highlight', dataIndex: dataIndex})
    },
    clickOneMapBlock (params) {
      // 获取点击的数据dataIndex
      const dataIndex = params.dataIndex
      if (dataIndex !== -1) {
        // 首先取消其他已经高亮的区域，保持点击的区域高亮
        this.drawPie('provinceContainer')
        this.chart.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: dataIndex})
      }
    }
  },
  mounted () {
    axios.get('../static/province.json').then((resp) => {
      const provinceMapList = resp.data
      this.drawPie('provinceContainer', provinceMapList)
      console.log(provinceMapList)
    })
  }
}
</script>

<style scoped lang="scss">
.province-map-content {
  width: 1000px;
  height: 1000px;
  .province-map-container {
    width: 100%;
    height: 900px;
  }

}
</style>
