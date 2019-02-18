<template>
  <animated-number
    :value="value"
    :formatValue="formatToPrice"
    :duration="3000"
  />
</template>
<script>
import AnimatedNumber from 'animated-number-vue'
export default {
  name: 'NumberUp',
  components: {
    AnimatedNumber
  },
  data () {
    return {
      value: 1000
    }
  },
  methods: {
    formatToPrice (value) {
      return `R$ ${value.toFixed(2)}`
    }
  }
}
</script>
