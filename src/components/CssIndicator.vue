<template>
<div class="css-indicator-content">
  <div class="content">
    正在加载中<dot></dot>
    <div class="flow-colorful"></div>
  </div>
  <div class="bottom"></div>
</div>
</template>

<script>

export default {
  name: '',
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .css-indicator-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      width: 100%;
      overflow-y: auto;
      dot {
        display: inline-block;
        height: 1em; line-height: 1;
        text-align: left;
        vertical-align: -.25ex;
        overflow: hidden;
      }
      dot::before {
        display: block;
        content: '...\A..\A.';
        white-space: pre-wrap;
        animation: dot1 3s infinite step-start both;
      }
      @keyframes dot1 {
        33% { transform: translateY(-2em); }
        66% { transform: translateY(-1em); }
      }
      .flow-colorful {
        max-width: 600px;
        height: 2500px;
        background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple);
        animation: hue 6s linear infinite;
      }
      @keyframes hue {
        from { filter: hue-rotate(0deg); }
        to   { filter: hue-rotate(360deg); }
      }
    }
    .bottom {
      width: 100%;
      line-height: 100px;
      min-height: 100px;
      height: 100px;
      background-color: #65fd00;
    }
  }
</style>
