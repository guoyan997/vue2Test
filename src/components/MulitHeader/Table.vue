<template>
  <div id="table">
    <el-table :data="tabledata01" max-height="420">
      <el-table-column v-for="item in tableConfig" :label="item.label" :prop="item.prop" :width="item.width" :key="item.id">
        <el-table-column v-if="item.children||item.children.length>0" v-for="item1 in item.children"
                         :label="item1.label" :prop="item1.prop" :width="item1.width" :key="item1.id">
          <el-table-column v-if="item1.children||item1.children.length>0" v-for="item2 in item1.children"
                           :label="item2.label" :prop="item2.prop" :width="item2.width" :key="item2.id">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: '',
  data () {
    return {
      tabledata01: [],

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
          ],
          }
        ]},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
