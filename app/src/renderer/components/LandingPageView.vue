<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
    <iroha></iroha>
    <user-service></user-service>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import Iroha from './LandingPageView/Iroha'
  import UserService from './LandingPageView/UserService'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      Iroha,
      UserService
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
