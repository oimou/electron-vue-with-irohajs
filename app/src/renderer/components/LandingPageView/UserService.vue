<template>
  <div>
    <button id="btn-talk-to-grpc-server" v-on:click="createUser">createUser</button>
    <button id="btn-talk-to-grpc-server" v-on:click="readUser">readUser</button>
    <button id="btn-talk-to-grpc-server" v-on:click="readUsers">readUsers</button>
    <button id="btn-talk-to-grpc-server" v-on:click="updateUser">updateUser</button>
    <button id="btn-talk-to-grpc-server" v-on:click="deleteUser">deleteUser</button>

    <div>
      <h1>User</h1>
      {{ user }}
    </div>

    <div>
      <h1>Users</h1>
      {{ users }}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'user-service',

    computed: {
      ...mapGetters([
        'user',
        'users'
      ])
    },

    methods: {
      talkToGrpcServer () {
        // Call `readUser` action
        this.$store.dispatch('readUser')
      },

      ...mapActions([
        'createUser',
        'readUser',
        'readUsers',
        'updateUser',
        'deleteUser'
      ])
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
    margin: 15px;
    padding: 15px;
  }
</style>
