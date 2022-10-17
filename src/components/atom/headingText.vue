<template>
  <div>
    <h1 class="title">{{text}}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'headingText',
  props: {
    text: String,
  } 
}
</script>
 
<style>

@font-face {
  font-family: 'Yummy';
  src:local("Yummy"),
  url(../../fonts/Yummy.ttf) format("truetype")
}

h1 {
  font-family: "Yummy";
}



</style>
