/**
 * Created by guoyan on 2018/6/19.
 */
import barService from '../util/service'
const bar = {
  namespaced: true,
  state: {
    str: 'aaa',
    dataVal: {
      title: 'ECharts 入门示例',
      val: [5, 20, 36, 10, 10, 20],
      code: 0
    }
  },
  actions: {
    changeChart ({commit}) {
      barService.getDataForBar().then((res) => {
        if (res) {
          debugger
          const data = res.dataVal
          commit('changeChart2', data)
        }
      }).catch((res) => console.log(res))
      debugger
    },
    changeTest ({commit}) {
      debugger
      commit('changeTest')
    }
  },
  mutations: {
    changeChart2: (state, payload) => {
      debugger
      const list = payload.val.map((item) => { return item + Math.random() * 10 })
      state.dataVal = {...state.dataVal, val: list}
    },
    changeTest: (state) => {
      state.dataVal.code = state.dataVal.code + 1
      state.dataVal.val = state.dataVal.val.map((item) => { return item + 5 })
      debugger
    }
  }
}

export default bar
