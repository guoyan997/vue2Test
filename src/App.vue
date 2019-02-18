<template>
  <div id="app">
    <img class="img-div" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import WaterMark from 'js-watermark'
export default {
  name: 'App',
  mounted () {
    WaterMark.configure({
      user: 'Jeffery Gou.',
      company: 'TMDM co.',
      time: false,
      watermark_y_space: 100
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-div {
  width: 200px;
  height: 200px;
}
</style>
