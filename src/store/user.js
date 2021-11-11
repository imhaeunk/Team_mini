export default {
  namespaced: true,
  state: () => ({
    currentUser: null
  }),
  mutations: {
    assignState(state,payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  }
}