<template>
  <div class="content">
    <carousel-3d>
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
    return {}
  },
  components: {
    Carousel3d,
    Slide
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
