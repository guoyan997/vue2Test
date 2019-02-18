<template>
  <div @click="changePage(row)" :class="['normal-cell-content', showArrow(row[field]) ? 'isRed' : '', (row.qy === '总体' || row.qy === '合计') ? 'font-bold' : '']">
    <span>{{ row[field] }}</span>
    <span v-if="showArrow(row[field])">↓</span>
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
    changePage () {
      this.$emit('changePage', this.row)
    },
    showArrow (val) {
      val = val + ''
      if (val && val.indexOf('-') > -1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .normal-cell-content {
    font-family: 'HelveticaNeue';
    color: #000;
    width: 100%;
  }
  .isRed {
    color: #F74C3D;
  }
  .font-bold {
    font-weight: bold;
    background-color: #F5F5F5;
  }
</style>
