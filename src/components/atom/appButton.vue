<template>
  <router-link v-bind:to='link'>
  <button type="button" id="app-button">{{text}}</button>

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
  background-color:  white;
  font-family: 'Montserrat-Regular';
  font-weight: bold;
  border-radius: 40px;
  color: black;
  border: 2px black solid;
  text-align: center;
  padding: 5px;
  width: 150px;
  margin-left: 30px;
}


</style>
