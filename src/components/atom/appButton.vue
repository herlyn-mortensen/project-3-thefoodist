<template>
  <router-link v-bind:to='link'>
  <button type="button" id="app-button" class="btn btn-dark">{{text}}</button>
  </router-link>
</template>
 
<script>
export default {
  name: 'appButton',
  props: {
    text: String,
    link: String
  }
}
</script>
 
<style>
#app-button {
  font-family: Verdana;
  color: white;
}
</style>
