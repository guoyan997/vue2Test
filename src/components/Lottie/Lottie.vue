<template>
  <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation" />
</template>

<script>
import * as animationData from '../../assets/svg/data.json'
export default {
  name: '',
  data () {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
      anim: {}
    }
  },
  // 第四步：定义方法
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
      console.log(anim) // 这里可以看到 lottie 对象的全部属性
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
