/**
 * Created by guoyan on 2018/6/20.
 */
// import Vue from 'vue'
import lineService from '../util/service'
const line = {
  namespaced: true,
  state: {
    opinionData: [
      {value: 26, name: '学习氛围差'},
      {value: 31, name: '学习氛围一般'},
      {value: 8, name: '学习氛围很好'}
    ],
    // opinionData: [10, 20, 30, 40, 50],
    testList: [1, 2, 3, 4, 5]
  },
  actions: {
    async changeData ({commit}) {
      // lineService.getDataForLine().then((res) => {
      //   if (res) {
      //     debugger
      //     const data = res.opinionData
      //     commit('changOp', data)
      //   }
      // }).catch((res) => console.log(res))
      const res = await lineService.getDataForLine()
      debugger
      commit('changOp', res.opinionData)
    },
    changeList ({commit}) {
      commit('changeList')
    }
  },
  mutations: {
    changOp (state, payload) {
      const list = payload.map(i => {
        const obj = {}
        obj.value = i.value + Math.random() * 10
        obj.name = i.name
        return obj
      })
      state.opinionData = list
    },
    changeList (state) {
      state.testList = state.testList.map(i => { return i + 5 })
    }
  }
}
export default line
