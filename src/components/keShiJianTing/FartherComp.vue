<template>
<div class="father-content">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <chile-comp></chile-comp>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
import throttle from './throttle.js'
import ChileComp from './ChildComp'
export default {
  data () {
    return {
      observer: null,
      scrollHandle: throttle(this.scrollThrottle, 200, this, true)
    }
  },
  mounted () {
    debugger
    // 判断是否支持 IntersectionObserver
    if ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
      this.observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
          console.log('进入可视区域')
          // do something
        } else {
          console.log('移出可视区域')
          // do something
        }
      })
    }
  },
  methods: {
    startObserve () {
      if (this.observer) {
        this.observer.observe(this.$el)
      } else {
        window.addEventListener('scroll', this.scrollHandle, true)
      }
    },
    endObserve () {
      if (this.observer) {
        this.observer.disconnect()
      } else {
        window.removeEventListener('scroll', this.scrollHandle, true)
      }
    },
    scrollThrottle () {
      debugger
      const offset = this.$el.getBoundingClientRect()
      const offsetTop = offset.top
      const offsetBottom = offset.bottom
      // const offsetHeight = offset.height
      // 进入可视区域
      if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
        console.log('进入可视区域')
        // do something
      } else {
        console.log('移出可视区域')
        // do something
      }
    }
  },
  components: {
    ChileComp
  }
}
</script>

<style lang="scss" scoped>

</style>
