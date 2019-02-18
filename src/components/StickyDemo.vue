<template>
  <section v-sticky="stickyConfig">{{msg}}</section>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      stickyConfig: {
        zIndex: 10,
        stickyTop: 0,
        disabled: false
      },
      msg: 'Welcome'
    }
  }
}
</script>
