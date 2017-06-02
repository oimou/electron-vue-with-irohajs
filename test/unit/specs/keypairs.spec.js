import * as types from 'renderer/vuex/mutation-types'
import keypairs from 'renderer/vuex/modules/keypairs'

describe('keypairs', () => {
  describe('#createKeyPair', () => {
    const createKeyPair = keypairs.mutations[types.CREATE_KEY_PAIR]

    it('should create new keyPair', () => {
      const state = {
        saved: {
          publicKey: null,
          privateKey: null
        }
      }

      const newPublicKey = Math.random() + ''
      const newPrivateKey = Math.random() + ''

      createKeyPair(state, {
        publicKey: newPublicKey,
        privateKey: newPrivateKey
      })

      expect(state.saved.publicKey).to.equal(newPublicKey)
      expect(state.saved.privateKey).to.equal(newPrivateKey)
    })
  })
})
