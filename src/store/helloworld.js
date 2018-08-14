/**
 * Created by guoyan on 2018/6/19.
 */
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
    changeCreator: ({commit}) => {
      commit('changeCreator')
    }
  },
  mutations: {
    changeCreator: (state) => {
      state.msg = 'wss is ths one'
    }
  }
}
