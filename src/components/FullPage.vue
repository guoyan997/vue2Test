<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section first">
      First section ...
    </div>
    <div class="section second">
      Second section ...
    </div>
  </full-page>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      options: {
        // menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .first {
    background-color: #FFF000;
  }
  .second {
    background-color: aqua;
  }

</style>
