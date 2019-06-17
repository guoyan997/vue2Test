<template>
<div class="scss-test">
  <span class="font-content">测试文字变量的样式</span>
  <div class="box"></div>
  <div class="message-success"></div>

</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/common';
  .scss-test {
    .font-content {
      font: $font-stack;
      color: $primary-color;
      &:hover { text-decoration: underline; }
    }
    .box {
      width: 100px;
      height: 100px;
      background-color: $primary-color;
      @include border-radius(10px);
    }
    .message-success {
      @extend %message-common;
      border-color: green;
    }
  }
</style>
