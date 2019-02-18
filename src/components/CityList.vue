<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          :key="item"
          @click="handleLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      // 函数截流，提高性能
      timer: null
    }
  },
  updated () {
    // A字母元素到父元素顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // 把字母传给父亲，父亲再给List
      // e.target.innerText获取里边的内容
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。
          // touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
          // touchend事件：当手指从屏幕上离开的时候触发。
          // touches：表示当前跟踪的触摸操作的touch对象的数组。
          // clientY：触摸目标在视口中的y坐标。
          // 79是绿色底部到顶部的距离
          const touchY = e.touches[0].clientY - 79
          // 每个字母的高度是20
          const index = Math.floor((touchY - this.startY) / 20)
          console.log(touchY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }

}
</script>
