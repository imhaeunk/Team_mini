import * as api from '../api/index.js'

const actions = {
  FETCH({ commit }) {
    return api.admin.showSellList().then(data => {
      commit('SET_SELLLIST', data)
      console.log(data)
    })
  }
}

export default actions
