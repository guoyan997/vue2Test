<template>
<div>
  <el-table :data="tabledata01" height="100">
    <el-table-column v-for="item in tableHeader" :label="item.label" :prop="item.prop" :width="item.width" :key="item.id" align="center">
      <el-table-column v-if="item.children||item.children.length>0" v-for="item1 in item.children"
                       :label="item1.label" :prop="item1.prop" :width="item1.width" :key="item1.id" align="center">
        <el-table-column v-if="item1.children||item1.children.length>0" v-for="item2 in item1.children"
                         :label="item2.label" :prop="item2.prop" :width="item2.width" :key="item2.id">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
  <tree-table :data="dataSource" :columns="columns" class="treeBody"></tree-table>
</div>
</template>

<script>
import TreeTable from './TreeTable.vue'
export default {
  name: '',
  data () {
    return {
      /* eslint-disable */
      columns: [
        {text: '机构名称', value: 'commonName', width: '20%'},
        {text: '别名', value: 'shortName', width: '20%'},
        {text: '别名', value: 'shortName', width: '20%'},
        {text: '别名', value: 'shortName', width: '20%'},
        {text: '别名', value: 'shortName', width: '20%'}
      ],
      dataSource: [{

        id: '1',

        commonName: '外交外事相关机构',

        enName: '1111',

        shortName: '222222',

        nodeLevel: '0',

        parentId: '0',

        remarks: '2222222',

        isAdd: 0,

        children: [{

          id: '4',

          commonName: '外交部中心',

          enName: '22222',

          shortName: '33333',

          nodeLevel: '1',

          parentId: '1',

          remarks: '22222',

          isAdd: 0,

          children: [{

            id: '9',

            commonName: '领事司',

            enName: '22222',

            shortName: '33333',

            nodeLevel: '2',

            parentId: '4',

            remarks: '22222',

            isAdd: 1,

            children: [{

              id: '39',

              commonName: '亚非领事处',

              enName: '22222',

              shortName: '33333',

              nodeLevel: '3',

              parentId: '9',

              remarks: '22222',

              isAdd: 1,

              children: [{

                id: '79',

                commonName: 'ddddd12',

                enName: '22222',

                shortName: '33333',

                nodeLevel: '4',

                parentId: '39',

                remarks: '22222',

                isAdd: 1

              }, {

                id: '80',

                commonName: 'sssss12',

                enName: '22222',

                shortName: '33333',

                nodeLevel: '4',

                parentId: '39',

                remarks: '22222',

                isAdd: 1

              }]

            }, {

              id: '40',

              commonName: '欧美大领事处',

              enName: '22222',

              shortName: '33333',

              nodeLevel: '3',

              parentId: '9',

              remarks: '22222',

              isAdd: 1

            }]

          }, {
            id: '10',
            commonName: 'xxxxx',
            enName: '22222',
            shortName: '33333',
            nodeLevel: '2',
            parentId: '4',
            remarks: '22222',
            isAdd: 1
          }]
        }, {
          id: '2',
          commonName: '其他单位',
          enName: '22222',
          shortName: '33333',
          nodeLevel: '1',
          remarks: '22222',
          parentId: '1',
          isAdd: 1,
          children: [{
            id: '11',
            commonName: '领事司',
            enName: '22222',
            shortName: '33333',
            nodeLevel: '2',
            parentId: '2',
            remarks: '22222',
            isAdd: 1
          }, {
            id: '12',
            commonName: 'xxxxx',
            enName: '22222',
            shortName: '33333',
            nodeLevel: '2',
            parentId: '2',
            remarks: '22222',
            isAdd: 1
          }]
        }, {
          id: '3',
          commonName: '地方外办',
          enName: '22222',
          shortName: '33333',
          nodeLevel: '1',
          parentId: '1',
          remarks: '22222',
          isAdd: 1,
          children: [{
            id: '8',
            commonName: '领事司',
            enName: '22222',
            shortName: '33333',
            nodeLevel: '2',
            parentId: '3',
            remarks: '22222',
            isAdd: 1
          }, {
            id: '13',
            commonName: 'xxxxx',
            enName: '22222',
            shortName: '33333',
            nodeLevel: '2',
            parentId: '3',
            remarks: '22222',
            isAdd: 1
          }]
        }]
      }],
      tabledata01: [],

      tableHeader: [
        {id: 1, label: '企业', prop: 'qiye'},
        {id: 100, label: '总库存', prop: '', width: '', children: [
          {id: 111, label: '库存', prop: 'districtName', width: ''},
          {id: 112, label: '预警', prop: 'timeDimension', width: ''},
          {id: 113, label: '习俗', prop: 'districtName', width: ''},
          {id: 124, label: '下线', prop: 'timeDimension', width: ''}
        ]}
        ],
      tableConfig: [
        {id: 100, label: '一级表头', prop: '', width: '', children: [
          {id: 110, label: '二级表头1', prop: 'districtName', width: ''},
          {id: 120, label: '二级表头2', prop: 'timeDimension', width: ''}
        ]},
        {id: 200, label: '一级表头', prop: '', width: '', children: [
          {id: 210, label: '二级表头', prop: '', width: '', children: [
            {id: 211, label: '三级表头', prop: 'residentPopNum', width: '110'},
            {id: 212, label: '三级表头', prop: 'residentPopDst', width: '110'}
          ]}
        ]},
        {id: 300, label: '一级表头', prop: '', width: '',
          children: [
            {id: 310, label: '二级表头', prop: '', width: '', children: [
              {id: 311, label: '三级表头', prop: 'liveLandArea', width: '110'},
              {id: 312, label: '三级表头', prop: 'liveLandDst', width: '110'}
            ]
            },
            {id: 320, label: '二级表头', prop: '', width: '', children: [
              {id: 321, label: '三级表头(km²)', prop: 'employmentLandArea', width: '110'},
              {id: 322, label: '三级表头', prop: 'employmentLandDst', width: '110'}
            ],
            }
          ]},
        {id: 400, label: '一级表头', prop: '', width: '', children: [
          {id: 410, label: '二级表头', prop: '', width: '', children: [
            {id: 411, label: '三级表头(个)', prop: 'regionTrafficHubNum', width: '110'},
            {id: 412, label: '三级表头(人次/km²)', prop: 'regionTrafficHubFlow', width: '140'}
          ],
          },
          {id: 420, label: '二级表头', prop: '', width: '', children: [
            {id: 421, label: '三级表头(个)', prop: 'highSpeedNum', width: '110'},
            {id: 422, label: '三级表头(个/km²)', prop: 'highSpeedDst', width: '140'}
          ],
          }, {id: 430, label: '二级表头', prop: '', width: '', children: [
            {id: 431, label: '三级表头(个)', prop: 'trackTrafficSpotNum', width: '140'},
            {id: 432, label: '三级表头(个/km²)', prop: 'trackTrafficSpotDst', width: '140'}
          ],
          },
          {id: 440, label: '二级表头', prop: '', width: '', children: [
            {id: 441, label: '三级表头(km)', prop: 'trackTrafficNetNum', width: '110'},
            {id: 442, label: '三级表头(km/km²)', prop: 'trackTrafficNetDst', width: '140'}
          ],
          },
          {id: 450, label: '二级表头', prop: '', width: '', children: [
            {id: 451, label: '三级表头(个)', prop: 'cityTrafficHubNum', width: '110'},
            {id: 452, label: '三级表头(个/km²)', prop: 'cityTrafficHubDst', width: '110'},
            {id: 453, label: '三级表头(人次/km²)', prop: 'cityTrafficHubFlow', width: '140'}
          ],
          },
          {id: 460, label: '二级表头', prop: '', width: '', children: [
            {id: 461, label: '三级表头(km)', prop: 'cityTrafficNetNum', width: '110'},
            {id: 462, label: '三级表头', prop: 'cityTrafficNetDst', width: '140'}
          ],
          },
        ]},
        {id: 500, label: '一级表头', prop: '', width: '', children: [
          {id: 510, label: '二级表头', prop: '', width: '', children: [
            {id: 511, label: '三级表头(km²)', prop: 'pubServeLandArea', width: '110'},
            {id: 512, label: '三级表头', prop: 'pubServeLandDst', width: '110'}
          ],
          },
          {id: 520, label: '二级表头', prop: '', width: '', children: [
            {id: 521, label: '三级表头(个)', prop: 'hospitalResourcesNum', width: '110'},
            {id: 522, label: '三级表头(km²)', prop: 'hospitalResourcesArea', width: '110'},
            {id: 523, label: '三级表头(个/km²)', prop: 'hospitalResourcesDst', width: '110'}
          ],
          }, {id: 530, label: '二级表头', prop: '', width: '', children: [
            {id: 531, label: '三级表头(个)', prop: 'schoolResourcesNum', width: '110'},
            {id: 532, label: '三级表头(km²)', prop: 'schoolResourcesArea', width: '110'},
            {id: 533, label: '三级表头(个/km²)', prop: 'schoolResourcesDst', width: '110'}
          ],
          },
          {id: 540, label: '二级表头', prop: '', width: '', children: [
            {id: 541, label: '三级表头(个)', prop: 'humanResourcesNum', width: '110'},
            {id: 542, label: '三级表头(个/km²)', prop: 'humanResourcesDst', width: '110'}
          ],
          },
          {id: 550, label: '二级表头', prop: '', width: '', children: [
            {id: 551, label: '三级表头(个)', prop: 'businessResourcesNum', width: '110'},
            {id: 552, label: '三级表头(个/km²)', prop: 'businessResourcesDst', width: '110'}
          ],
          },
          {id: 560, label: '二级表头', prop: '', width: '', children: [
            {id: 561, label: '三级表头(个)', prop: 'environResourcesNum', width: '110'},
            {id: 562, label: '三级表头(个/km²)', prop: 'environResourcesDst', width: '110'}
          ],
          },
        ]},
        {id: 600, label: '一级表头', prop: '', width: '', children: [
          {id: 610, label: '二级表头', prop: '', width: '', children: [
            {id: 611, label: '三级表头(分)', prop: 'populationScore', width: '110'},
          ],
          },
          {id:  620 , label:  '二级表头', prop: '', width: '', children: [
            {id: 621, label: '三级表头(分)', prop: 'landScore', width: '110'},
          ],
          }, {id: 630, label: '二级表头', prop: '', width: '', children: [
            {id: 631, label: '三级表头(分)', prop: 'trafficScore', width: '110'},
          ],
          },
          {id: 640, label: '二级表头', prop: '', width: '', children: [
            {id: 641, label: '三级表头(分)', prop: 'communalFacilitiesScore', width: '110'},
          ],
          },
          {id: 650, label: '二级表头', prop: '', width: '', children: [
            {id: 651, label: '三级表头(分)', prop: 'modelScore', width: '110'},
          ]
          }
        ]}
      ]
    }
  },
  components: {
    TreeTable
  }
}
</script>

<style lang="scss" scoped>
.treeBody {
  // margin-top: -80px;
}
</style>
