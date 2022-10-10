<template>
  <button type="button" id="app-button" class="btn btn-dark">{{text}}</button>
</template>
 
<script>
export default {
  name: 'appButton',
  props: {
    text: String
  }
}
</script>
 
<style>
#app-button {
  font-family: Verdana;
  color: white;
}
</style>
