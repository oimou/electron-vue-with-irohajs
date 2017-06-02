import * as types from './mutation-types'
import { remote } from 'electron'

const Iroha = remote.app.Iroha

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const createKeyPair = ({ commit }) => {
  const keyPair = Iroha.createKeyPair()

  commit(types.CREATE_KEY_PAIR, keyPair)
}
