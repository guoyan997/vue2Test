<template>
  <vue-drawer-layout
    ref="drawer"
    :drawer-width="200">
    <div class="drawer-content" slot="drawer">
      <!-- drawer-content -->
      这是隐藏的面板
    </div>
    <div slot="content" class="main-content">
      <!-- main-content -->
      这个是主面板
    </div>
  </vue-drawer-layout>

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
  .drawer-content {
    background-color: #FFF000;
    height: 500px;
  }
  .main-content {
    background-color: aqua;
    height: 500px;
  }

</style>
