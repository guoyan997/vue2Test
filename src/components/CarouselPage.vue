<template>
  <div class="content">
    <carousel-3d :width="400" :height="400" :startIndex="1" :clickable="isBool"
                 :autoplay="isBool" :autoplayTimeout="num" @onMainSlideClick="clickMain">
      <slide :index="0">
        Slide 1 Content
      </slide>
      <slide :index="1">
        Slide 2 Content
      </slide>
      <slide :index="2">
        Slide 3 Content
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: '',
  data () {
    return {
      num: 1000,
      isBool: true
    }
  },
  components: {
    Carousel3d,
    Slide
  },
  methods: {
    clickMain (val) {
      debugger
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    width: 1000px;
    height: 700px;
    background-color: aqua;
  }

</style>
