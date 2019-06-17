<template>
  <div class="container">
    <div id="left-div">
      <div id="left-div1">
        <table>
          <tr class="multi-header">
            <th>{{tableHeader[0].firstCol.lable}}</th>
          </tr>
        </table>
      </div>
      <!--这个是第一列，固定列-->
      <div id="left-div2" ref="left-div2">
        <table id="left-table2">
          <!--<tr v-for="(fCol, fc) in tableData" :key="fc"><td>{{fCol[tableHeader[0].firstCol.prop]}}</td></tr>-->
          <tr v-for="(fCol, fc) in tableData" :key="fc">
            <td>
              <div @click.stop="openTree(fCol)">
                  <span>
                    <i class="el-icon-minus bank-icon icon-style" v-if="!fCol.hasChild && fCol.level"
                       v-for="l in fCol.level" :key="l"></i>
                    <i class="el-icon-arrow-down icon-style" v-if="fCol.hasChild && !fCol.hasOpen"></i>
                    <i class="el-icon-arrow-up icon-style" v-if="fCol.hasChild && fCol.hasOpen"></i>
                  </span>
                <span class="first-lable" @click="showDetailChart(fCol)">{{ fCol[tableHeader[0].firstCol.prop] }}</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="right-div">
      <div id="right-div1" ref="right-div1">
        <table id="right-table1">
          <tr>
            <th colspan="2" v-for="(first, f) in tableHeader[1].firstHeaderRow" :key="f">{{first}}</th>
          </tr>
          <tr>
            <th v-for="(second, s) in tableHeader[2].secondHeaderRow" :key="s">{{second.label}}</th>
          </tr>
        </table>
      </div>
      <div id="right-div2" ref="right-div2">
        <table id="right-table2">
          <tr v-for="(item, index) in tableData" :key="index">
            <td v-for="(header, h) in tableHeader[2].secondHeaderRow" :key="h" :class="[showRed(item[header.prop]) ? 'redColor' : '']">{{item[header.prop]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tableHeader: [
        {firstCol: {lable: '区域', prop: 'qy'}},
        {firstHeaderRow: ['工业总产值', '工业增加值']},
        {secondHeaderRow: [
          {label: '金额', prop: 'je_ggzcz'}, {label: '同比', prop: 'tb_ggzcz'},
          {label: '金额', prop: 'je_ggzjz'}, {label: '同比', prop: 'tb_ggzjz'}
        ]}
      ],
      tableData: [
        {qy: '湖北省1', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省2', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省3', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省4', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省5', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省6', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省7', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0},
        {qy: '湖北省8', je_ggzcz: '1200', tb_ggzcz: '20.5', 'je_ggzjz': '1300', tb_ggzjz: '-13.5%', hasChild: true, hasOpen: false, level: 0}
      ]
    }
  },
  methods: {
    scrollTable () {
      let top = document.getElementById('right-div2').scrollTop
      let left = document.getElementById('right-div2').scrollLeft
      document.getElementById('left-div2').scrollTop = top
      document.getElementById('right-div1').scrollLeft = left
    },
    showRed (val) {
      val = val + ''
      if (val && val.indexOf('-') > -1) {
        return true
      } else {
        return false
      }
    },
    showDetailChart (row) {
      alert(row)
    },
    openTree (row) {
      alert('1111')
    }
  },
  mounted () {
    document.getElementById('right-div2').addEventListener('scroll', () => {
      // let top = document.getElementById('right-div2').scrollTop
      // let left = document.getElementById('right-div2').scrollLeft
      // document.getElementById('left-div2').scrollTop = top
      // document.getElementById('right-div1').scrollLeft = left
      this.scrollTable()
    })
  },
  beforeDestroy () {
    document.getElementById('right-div2').removeEventListener('scroll', () => {
      this.scrollTable()
    })
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin:0;
    padding: 0;
  }
  table{
    width:100%;
    text-align:center;
    border-collapse:collapse;
    border-spacing:0;
  }
  table td{
    word-break: break-all;
    word-wrap:break-word;
  }
  .container{
    width: 600px;
    height: 500px;
    padding: 0;
    box-sizing: border-box;
  }
  // 这里控制第一列的样式
  #left-div{
    width:180px;
    float: left;
  }
  #left-div1{
    width: 100%;
  }
  #left-div2{
    width: 100%;
    height: 250px;
    overflow: hidden;
    background-color: #F5F5F5;
  }
  #left-table2{
    margin-bottom: 4px;
  }
  #right-div{
    float: left;
    width: 240px;
  }
  #right-div1{
    width: 100%;
    overflow: hidden;
  }
  #right-div2{
    width: 100%;
    height: 250px;
    overflow: auto;
  }
  #right-table1{
    width: 320px;
  }
  #right-table2{
    width: 320px;
    overflow: auto;
  }
  th,td{
    height: 50px;
    width: 80px;
    line-height: 50px;
    overflow: hidden;
    text-align: center;
  }
  th{
    color: #1E304F;
    background-color: #F3F8FF;
  }
  td{
    color: #384967;
  }
  tr:nth-of-type(odd){
    background: #F5F5F5;
  }
  .multi-header {
    height: 100px;
    width: 80px;
    line-height: 100px;
    background-color: #F5F5F5!important;
  }
  .redColor {
    color: #ff0000;
  }
  /*可以美化一下滚动条*/
  #right-div2::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;
    height: 4px;
  }
  #right-div2::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  #right-div2::-webkit-scrollbar-track {/*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
</style>
