<template>
  <div class="table-content">
    <vue-seamless-scroll :data="listData" :class-option="classOption" class="warp">
      <ul class="item">
        <li v-for="(item, index) in listData" :key="index"><span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第二行无缝滚动第二行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第三行无缝滚动第三行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第四行无缝滚动第四行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第五行无缝滚动第五行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第六行无缝滚动第六行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第七行无缝滚动第七行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第八行无缝滚动第八行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第九行无缝滚动第九行',
        'date': '2017-12-16'
      }]
    }
  },
  computed: {
    classOption: function () {
      return {
        step: 0.1, // 数值越大速度滚动越快
        limitMoveNum: 5, // 开始无缝滚动的数据量  //this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .table-content {
    width: 100%;
    height: 100%;
    .warp {
      height: 260px;
      width: 360px;
      overflow: hidden;
    }
    .warp ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
    }
    .warp li {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
}

</style>
