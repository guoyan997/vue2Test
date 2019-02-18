<template>
<div class='table-content'>
  <div>
    <table id='tab' cellpadding='1' cellspacing='1' border='1'>
      <tr>
        <th rowspan='2'>序号</th>
        <th colspan='2'>王五</th>
        <th colspan='2'>李四</th>
        <th colspan='2'>孙传</th>
        <th colspan='2'>胡平</th>
        <th rowspan='2'>合计</th>
      </tr>
      <tr>
        <th>语文</th>
        <th>数学</th>
        <th>语文</th>
        <th>数学</th>
        <th>语文</th>
        <th>数学</th>
        <th>语文</th>
        <th>数学</th>
      </tr>
      <tr>
        <th>1</th>
        <th>78</th>
        <th>96</th>
        <th>67</th>
        <th>98</th>
        <th>88</th>
        <th>75</th>
        <th>94</th>
        <th>69</th>
        <th></th>
      </tr>
      <tr>
        <th>2</th>
        <th>89</th>
        <th>68</th>
        <th>77</th>
        <th>87</th>
        <th>84</th>
        <th>76</th>
        <th>71</th>
        <th>87</th>
        <th></th>
      </tr>
      <tr>
        <th>3</th>
        <th>75</th>
        <th>78</th>
        <th>89</th>
        <th>74</th>
        <th>65</th>
        <th>68</th>
        <th>98</th>
        <th>90</th>
        <th></th>
      </tr>
      <tr>
        <th>4</th>
        <th>79</th>
        <th>89</th>
        <th>65</th>
        <th>62</th>
        <th>64</th>
        <th>87</th>
        <th>97</th>
        <th>91</th>
        <th></th>
      </tr>
      <tr>
        <th>5</th>
        <th>89</th>
        <th>96</th>
        <th>67</th>
        <th>76</th>
        <th>74</th>
        <th>84</th>
        <th>67</th>
        <th>81</th>
        <th></th>
      </tr>
      <tr>
        <th>6</th>
        <th>94</th>
        <th>90</th>
        <th>97</th>
        <th>74</th>
        <th>62</th>
        <th>81</th>
        <th>78</th>
        <th>78</th>
        <th></th>
      </tr>
      <tr>
        <th>7</th>
        <th>78</th>
        <th>89</th>
        <th>77</th>
        <th>87</th>
        <th>45</th>
        <th>86</th>
        <th>77</th>
        <th>98</th>
        <th></th>
      </tr>
      <tr>
        <th>8</th>
        <th>65</th>
        <th>67</th>
        <th>94</th>
        <th>68</th>
        <th>87</th>
        <th>69</th>
        <th>78</th>
        <th>68</th>
        <th></th>
      </tr>
      <tr>
        <th>9</th>
        <th>86</th>
        <th>98</th>
        <th>87</th>
        <th>87</th>
        <th>65</th>
        <th>78</th>
        <th>98</th>
        <th>79</th>
        <th></th>
      </tr>
      <tr>
        <th>10</th>
        <th>88</th>
        <th>75</th>
        <th>77</th>
        <th>97</th>
        <th>97</th>
        <th>77</th>
        <th>70</th>
        <th>87</th>
        <th></th>
      </tr>
    </table>
  </div>
 <div>
   <table :style='tableStyle' cellpadding='1' cellspacing='1' border='1'>
     <thead :style='headStyle'>
     <!--<tr>-->
     <!--<th v-for='(header,index) in headList' :key='index' v-html='header.label'>{{header.label}}</th>-->
     <!--</tr>-->
     <!--<tr>-->
       <!--<th colspan='1' rowspan="2">日期</th>-->
       <!--<th colspan='2'>地区</th>-->
     <!--</tr>-->
     <!--<tr>-->
       <!--<th>北京</th>-->
       <!--<th >上海</th>-->
     <!--</tr>-->

     <tr v-for="(i, fIndex) in maxFloor" :key="'rowHead' + fIndex">
       <th v-for='(header,index) in getNodeByLevel(lastHead, fIndex)' :key='index' v-html='header.label' :colspan="header.colspan"
           :rowspan="getRowSpan(header, maxFloor)">{{header.label}}</th>
     </tr>

     </thead>
     <tbody>
     <tr v-for ='(item,rowIndex) in tableData' :key='rowIndex'>
       <td  v-for='(header,colIndex) in headList' :key='colIndex'>{{item[header.prop]}}</td>
     </tr>
     </tbody>
   </table>
 </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      headList: [{label: '日期', prop: 'date'}, {label: '产品1', prop: 'product1'}, {label: '产品2', prop: 'product2'}, {label: '产品3', prop: 'product3'}, {label: '产品4', prop: 'product4'},
        {label: '产品3', prop: 'product3'}, {label: '产品4', prop: 'product4'}
      ],
      tableData: [
        {date: '20180810', product1: '1001', product2: '2001', product3: '3001', product4: '4001', product5: '5001', product6: '6001'},
        {date: '20180811', product1: '1002', product2: '2002', product3: '3001', product4: '4001', product5: '5001', product6: '6001'},
        {date: '20180812', product1: '1003', product2: '2003', product3: '3001', product4: '4001', product5: '5001', product6: '6001'},
        {date: '20180813', product1: '1004', product2: '2004', product3: '3001', product4: '4001', product5: '5001', product6: '6001'}],
      tableStyle: {
        width: '100%',
        height: '100%'
      },
      headStyle: {
        background: 'red',
        border: '1px',
        width: '100%',
        color: '#000000',
        height: '40px'
      },
      bodyStyle: {
        height: '200px'
      },
      stringData: `[
                {
                    "label": "广东省",
                    "children": [
                        {
                            "label": "梅州市",
                            "children": [
                                {
                                    "label": "兴宁市",
                                    "children": [
                                        {
                                            "label": "黄槐镇",
                                            "children": [
                                                {
                                                    "label": "西埔村",
                                                    "children": [
                                                        {
                                                            "label": "中心街",
                                                            "children": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "宝龙村",
                                                    "children": []
                                                },
                                                {
                                                    "label": "双下村",
                                                    "children": []
                                                },
                                                {
                                                    "label": "双头村",
                                                    "children": []
                                                },
                                                {
                                                    "label": "槐东村",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {"label": "一级2", "children": []},
                {"label": "一级3", "children": []}
            ]`,
      json: `{
        "text": "表格列名称",
        "children": [{
          "text": "序号",
          "children": [{
            "text": "序号一",
            "children": []
          }, {
            "text": "序号二",
            "children": []
          }]
        }, {
          "text": "名称",
          "children": []
        }, {
          "text": "项目",
          "children": [{
            "text": "项目一",
            "children": [{
              "text": "项目二",
              "children": []
            }]
          }]
        }]
      }`,
      maxFloor: 0,
      headColList: [
        {pid: null, id: '1', label: '1', prop: 'date'},
        {pid: null, id: '2', label: '2', prop: ''},
        {pid: null, id: '3', label: '3', prop: 'product3'},
        {pid: '2', id: '2-1', label: '2-1', prop: 'product1'},
        {pid: '2', id: '2-2', label: '2-2', prop: ''},
        {pid: '2-2', id: '2-2-1', label: '2-2-1', prop: 'product4'},
        {pid: '2-2', id: '2-2-2', label: '2-2-2', prop: 'product5'}
      ],
      lastHead: []
    }
  },
  methods: {
    // colspan记录节点的所有叶子节点个数
    getLeafCountTree (json) {
      if (!(json.children) || (json.children && json.children.length === 0)) {
        json.colspan = 1
        return 1
      } else {
        let leafCount = 0
        for (var i = 0; i < json.children.length; i++) {
          leafCount = leafCount + this.getLeafCountTree(json.children[i])
        }
        json.colspan = leafCount
        return leafCount
      }
    },
    // 获取树结构的最大层数
    getMaxFloor (treeData) {
      // let floor = 0
      // let v = this
      let max = 0
      function each (data, floor) {
        data.forEach(e => {
          e.floor = floor
          if (floor > max) {
            max = floor
          }
          if ((e.children) && (e.children.length > 0)) {
            each(e.children, floor + 1)
          }
        })
      }
      each(treeData, 1)
      return max
    },
    parseListToTree (list) {
    // 创建一个对象命名为map
      let map = {}
      // 通过遍历把list中的元素放到map对象中
      list.forEach(function (item) {
        if (!map[item.id]) {
          // 核心步骤1：map中的'item.id'属性指向list数组中的对象元素
          map[item.id] = item
        }
      })
      // 再次遍历为了对map属性所指的对象进行处理
      list.forEach(function (item) {
        // 过滤父级id不是null的元素
        if (item.pid != null) {
          // map[item.pid]为该元素的父级元素
          map[item.pid].children ? map[item.pid].children.push(item) : map[item.pid].children = [item]
        }
      })
      // 过滤后仅剩下根节点
      return list.filter(function (item) {
        if (item.pid === null) {
          return item
        }
      })
    },
    /**
    // 将tree转化为扁平化数据，添加层级等信息
    formatConversion (parent, Children, index = 0, family = [], elderIdentity = 'x') {
      // children如果长度等于0，则代表已经到了最低层
      // let page = (this.startPage - 1) * 10
      if (Children.length > 0) {
        Children.map((x, i) => {
          // 设置 __level 标志位 用于展示区分层级
          Vue.set(x, '__level', index)
          // 设置 __family 为家族关系 为所有父级，包含本身在内
          Vue.set(x, '__family', [...family, elderIdentity + '_' + i])
          // 本身的唯一标识  可以理解为个人的身份证咯 一定唯一。
          Vue.set(x, '__identity', elderIdentity + '_' + i)
          parent.push(x)
          // 如果仍有子集，则进行递归
          if (x.children && x.children.length > 0) {
            this.formatConversion(parent, x.children, index + 1, [...family, elderIdentity + '_' + i], elderIdentity + '_' + i)
          }
        })
      } return parent
    },**/
    // 将tree转化为扁平化数据，添加层级等信息
    formatConversion (parent, Children, index = 0) {
      // children如果长度等于0，则代表已经到了最低层
      // let page = (this.startPage - 1) * 10
      if (Children.length > 0) {
        Children.map((x, i) => {
          // 设置 __level 标志位 用于展示区分层级
          // Vue.set(x, '__level', index)
          x.__level = index
          parent.push(x)
          // 如果仍有子集，则进行递归
          if (x.children && x.children.length > 0) {
            this.formatConversion(parent, x.children, index + 1)
          }
        })
      } return parent
    },
    getNodeByLevel (arr, level) {
      const list = arr.filter(item => {
        return item.__level === level
      })
      debugger
      return list
    },
    getRowSpan (node, max) {
      if (node.colspan === 1) {
        return max - parseInt(node.__level)
      } else {
        return 1
      }
    }
  },
  created () {
    // 先把list转化为tree
    let newTree = this.parseListToTree(this.headColList)
    debugger
    // 给每个节点添加colspan
    for (let item of newTree) {
      this.getLeafCountTree(item)
    }
    // 获取了节点的层级并且把tree再次转化会扁平化数组，用于遍历生成表格
    this.lastHead = this.formatConversion([], newTree)
    console.log(this.lastHead, 'lastHead')
    // 再获取最大的层数
    this.maxFloor = this.getMaxFloor(newTree)
    console.log(this.maxFloor, 'maxFloor')
    this.headList = this.lastHead.filter(item => {
      return item.prop !== ''
    })
    debugger
    /**
    let treeData = JSON.parse(this.stringData)
    for (let item of treeData) {
      this.getLeafCountTree(item)
    }
    let jsonObj = JSON.parse(this.json)
    this.getLeafCountTree(jsonObj)
    console.log(jsonObj, 'json')
    console.log(treeData, 'treeData')
    debugger
    this.maxFloor = this.getMaxFloor(treeData) **/
  }
}
</script>

<style lang='scss' scoped>
.table-content {
  width: 100%;
  height: 100%;
  background-color: #fff000;
}
</style>
