<template>
    <div>
      <vue-scroll :ops="ops">
        <!-- the content you want to scroll -->
        <div
          class="content"
          v-for= "item in 100"
          :key="item"
        >
          <p>Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
            Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
            Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
            Flexible布局测试Flexible布局测试Flexible布局测试</p>
        </div>
      </vue-scroll>
      <p>Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
        Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
        Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试Flexible布局测试
        Flexible布局测试Flexible布局测试Flexible布局测试</p>
      <div class="test">
      hello world
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ops: {
        // write your own options
        vuescroll: {
          mode: 'slide'
        },
        scrollPanel: {},
        scrollContent: {},
        vRail: {}
        // ...
      }
    }
  },
  methods: {
    start () {
      this.$Progress.start()
    },
    set (num) {
      this.$Progress.set(num)
    },
    increase (num) {
      this.$Progress.increase(num)
    },
    decrease (num) {
      this.$Progress.decrease(num)
    },
    finish () {
      this.$Progress.finish()
    },
    fail () {
      this.$Progress.fail()
    },
    test () {
      this.$Progress.start()

      this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
        .then((response) => {
          this.$Progress.finish()
        }, (response) => {
          this.$Progress.fail()
        })
    }
  }
}
</script>

<style scoped>

.test {
  background-color: #FFF000;
  width: 750px;
  height: 600px;
}
p {
  font-size: 36px;
}

</style>
