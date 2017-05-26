<template>
  <div>
    <button v-on:click="createKeyPair">createKeyPair</button>
  </div>
</template>

<script>
  import { remote } from 'electron'

  const Iroha = remote.app.Iroha

  export default {
    name: 'iroha',
    methods: {
      createKeyPair: () => {
        const keyPair = Iroha.createKeyPair()

        alert(`publicKey: ${keyPair.publicKey}\nprivateKey: ${keyPair.privateKey}`)
      }
    }
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>
