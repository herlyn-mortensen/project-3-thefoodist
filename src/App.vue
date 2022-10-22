<template>
  <div id="app">
    <navigationBar/>
    <router-view></router-view>
    
  </div>
</template>

<script>

//Pages import

// Component imports

import navigationBar from './components/molecules/navigationBar.vue'

export default {
  name: 'App',
  components: {
    navigationBar
  }
}
</script>

<style>
#app {
  font-family: Montserrat-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "Montserrat-Regular";
  src: local("Montserrat-Regular"),
    url(./fonts/Montserrat-Regular.ttf)format("truetype"),
      url(./fonts/Montserrat-Regular.otf)format("opentype");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
    url(./fonts/Montserrat-Bold.ttf)format("truetype"),
      url(./fonts/Montserrat-Bold.otf)format("opentype");
}

</style>
