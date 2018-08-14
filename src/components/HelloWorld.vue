<template>
  <div>
    <vue-scroll :ops="ops">
      <div class="msg-div" @click="changeCreator">{{msg}}</div>
      <div class="font-div">{{msgCreator}}</div>
      <qriously value="http://10.73.22.58:8080" :size="200" />
      <v-touch v-on:swipeleft="onSwipeLeft">Swipe me!</v-touch>
      //点击   渲染为一个a标签
      <v-touch tag="a" v-on:tap="onTap">Tap me!</v-touch>
      //点击   渲染为p标签
      <v-touch tag="p" v-on:tap="onTap">Tap me!</v-touch>
    </vue-scroll>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('helloworld')

export default {
  name: 'HelloWorld',
  data () {
    return {
      ops: {
      }
    }
  },
  component: {
  },
  computed: {
    ...mapState({
      msg: 'msg'
    }),
    ...mapGetters({
      msgCreator: 'msgCreator'
    })
  },
  methods: {
    changeCreator () {
      this.$store.dispatch('helloworld/changeCreator')
    },
    onSwipeLeft () {
      console.log(11111)
    },
    onTap () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = 'scss' scoped>
@import './HelloWorld';
</style>
