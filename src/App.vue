<template>
  <div id="app">
    <router-view></router-view>
    <navigationBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <headingText text = "Sample text"/>
    <HomePage msg="Welcome to Your Vue.js App"/>
    <appButton text="Register"/>
    <reviewCard height= "100px" width="100px"/>
  </div>
</template>

<script>
import HomePage from '../components/HomePage.vue'
import headingText from './components/atom/headingText.vue'
import appButton from './components/atom/appButton.vue'
import reviewCard from './components/atom/reviewCard.vue'
import navigationBar from './components/molecules/navigationBar.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    headingText,
    appButton,
    reviewCard,
    navigationBar
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
}
</style>
