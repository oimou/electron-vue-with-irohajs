import * as types from '../mutation-types'
import { remote } from 'electron'

const Iroha = remote.app.Iroha

const state = {
  saved: {
    publicKey: null,
    privateKey: null
  }
}

const mutations = {
  [types.CREATE_KEY_PAIR] (state) {
    const keyPair = Iroha.createKeyPair()

    state.saved.publicKey = keyPair.publicKey
    state.saved.privateKey = keyPair.privateKey
  }
}

export default {
  state,
  mutations
}
