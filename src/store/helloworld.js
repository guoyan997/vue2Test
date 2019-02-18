/**
 * Created by guoyan on 2018/6/19.
 */
import axios from 'axios'
export default {
  namespaced: true,
  state: {
    msg: 'HelloWorld'
  },
  getters: {
    msgCreator: (state) => {
      return 'gy is the creator of ' + state.msg
    }
  },
  actions: {
    changeCreator: ({commit}, payload) => {
      alert(payload)
      commit('changeCreator')
    },
    // 从mock中获取数据
    async getMockData ({commit}) {
      let { data } = await axios.get('/mock/news')
      let jsonMock = await axios.get('/mock/json')
      console.log(data)
      console.log(jsonMock.data)
    }
  },
  mutations: {
    changeCreator: (state) => {
      state.msg = 'wss is ths one'
    }
  }
}
