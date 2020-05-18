<template>
  <div class="big-table-content">
    <table border="1" width="60%" bgcolor="#e9faff" cellpadding="2">
      <caption>测试表格</caption>
      <tr align="center" v-for="(row, index) in tableRow" :key="index">
        <td v-for="(col, colIndex) in tableCol" :key="colIndex"><span>{{col}}</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tableRow: [],
      tableCol: []
    }
  },
  mounted () {
    for (let i = 0; i < 1500; i++) {
      this.tableRow.push(i)
    }
    for (let j = 0; j < 100; j++) {
      const col = 'col' + j
      this.tableCol.push(col)
    }
  }
}
</script>

<style lang="scss" scoped>
  .big-table-content {
    width: 900px;
    height: 600px;
    background-color: greenyellow;
    table {
      width: 100%;
      height: 100%;
    }
  }
</style>
