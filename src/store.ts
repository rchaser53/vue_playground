import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nState: ''
}

const mutations = {
  changeState (state, value) {
    state.nState = value
  }
}

const actions = {
  changeState: ({ commit }, e) => {
    commit('changeState', e.target.value)
  }
}

const getters = {
  testGetState: state => state
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
