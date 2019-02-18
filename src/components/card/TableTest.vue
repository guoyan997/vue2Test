<template>
<div>
  <!--固定A1-->
  <table border="1" cellspacing="0" class="fixedA1" v-show="fixedA1">
    <thead>
    <tr>
      <th v-for="item in th" v-if="$index==0" :key="item">{{item.key}}</th>
    </tr>
    </thead>
  </table>
  <!--固定列头-->
  <table border="1" cellspacing="0" class="fixedCol" v-show="fixedCol">
    <thead>
    <tr>
      <th v-for="item in th" v-if="$index==0" :key="item">{{item.key}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tl" :key="item">
      <td  v-for="list in item" v-if="$index==0" :key="list">{{list.key}}</td>
    </tr>
    </tbody>
  </table >
  <!--固定表头-->
  <table border="1" id="fHeader" cellspacing="0" v-show="fixedHeader">
    <thead>
    <tr >
      <th v-for="item in th" :key="item">{{item.key}}</th>
    </tr>
    </thead>
  </table>
  <!--活动的表格,绑定自定义指令-->
  <table id="sTable" border="1" cellspacing="0" v-scroll="monitor">
    <thead>
    <tr>
      <th v-for="item in th" :key="item">{{item.key}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tl" :key="item">
      <td  v-for="list in item" :key="list">{{list.key}}</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: '',
  data () {
    return {
      th: [],
      tl: [],
      temp: [],
      fixedCol: false,
      fixedHeader: false,
      fixedA1: false,
      hLeft: 0,
      hHeight: 0
    }
  },
  directives:{
    scroll:{
      bind:function(){
        var self=this;
        //触发滚动监听事件
        window.addEventListener('scroll',function(){
          //触发滚动回调事件
          eval("self.vm."+self.expression)()
        })
      }
    }
  },
  methods: {
    //生成表格
    CTable: function() {
      for(var i = 0; i < 10; i++) {
        this.th.push({
          key: "head" + i
        })
      }
      for(var i = 0; i < 100; i++) {
        for(var j = 0; j < 10; j++) {
          this.temp.push({
            key: j + "body" + i
          })
        }
        this.tl.push(this.temp)
        this.temp = []
      }
    },
    //监控表头、列头位置
    monitor:function(){
      this.setPosition();
      //当滚动条达到左偏移值的时候，出现固定列头
      if(document.body.scrollLeft>this.hLeft){
        this.fixedCol=true;
      }else{
        this.fixedCol=false;
      }
      //当滚动条达到上偏移值的时候，出现固定表头
      if(document.body.scrollTop>this.hHeight){
        this.fixedHeader=true;
      }else{
        this.fixedHeader=false;
      }
      //当表格移到左上角时，出现固定的A1表格
      if(document.body.scrollLeft>this.hLeft&&document.body.scrollTop>this.hHeight){
        this.fixedA1=true;
      }else{
        this.fixedA1=false;
      }
    },
    //使固定表头与列头的偏差与当前表格的偏移值相等
    setPosition:function(){
      document.getElementById("fHeader").style.left=this.hLeft-document.body.scrollLeft+"px";
      document.getElementsByClassName("fixedCol")[0].style.top=this.hHeight-document.body.scrollTop+"px";
    }
  },
  created () {
    this.CTable()
    this.hLeft=document.getElementById("sTable").offsetLeft
    this.hHeight=document.getElementById("sTable").offsetTop
    this.monitor()
  }
}
</script>

<style lang="scss" scoped>
  th,
  td {
    min-width: 200px;
    height: 50px;
  }
  #sTable {
    margin: 300px
  }
  .fixedCol{
    position: fixed;
    left: 0;
    background: lightblue;
    z-index: 1;
  }
  #fHeader {
    background: lightblue;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .fixedA1{
    background: lightblue;
    position: fixed;
    top: 0;
    left: 0;
    z-index:2;
  }
  [v-cloak]{
    display: none;
  }
</style>
