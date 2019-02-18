<template>
  <div class="pages-tables " id="pages-tables">
    <div class="rolling-table meal-table" ref="tableBox" :style="{height: '100%'}" >
      <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable" >
        <tr v-for="(head, i) in headerLabelList" :key="i" class="head-content">
          <th class="rows header-row-cell" :class="{'cross': index == 0 && i == 0}" v-for="(h,index) in head" :key="index" :colspan="h.colspan" :rowspan="h.rowspan">{{h.label}}</th>
        </tr>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex + 'a'" v-if="row.show">
          <td v-for="(value, colKey, s) in row" :key="s" :class="[colKey === headerFieldList[0] ? 'cols' : '']">
            <first-col-cell v-if="s===0" :field="headerFieldList[0]" :row="row" @openTree="openTree(row)"> </first-col-cell>
            <normal-cell v-if="s>0" :field="headerFieldList[s]" :row="row" @changePage="changePage(row)"> </normal-cell>
            <!--{{row[headerFieldList[s]]}}-->
            <!--{{value + colKey + headerFieldList[0]}}-->
            <!--{{colKey === headerFieldList[0] }}-->
          </td>
        </tr>
        <tr></tr>
      </table>
    </div>
  </div>
</template>
<script>
import { createIScroller } from './iscrollTable'
import FirstColCell from './FirstColCell.vue'
import NormalCell from './NormalCell'
import treeToArray from './eval'
export default {
  // props: ['headerLabelList', 'headerFieldList', 'tableData'],
  data () {
    return {
      maxHeight: '100%',
      scroll: {
        scroller: null
      },
      headerLabelList: [
        [
          {
            field_name: 'statis_date',
            label: '第一行合并3行1列',
            colspan: 1, // 指定单元格 横向 跨越的 列数
            rowspan: 3 // 指定单元格 纵向 跨越的 行数
          },
          {
            field_name: 'custom_field',
            label: '第一行合并2列',
            colspan: 2,
            rowspan: 1
          },
          {
            field_name: 'custom_field',
            label: '第一行合并2列',
            colspan: 2,
            rowspan: 1
          },
          {
            field_name: 'custom_field',
            label: '第一行合并3列',
            colspan: 3,
            rowspan: 1
          }
        ],
        [
          {
            field_name: 'custom_field',
            label: '第二行日期',
            colspan: 1, // 指定单元格 横向 跨越的 列数
            rowspan: 1 // 指定单元格 纵向 跨越的 行数
          },
          {
            field_name: 'custom_field',
            label: '第二行日期合并2列',
            colspan: 2,
            rowspan: 1
          },
          {
            field_name: 'custom_field',
            label: '第二行日期合并2列',
            colspan: 2,
            rowspan: 1
          },
          {
            field_name: 'custom_field',
            label: '第二行日期合并3列',
            colspan: 3,
            rowspan: 1
          }
        ],
        [
          {
            field_name: 'area_name',
            label: '第三行当月新增',
            colspan: 1, // 指定单元格 横向 跨越的 列数
            rowspan: 1 // 指定单元格 纵向 跨越的 行数
          },
          {
            field_name: 'area_name1',
            label: '第三行当月新增1',
            colspan: 1,
            rowspan: 1
          },
          {
            field_name: 'area_name2',
            label: '第三行当月新增2',
            colspan: 1,
            rowspan: 1
          },
          {
            field_name: 'area_name3',
            label: '第三行当月新增3',
            colspan: 1,
            rowspan: 1
          },
          {
            field_name: 'area_name4',
            label: '第三行当月新增4',
            colspan: 1,
            rowspan: 1
          },
          {
            field_name: 'area_name5',
            label: '第三行当月新增5',
            colspan: 1,
            rowspan: 1
          },
          {
            field_name: 'area_name6',
            label: '第三行当月新增6',
            colspan: 1,
            rowspan: 1
          }
        ]
      ],
      headerFieldList: ['qy', 'statis_date', 'area_name', 'area_name1', 'area_name2', 'area_name3', 'area_name4', 'area_name5', 'area_name6'],
      tableData: [
        {
          qy: '东风公司1',
          area_name: '新增数据开始',
          area_name1: '-23',
          area_name2: '新增数据开始2',
          area_name3: '新增数据开始3',
          area_name4: '新增数据开始4',
          area_name5: '新增数据开始5',
          area_name6: '新增数据开始6',
          statis_date: 100007,
          id: 1,
          pId: 0,
          hasChild: true,
          hasOpen: false,
          level: 1,
          show: true
        },
        {
          qy: '东风公司1-1',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '-34',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807,
          id: 2,
          pId: 1,
          hasChild: true,
          hasOpen: false,
          level: 2,
          show: false
        },
        {
          qy: '东风公司1-2',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807,
          id: 3,
          pId: 1,
          hasChild: true,
          hasOpen: false,
          level: 2,
          show: false
        },
        {
          qy: '东风公司1-1-1',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807,
          id: 4,
          pId: 2,
          hasChild: true,
          hasOpen: false,
          level: 2,
          show: false
        },
        {
          qy: '东风公司1-1-2',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807,
          id: 5,
          pId: 2,
          hasChild: true,
          hasOpen: false,
          level: 2,
          show: false
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据',
          area_name1: '新增数据1',
          area_name2: '新增数据2',
          area_name3: '新增数据3',
          area_name4: '新增数据4',
          area_name5: '新增数据5',
          area_name6: '新增数据6',
          statis_date: 201807
        },
        {
          qy: '东风公司',
          area_name: '新增数据最后',
          area_name1: '新增数据最后1',
          area_name2: '新增数据最后2',
          area_name3: '新增数据最后3',
          area_name4: '新增数据最后4',
          area_name5: '新增数据最后5',
          area_name6: '新增数据最后6',
          statis_date: 222222
        }
      ],
      menu_list: [{
        id: 0,
        menu_name: '设置',
        menu_url: 'setting',
        parentId: ''
      }, {
        id: '1',
        menu_name: '设置',
        menu_url: 'setting',
        parentId: 0
      }, {
        id: '1-1',
        menu_name: '权限设置',
        menu_url: 'setting.permission',
        parentId: '1'
      }, {
        id: '1-1-1',
        menu_name: '用户管理列表',
        menu_url: 'setting.permission.user_list',
        parentId: '1-1'
      }, {
        id: '1-1-2',
        menu_name: '用户管理新增',
        menu_url: 'setting.permission.user_add',
        parentId: '1-1'
      }, {
        id: '1-1-3',
        menu_name: '角色管理列表',
        menu_url: 'setting.permission.role_list',
        parentId: '1-1'
      }, {
        id: '1-2',
        menu_name: '菜单设置',
        menu_url: 'setting.menu',
        parentId: '1'
      }, {
        id: '1-2-1',
        menu_name: '菜单列表',
        menu_url: 'setting.menu.menu_list',
        parentId: '1-2'
      }, {
        id: '1-2-2',
        menu_name: '菜单添加',
        menu_url: 'setting.menu.menu_add',
        parentId: '1-2'
      }, {
        id: '2',
        menu_name: '订单',
        menu_url: 'order',
        parentId: 0
      }, {
        id: '2-1',
        menu_name: '报单审核',
        menu_url: 'order.orderreview',
        parentId: '2'
      }, {
        id: '2-2',
        menu_name: '退款管理',
        menu_url: 'order.refundmanagement',
        parentId: '2'
      }
      ],
      testList: [{
        id: 1,
        name: '1'
      }, {
        id: 2,
        name: '1-1',
        parentId: 1
      }, {
        id: 3,
        name: '1-1-1',
        parentId: 2
      }, {
        id: 4,
        name: '1-2',
        parentId: 1
      }, {
        id: 5,
        name: '1-2-2',
        parentId: 4
      }, {
        id: 6,
        name: '1-1-1-1',
        parentId: 3
      }, {
        id: 7,
        name: '2'
      }]
    }
  },
  components: {
    FirstColCell,
    NormalCell
  },
  methods: {
    openTree (row) {
      // 当点击了某一行，进行展开，将这一行的子元素，显示出来
      for (let item of this.tableData) {
        if (item.pId === row.id) {
          item.show = true
        }
      }

      this.$emit('openTree', row)
    },
    changePage (row) {
      this.$emit('changePage', row)
    },
    /**
     * 将一维的扁平数组转换为多层级对象
     * @param  {[type]} list 一维数组，数组中每一个元素需包含id和parent_id两个属性
     * @return {[type]} tree 多层级树状结构
     */
    buildTree (list) {
      let temp = {}
      let tree = {}
      for (let i in list) {
        temp[list[i].id] = list[i]
      }
      debugger
      for (let i in temp) {
        if (temp[i].parent_id) {
          if (!temp[temp[i].parent_id].children) {
            temp[temp[i].parent_id].children = {}
          }
          temp[temp[i].parent_id].children[temp[i].id] = temp[i]
        } else {
          tree[temp[i].id] = temp[i]
        }
      }
      return tree
    },
    translateDataToTree (data) {
      let parents = data.filter(value => value.parentId === 'undefined' || value.parentId == null)
      let childrens = data.filter(value => value.parentId !== 'undefined' && value.parentId != null)
      let translator = (parents, childrens) => {
        parents.forEach((parent) => {
          childrens.forEach((current, index) => {
            if (current.parentId === parent.id) {
              let temp = JSON.parse(JSON.stringify(childrens))
              temp.splice(index, 1)
              translator([current], temp)
              typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
            }
          }
          )
        }
        )
      }
      translator(parents, childrens)
      return parents
    },
    treeToNeddList (tree) {
      let tmp
      debugger
      if (!Array.isArray(tree)) {
        tmp = [tree]
      } else {
        tmp = tree
      }
      // const func = treeToArray
      // const args = [tmp, this.expandAll]
      // return func.apply(null, args)
      return treeToArray(tmp, false)
    }
    /**
    restoreEvent (event) {
      const obj = event
      debugger
      console.log(obj)
    } **/
  },
  mounted () {
    this.maxHeight = window.screen.height
    this.scroll.scroller = createIScroller('.meal-table')
    // document.getElementById('pages-tables').addEventListener('touchmove', this.restoreEvent, {passive: false})
    // 第一步，先把扁平化转化为tree
    const treeInit = this.translateDataToTree(this.testList)
    debugger
    // 第二部，把tree转化为可用的扁平化，添加需要的属性
    const list = this.treeToNeddList(treeInit)
    debugger
    console.log(list)
  }
}

</script>
<style lang='scss' scoped>
  .pages-tables {
    -webkit-overflow-scrolling: touch; // ios滑动顺畅
    position: relative;
    height: 100%;
  }
  .rolling-table {
    height: 100%;
    font-size: 16px;
    color: #86939a;
    background-color: #fff;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    position: relative;
    top: 0;
    overflow: hidden;
  }
  .rows {
    position: relative;
    z-index: 3;
  }
  .cross {
    position: relative;
    z-index: 5;
  }
  table td {
    border: 0px solid #000;
    font-size: 0.32rem;
    background: #fff;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .table {
    //   border-collapse: collapse; //去掉重复的border
    color: #86939e;
    font-size: 16px;
    border: 0px solid #000;
    min-height: 100%;
    text-align: center;
    td {
      border-bottom: 1px solid #eee;
      white-space: nowrap;
      height: 0.86rem;
      line-height: 0.86rem;
      padding: 0 0;
    }
    th {
      color: #43484d;
      white-space: nowrap;
      height: 64px;
      line-height: 64px;
      padding: 0rem 0rem;
      background-color: #f3f4f6;
      font-weight: normal;
      border: 0.02rem solid #E6E6E6;
    }
    tr{
      position: relative;
      background-color: #fff;
      &:nth-of-type(odd){
        td{
          background-color: #FAFAFA;
        }
      }
      .header-row-cell {
        min-width: 180px;
      }
    }
  }

</style>
