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
            <h3 class="card-title">{{ item.restaurant }}</h3>
            <p class="card-text">{{ item.date }}</p>
            <p class="card-text">{{ item.cuisine }}</p>
            <p class="card-text">{{ item.foodOrdered }}</p>
            
            <!-- Stars rating -->
            <div style="display:flex">
            <p>Rating: </p>
            <div      v-if="item.ratings==1" class="card-text"><i class="fa-solid fa-star"></i></div>
            <div v-else-if="item.ratings==2" class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <div v-else-if="item.ratings==3" class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <div v-else-if="item.ratings==4" class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <div v-else-if="item.ratings==5" class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>                        
            </div>
            <p class="card-text">{{ item.review }}</p>            
            
            <input type="submit" class="btn btn-dark mt-3 submitButton" value="Delete" />
            <textarea class="commentbox" />
            <input type="submit" class="btn btn-dark mt-3 submitButton" value="Comment"/>
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
.image{
  max-width: 100%;
}
.commentbox{
  margin-top:20px;
  
  width:100%;
}
</style>
