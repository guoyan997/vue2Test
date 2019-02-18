<template>
  <div @click="openTree(row)" class="first-col-content">
    <span :class="[(row.qy === '总体' || row.qy === '合计') ? 'font-bold' : '']">
          <i class="el-icon-minus bank-icon icon-style" v-if="row.level"
             v-for="item in row.level" :key="item"></i>
          <i class="el-icon-arrow-down icon-style" v-if="row.hasChild && !row.hasOpen"></i>
          <i class="el-icon-arrow-up icon-style" v-if="row.hasChild && row.hasOpen"></i>
          {{ row[field] }}</span>
  </div>
</template>

<script>
export default {
  props: ['row', 'field'],
  name: '',
  data () {
    return {}
  },
  methods: {
    openTree () {
      this.$emit('openTree', this.row)
    }
  }
}
</script>

<style lang="scss" scoped>
  .first-col-content {
    width: 100%;
    background-color: #F5F5F5;
    text-align: left;
    font-family: 'PingFangSC-Regular';
    color: #000;
    span {
      margin-left: 20px;
    }
    .bank-icon {
      opacity: 0
    }
    .font-bold {
      font-weight: bold;
    }
  }
</style>
