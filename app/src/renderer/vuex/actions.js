import * as types from './mutation-types'

// Iroha
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

// Users
import grpc from 'grpc'

/* global PROTO_PATH */
const { UserServiceClient } = require(`${PROTO_PATH}user_grpc_pb`)
const user = require(`${PROTO_PATH}user_pb`)
const client = new UserServiceClient('localhost:50051', grpc.credentials.createInsecure())

export const createUser = ({ commit }) => {
  console.log('action: create user')

  const param = new user.CreateRequest()

  param.setName('alice')
  param.setAge(20)
  param.setSex(user.Sex.MALE)

  client.create(param, (err, res) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(res.toObject())

    commit(types.CREATE_USER)
  })
}

export const readUser = ({ commit }) => {
  console.log('action: read user')

  const param = new user.GetRequest()

  param.setName('alice')

  client.get(param, (err, res) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(res.toObject())

    commit(types.READ_USER, res.toObject().user)
  })
}

export const readUsers = ({ commit }) => {
  console.log('action: read users')

  const param = new user.GetAllRequest()

  client.getAll(param, (err, res) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(res.toObject())

    commit(types.READ_USERS, res.toObject().usersList)
  })
}

export const updateUser = ({ commit }) => {
  console.log('action: update user')

  const param = new user.UpdateRequest()

  param.setName('alice')
  param.setAge(21)
  param.setSex(user.Sex.FEMALE)

  client.update(param, (err, res) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(res.toObject())

    commit(types.UPDATE_USER)
  })
}

export const deleteUser = ({ commit }) => {
  console.log('action: delete user')

  const param = new user.DeleteRequest()

  param.setName('alice')

  client.delete(param, (err, res) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(res.toObject())

    commit(types.DELETE_USER)
  })
}

