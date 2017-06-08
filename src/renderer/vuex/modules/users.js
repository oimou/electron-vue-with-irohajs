import * as types from '../mutation-types'

const state = {
  user: null,
  users: []
}

const mutations = {
  [types.CREATE_USER] (state, user) {
    console.log('mutation: create user')
  },

  [types.READ_USER] (state, user) {
    console.log('mutation: read user')

    state.user = user
  },

  [types.READ_USERS] (state, users) {
    console.log('mutation: read users')

    state.users = users
  },

  [types.UPDATE_USER] (state) {
    console.log('mutation: update user')
  },

  [types.DELETE_USER] (state, user) {
    console.log('mutation: delete user')
  }
}

export default {
  state,
  mutations
}
