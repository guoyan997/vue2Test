<template>
<card-comp title="核心指标" :button-group="['月', '年']" @btnGroupClick="btnGroupClick" compType="profitCenter">
  <div slot="cardTitle">asdasdasdasd</div>
  <div slot="cardBody" class="test">asdasdasdasdasdasdasdasdasd</div>
</card-comp>
</template>

<script>
import CardComp from './CardComp.vue'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    CardComp
  },
  methods: {
    btnGroupClick () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .test {
    width: 300px;
    height: 600px;
    background-color: #fff000;
  }

</style>
