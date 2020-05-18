<template>
  <div class="router-demo">
    <div class="head">
      <router-link to="a" tag="li" exact>
        <div>Brand-A</div>
      </router-link>
      <router-link to="b" tag="li">
        <div>Brand-B</div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    console.log('!!!!!!!')
  }
}
</script>

<style lang="scss" scoped>
  .router-demo {
    width: 100%;
    height: 100%;
    .head {
      width: 100%;
      height: 100px;
    }
  }

</style>
