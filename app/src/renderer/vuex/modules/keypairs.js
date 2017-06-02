import * as types from '../mutation-types'

const state = {
  saved: {
    publicKey: null,
    privateKey: null
  }
}

const mutations = {
  [types.CREATE_KEY_PAIR] (state, keyPair) {
    state.saved.publicKey = keyPair.publicKey
    state.saved.privateKey = keyPair.privateKey
  }
}

export default {
  state,
  mutations
}
