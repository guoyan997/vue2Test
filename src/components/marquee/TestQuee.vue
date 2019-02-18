<template>
  <my-marquee :lists="lists"></my-marquee>
</template>

<script>
import MyMarquee from './MyMarquee.vue'
export default {
  name: '',
  data () {
    return {
      lists: [
        '连雨不知春去',
        '一晴方觉夏深'
      ]
    }
  },
  components: {
    MyMarquee
  }
}
</script>

<style lang="scss" scoped>

</style>
