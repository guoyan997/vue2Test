<template>
  <div class="dfm-table">
    <img :src="startImg" style="width: 60px; height: 60px">
    <table class="table" border="1" cellpadding="0" cellspacing="0">
      <thead>
      <tr>
        <th v-for="(thItem, thIndex) in tableObj.tableHeader" :key="'th' + thIndex" :colspan="thItem.colspan">{{thItem.name}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(trItem, trIndex) in tableObj.tableContent" :key="'tr' + trIndex">
        <td v-for="(tdItem, tdIndex) in trItem" :key="'td' + tdIndex" :rowspan="tdItem.rowspan" v-if="typeof tdItem === 'object' " class="aa"><div>{{tdItem.value}}</div></td>
        <td v-for="(td1Item, td1Index) in trItem" :key="'td1' + td1Index" :class="[ typeof td1Item !== 'object' ? 'flag-cell' : 'bb']"><div class="cell-content">
          <img :src="startImg" v-if="td1Item==='1'" />
          <div class="h-line"></div>
          <span>{{td1Index + 1}}</span>
        </div></td>
      </tr>
      <!--<tr><td>A1</td><td>B1</td><td>C1</td><td>E1</td> <td class="flag-cell"><div class="h-line"></div></td><td class="flag-cell"><div class="h-line"></div></td><td class="flag-cell"><div class="h-line"></div></td><td class="flag-cell"><div class="h-line"></div></td><td>1</td><td>2</td><td>3</td><td>4</td></tr>-->
      </tbody>
    </table>
  </div>
</template>

<script>
// import startImg from '../../../static/images/lightStar@2x.png'
export default {
  name: '',
  data () {
    return {
      startImg: '../../../static/images/lightStar@2x.png',
      tableObj: {
        tableHeader: [
          {name: '平台', prop: 'pt', colspan: 1},
          {name: '型号', prop: 'xh', colspan: 1},
          {name: '排放', prop: 'pf', colspan: 1},
          {name: '功率', prop: 'gl', colspan: 1},
          {name: '2018', prop: '2018', colspan: 8}
        ],
        tableContent: [
          // {pt: '平台1', xh: 'A1', pf: '1.5L', gl: '200牛米', 201801: '1', 201802: '0', 201803: '0', 201804: '0', 201805: '0', 201806: '0', 201807: '0', 201808: '0'}
          [{value: '平台1', rowspan: 5}, {value: 'A1', rowspan: 2}, {value: '1.5L', rowspan: 1}, {value: '200牛米', rowspan: 1}, '1', '0', '0', '0', '0', '0', '0', '0'],
          [{value: '1.5L', rowspan: 1}, {value: '200牛米', rowspan: 1}, 0, '0', '0', '0', '0', '0', '0', '0'],
          [{value: 'A2', rowspan: 3}, {value: '1.5L', rowspan: 1}, {value: '200牛米', rowspan: 1}, 0, '0', '0', '0', '0', '0', '0', '0'],
          [{value: '1.5L', rowspan: 1}, {value: '200牛米', rowspan: 1}, 0, '0', '0', '0', '0', '0', '0', '0'],
          [{value: '1.5L', rowspan: 1}, {value: '200牛米', rowspan: 1}, 0, '0', '0', '0', '0', '0', '0', '0']
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dfm-table {
    width: 100%;
    height: 100%;
    background-color: #cccccc;
    .table {
      width: 800px;
      font-family: DINCondensed-Bold;
      font-size: 40px;
      tr {
        color: #fff;
        font-size: 26px;
        text-align: center;
        height: 60px;
        th {
          padding: 0 0;
          height: 80px;
          font-weight: normal;
          color: #8e9abc;
          background: #041f50;
          border-right: 1px solid #4ebbff;
          border-top: 1px solid #4ebbff;
          border-bottom: 1px solid #4ebbff;
          border-left: none;
          &:first-child {
            border-left: none;
          }
          &:last-child {
            border-right: none;
          }
        }
        td {
          word-wrap: break-word;
          color: #4ebbff;
          background-color: #07235a;
          font-family: DINCondensed-Bold;
          &:first-child {
            font-family: PingFangSC-Regular;
            color: #fff;
          }
          .star {
            width: 30px;
            height: 30px;
          }
        }
        .flag-cell {
          width: 20px;
          border-left: none;
          border-right: none;
          border-top: none;
          .cell-content {
            width: 100%;
            height: 100%;
            position: relative;
            .h-line {
              padding: 0 0;
              position: absolute;
              left: 0;
              top: 50%;
              width: 100%;
              height: 2px;
              background-color: red;
            }
            img {
              width: 40px;
              height: 40px;
              z-index: 999;
            }
          }
        }
      }
    }
  }
</style>
