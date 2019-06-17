<template>
  <div>
    <vue-scroll :ops="ops">
      <div class="msg-div" @click="changeCreator2">aaaaaaaaaaaaaaaaaaaaa{{msg}}</div>
      <div class="font-div">{{msgCreator}}</div>
      <qriously value="http://10.73.22.58:8080" :size="200" />
      <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>
      //点击   渲染为一个a标签
      <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch>
      //点击   渲染为p标签
      <v-touch tag="p" v-on:tap="onTap">Tap me!</v-touch>
    </vue-scroll>
    <number-grow :value="720000"></number-grow>
    <number-up></number-up>
   <div class="swiper-content">
     <swiper :options="swiperOption" class="swiper-container">
       <swiper-slide v-for="(slide, index) in list" :key="index" class="slid-content" >
         <div :class="['div-content', activeTabIndex === index ? 'active' : '']" @click="clickTab(index)"> I'm {{slide}}</div>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
   </div>
    <div class="swiper-content2">
      <swiper :options="swiperOption" class="tab-list">
        <swiper-slide v-for="(slide, index) in list" :key="index" class="slid-content" >
          <div :class="['tab-item', activeTabIndex === index ? 'active' : '']" @click="clickTab(index)"> I'm {{slide}}</div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="test"></div>
    <div>
      <!-- 超图三维地球viewer -->
      <sm-viewer @ready=ready navigation fullscreenButton>
      </sm-viewer>
    </div>
    <p v-for="(item, i) in list2" :key="i">{{ item.value }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NumberGrow from './NumberGrow'
import NumberUp from './NumberUp'
import VueSeamlessScroll from '../../node_modules/vue-seamless-scroll/src/components/myClass'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Rythm from 'rythm.js'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('helloworld')
const rythm = new Rythm()
export default {
  components: {
    VueSeamlessScroll,
    NumberUp,
    NumberGrow,
    swiper,
    swiperSlide
  },
  name: 'HelloWorld',
  data () {
    return {
      list: ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'],
      ops: {
      },
      activeTabIndex: 0,
      swiperOption: {
        slidesPerView: 5,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      // vue不会对list里的object做getter、setter绑定
      list2: Object.freeze([
        { value: 1 },
        { value: 2 }
      ])
    }
  },
  component: {
    NumberGrow,
    NumberUp
  },
  computed: {
    ...mapState(['msg']),
    ...mapGetters({
      msgCreator: 'msgCreator'
    })
  },
  methods: {
    ...mapActions([
      'changeCreator',
      'getMockData'
    ]),
    changeCreator2 () {
      // this.$store.dispatch('helloworld/changeCreator')
      this.changeCreator('传参')
    },
    onSwipeLeft () {
      console.log(11111)
    },
    onTap () {},
    clickTab (val) {
      debugger
      this.activeTabIndex = val
    }
  },
  mounted () {
    this.getMockData()
    rythm.addRythm('test', 'borderWidth', 0, 2, {
      min: 2,
      max: 10
    })
    rythm.addRythm('test', 'shake', 500, 100, {direction: 'left', min: 20, max: 300})
    rythm.setMusic('../assets/rythmC.mp3')
    rythm.start()

    // 界面不会有响应
    this.list2[0].value = 100
    // 下面两种做法，界面都会响应
    // this.list2 = [
    //   { value: 100 },
    //   { value: 200 }
    // ]
    // this.list2 = Object.freeze([
    //   { value: 100 },
    //   { value: 200 }
    // ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
@import './HelloWorld';

  .swiper-content {
    border: 1px solid;
    width: 800px;
    height: 400px;
    .swiper-container {
      width: 100%;
      height: 90%;
      .slid-content {
        width: 25%;
        height: 90%;
        border: solid 1px;
        background-color: aquamarine;
        .div-content {
          width: 100%;
          height: 100%;
          background-color: #FFF000;
          &.active {
            border-bottom: 6px solid #00B6FF;
          }
        }
      }
    }
  }
  .swiper-content2 {
    border: 1px solid;
    width: 750px;
    height: 400px;
    .tab-list {
      height: 96px;
      .slid-content {
        height: 100%;
        border: solid 1px;
        background-color: aquamarine;
        .tab-item {
          height: 90%;
          width: 100%;
          background-color: #FFF000;
          &.active {
            border-bottom: 6px solid #00B6FF;
          }
        }
      }
    }
  }
  .test {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    border: 1px solid;
  }
</style>
