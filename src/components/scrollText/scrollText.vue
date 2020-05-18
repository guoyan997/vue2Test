<template>
  <div>
    <h2>下面是滚动区域</h2>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, s) in textArr" :key="'s'+s" class="swiper-slide">{{item.value}}</div>
      </div>
      <div v-if="showSwitchBtn" class="swiper-button-prev"></div><!--左箭头-->
      <div v-if="showSwitchBtn" class="swiper-button-next"></div><!--右箭头-->
      <div v-if="showPagination" class="swiper-pagination"></div><!--分页器（就是4个点点）-->
    </div>
  </div>
</template>

<script>
import Swiper from '../../../lib/js/swiper'
export default {
  name: 'scroll',
  data () {
    return {
      mySwiper: {},
      swiperOption: {
        direction: 'horizontal', // 滚动方向 vertical 竖直， horizontal 水平
        speed: 500, // 滚动速度，越大越快
        loop: true, // 是否循环播放
        autoplay: {
          delay: 3000, // 每一张定格3000毫秒
          stopOnLastSlide: false,
          disableOnInteraction: false // 用户操作之后是否停止自动播放
        },
        navigation: { // 前进后退
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: { // 分页器
          el: '.swiper-pagination',
          clickable: true
        }
      },
      showPagination: false, // 是否显示分页
      showSwitchBtn: false, // 是否显示上一页下一页切换按钮
      textArr: [
        {id: '1', value: '这是第一条数据'},
        {id: '2', value: '这是第二条数据'},
        {id: '3', value: '这是第三条数据'},
        {id: '4', value: '这是第四条数据'},
        {id: '5', value: '这是第五条数据'},
        {id: '6', value: '这是第六条数据'}
      ]
    }
  },
  computed: {
  },
  mounted () {
    this.initSwiperObj()
  },
  methods: {
    initSwiperObj () {
      this.mySwiper = new Swiper('.swiper-container', this.swiperOption)
    }
  },
  beforeDestroy () {
    // 销毁实例，释放内存
    this.mySwiper = null
  }
}
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 100%;
    height: 120px;
    background-color: orange;
  }
</style>
