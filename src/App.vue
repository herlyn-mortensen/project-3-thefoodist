<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Basic msg="Welcome to Your Vue.js App"/>
    <appButton text="Register"/>
    <reviewCard height= "100px" width="100px"/>
  </div>
</template>

<script>
import Basic from './components/Basic.vue'
import appButton from './components/atom/appButton.vue'
import reviewCard from './components/atom/reviewCard.vue'

export default {
  name: 'App',
  components: {
    Basic,
    appButton,
    reviewCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
