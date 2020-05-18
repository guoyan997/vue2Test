<template>
<div class="scroll-page">
  <div class="item" v-for="index in items" :key="index">
    <h2>Image {{ index }}</h2>

    <img :src="`https://source.unsplash.com/random?${index}`" v-on:load="didLoad" />
  </div>

  <div class="loadmore">
    <h2>滚动到这里触发</h2>
  </div>
</div>
</template>

<script>
import ScrollTrigger from '@terwanerik/scrolltrigger'
// Create a new ScrollTrigger instance with default options
// const trigger = new ScrollTrigger()
export default {
  name: '',
  data () {
    return {
      items: [],
      trigger: null
    }
  },
  mounted () {
    this.trigger = new ScrollTrigger()
    this.trigger.add('.loadmore', {
      toggle: {
        callback: {
          in: this.loadMore.bind(this)
        }
      }
    })
  },
  beforeDestroy () {
    this.trigger.kill()
    this.trigger = null
  },
  methods: {
    loadMore (trigger) {
      console.log('************')
      this.items.push(this.items.length)
    },
    didLoad (e) {
      e.target.style.opacity = 1.0
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-page {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #999999;
    .visible, .invisible {
      opacity: 0.0;
      transition: opacity 0.5s ease;
    }
    .visible {
      opacity: 1.0;
    }
  }
</style>
