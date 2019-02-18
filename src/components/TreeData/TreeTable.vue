<template>
  <el-table :data="formatData1" :row-style="showRow1" v-bind="$attrs" style="width: 100%;" :height="height">
    <!--<el-table-column v-if="selection" type="selection"></el-table-column>-->
    <!--<el-table-column v-if="radio" width="45">-->
      <!--<template slot-scope="scope">-->
        <!--<el-radio :label="scope.row.id"  v-model="tally_info"></el-radio>-->
      <!--</template>-->
    <!--</el-table-column>-->

    <!--<el-table-column v-if="columns.length===0" >-->
      <!--<template slot-scope="scope">-->
        <!--<span v-for="space in scope.row._level" class="ms-tree-space" :key="space+'dic'"></span>-->
        <!--<span class="tree-ctrl" v-if="iconShow(0,scope.row)" @click="toggleCurrentExpanded(scope.$index)">-->
          <!--<i v-if="!scope.row._expanded" class="el-icon-plus"></i>-->
          <!--<i v-else class="el-icon-minus"></i>-->
        <!--</span>-->
        <!--{{scope.$index}}-->
      <!--</template>-->
    <!--</el-table-column>-->
    <!--<el-table-column v-else v-for="(column, index) in columns" :key="column.value+'dic'" :label="column.text" align="center">-->
      <!--<template slot-scope="scope">-->
        <!--<span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space+'dic'"></span>-->
        <!--<span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleCurrentExpanded(scope.$index,scope.row)">-->
          <!--<i v-if="!scope.row._expanded" class="el-icon-plus"></i>-->
          <!--<i v-else class="el-icon-minus"></i>-->
        <!--</span>-->
        <!--{{  currentColumn(scope.row, column.value)  }}-->
      <!--</template>-->
    <!--</el-table-column>-->
    <el-table-column v-for="(column, index) in columns" :key="index+'dcc'" :label="column.text" align="center">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="(space, s) in scope.row._level" class="ms-tree-space" :key="s+'dic'"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleCurrentExpanded(scope.$index,scope.row)">
          <i v-if="!scope.row._expanded" class="el-icon-plus"></i>
          <i v-else class="el-icon-minus"></i>
        </span>
        {{  currentColumn(scope.row, column.value)  }}
      </template>
    </el-table-column>
    <slot><div></div></slot>
  </el-table>
</template>
<script>
import treeToArray from './eval'
export default {
  name: 'treeTable',
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    urlLazy: {
      type: String
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    },
    selection: true,
    radio: false,
    height: {
      type: Number
    },
    nodeDataCurrentId: {
      type: String
    },
    optionArea: {
      type: Array
    }
  },
  computed: {
    // 格式化数据源
    formatData1 () {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    showRow1 (row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleCurrentExpanded: function (trIndex, row) {
      const record = this.formatData1[trIndex]
      record._expanded = !record._expanded
    },
    // 图标显示
    iconShow (index, record) {
      return (index === 0)
    },
    currentColumn (row, prpo) {
      debugger
      let array = prpo.split('.')
      if (array.length === 1) {
        return row[prpo]
      }
      var result = row
      for (var i = 0; i < array.length; i++) {
        result = result[array[i]]
        if (!result) {
          return ''
        }
      }
      return result
    }
  },
  created () {
    debugger
    console.log(this.formatData1)
  },
  data () {
    return {
      tally_info: ''
    }
  }
}

</script>

<style lang='scss' scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
    &::before {
      content: ''
    }
  }
  .processContainer{
    width: 100%;
    height: 100%;
  }
  table td {
    line-height: 26px;
  }

  .tree-ctrl{
    position: relative;
    cursor: pointer;
    color: #2196F3;
    margin-left: -18px;
  }
</style>
