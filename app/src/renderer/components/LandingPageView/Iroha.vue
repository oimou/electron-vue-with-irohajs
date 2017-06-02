<template>
  <div>
    <button id="btn-create-key-pair" v-on:click="createKeyPair">createKeyPair</button>

    <ul>
      <li id="public-key">
        publicKey: {{ publicKey }}
      </li>

      <li id="private-key">
        privateKey: {{ privateKey }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'iroha',

    computed: {
      ...mapGetters([
        'publicKey',
        'privateKey'
      ])
    },

    methods: {
      ...mapActions([
        'createKeyPair'
      ])
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
    margin: 15px;
    padding: 15px;
  }
</style>
