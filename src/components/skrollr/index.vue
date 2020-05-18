<template>
  <div id="skrollr-body">
    spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>
    <div id="foo" data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);" class="skrollable skrollable-between foo" style="background-color: rgb(0, 0, 255);">WOOOT</div>
  </div>
</template>

<script>
import skrollr from '../../../lib/js/skrollr.min'
export default {
  name: '',
  data () {
    return {
      mySkrollr: null
    }
  },
  mounted () {
    this.mySkrollr = skrollr.init()
  }
}
</script>

<style lang="scss" scoped>
  .foo {
    height: 200px;
  }

</style>
