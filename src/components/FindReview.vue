<template>
  <div id="findreview">
    <h1>Find Review</h1>
    <div class="boundary">
      <form>
        <label class="label-find">Restaurant Name</label>
        <input type="text" class="form-control-find" name="restaurant" />
      </form>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <input type="submit" class="btn btn-dark mt-3 submitButton" value="Search" />
          </div>
          <div class="col-sm">
            <input type="submit" class="btn btn-dark mt-3 submitButton" value="Delete" />
          </div>
          <div class="col-sm">
            <input
              type="submit"
              class="btn btn-light border-dark mt-3 submitButton"
              value="Edit"
            />
          </div>
        </div>

   <!-- Cards Section -->
    <div class="reviewContainer">
      <h1>Reviews</h1>

      <div class="card-container">
        <div class="card" v-for="(item, index) in reviews" v-bind:key="index">
          <div class="image-container">
            <img :src="item.imageUrl" class="image" alt="..." />
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-text">{{ item.date }}</p>
            <p class="card-text">{{ item.cuisine }}</p>
            <p class="card-text">{{ item.foodOrdered }}</p>
            <p class="card-text">{{ item.review }}</p>
            <a href="#" class="btn btn-primary">View Review</a>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  // import reviewCard from "./atom/reviewCard.vue";
import {Server} from '../../config'
const BASE_URL = Server.BASE_URL

export default {
  name: "FindReview",
  components: {
    // reviewCard,
  },
  data: function () {
    
  axios({
      url: BASE_URL + "/review",
      method: "GET",
    })
    .then(async res => {
      this.reviews = res.data
    })
    return {
      reviews: [
        
      ],
    };
  },
};
</script>

<style>
#findreview {
  height: 100vh;
}

.form-control-find {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  box-shadow: 1px;
  font-size: 1.25rem;
  border-radius: 5px;
  border: 1px solid #555;
  border-color: rgb(226, 226, 226);
  padding: 12px 20px;
  display: inline;
}

.label-find {
  text-align: left;
  width: 100%;
}

.submitButton{
  width: 100%;
  height:48px;
}

.boundary {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
