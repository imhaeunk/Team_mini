const mutations = {
  SET_SELLLIST(state, sellList) {
    state.sellList = sellList
  },
  CHECK_ADMIN(state, key) {
    state.key = true
  }
}

export default mutations
