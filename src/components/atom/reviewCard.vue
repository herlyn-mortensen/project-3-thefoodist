<template>
    <div class="card">
      <div class="image-container">
        <img src="" class="card-img-top" alt="...">
      </div>
      <div class="card-body">
        <h2 class="card-title">Review title: {{reviewTitle}}</h2>

        <p class="card-text">{{review}}</p>
        <a href="#" class="btn btn-primary">View Review</a>
      </div>
    </div>
</template>
 
<script>
export default {
  name: 'reviewCard',
  props: {
    height: String,
    cardWidth: String,
    restaurantName:String,
    reviewTitle:String,
    cuisine:String,
    foodOrdered:String,
    review:String,
  }
}
</script>
 
<style>
.title {
  font-family: Verdana;
}
.image-container{
  background-color: aquamarine;
}
.card{
  width: auto;
}
</style>
