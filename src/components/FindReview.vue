<template>
  <div id="findreview">
    <h1>Find Review</h1>
    <div class="boundary">
      <form>
        <label class="label-find">Restaurant Name</label>
        <input
          type="text"
          class="form-control-find"
          name="restaurant"
          v-model="restaurant"
        />
      </form>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <input
              type="submit"
              class="btn btn-dark mt-3 submitButton"
              value="Search"
            />
          </div>
          <div class="col-sm">
            <input
              type="submit"
              class="btn btn-dark mt-3 submitButton"
              value="Delete"
            />
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
            <div
              class="card"
              v-for="(item, index) in filteredRestaurant"
              v-bind:key="index"
            >
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
                <div style="display: flex">
                  <p>Rating:</p>
                  <div v-if="item.ratings == 1" class="card-text">
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div v-else-if="item.ratings == 2" class="card-text">
                    <i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                  </div>
                  <div v-else-if="item.ratings == 3" class="card-text">
                    <i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                  </div>
                  <div v-else-if="item.ratings == 4" class="card-text">
                    <i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                  </div>
                  <div v-else-if="item.ratings == 5" class="card-text">
                    <i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p class="card-text">{{ item.review }}</p>
                <!--Comment Area-->
                <div>
                  <p>Comments</p>
                  <div
                    class="card"
                    v-for="(comment, commentIndex) in item.comments"
                    v-bind:key="commentIndex"
                  >
                    <div>
                      <p>{{ comment.review }}</p>
                      <input
                        type="submit"
                        class="btn btn-dark mt-3 submitButton"
                        value="Delete"
                        v-on:click="deleteComment(comment._id)"
                      />
                    </div>
                  </div>
                </div>
                <div class="container-flex-column">
             
                  <router-link :to="{ path: '/EditReview', query: { id: item._id }}" class="btn btn-dark mt-3 submitButton" >
                    <p class="buttonText">Edit</p>
                  </router-link>

                  <input
                    type="submit"
                    class="btn btn-light mt-3 bordered submitButton"
                    value="Delete"
                    v-on:click="() => deleteReview(item._id)"
                  />
                </div>
                <textarea
                  class="commentbox"
                  v-model="comments[item._id]"
                  v-on:keyup="(ref) => commenting(index, item._id, ref)"
                />
                <input
                  type="submit"
                  class="btn btn-dark mt-3 submitButton"
                  v-on:click="postComment(item._id)"
                  value="Comment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const { BASE_URL } = require("../../prod.env");

export default {
  name: "FindReview",
  components: {
    // reviewCard,
  },
  data: function () {
    axios({
      url: BASE_URL + "/review",
      method: "GET",
    }).then(async (res) => {
      this.reviews = res.data;
    });

    return {
      comments: [],
      reviews: [],
      restaurant: "",
    };
  },
  computed: {
    filteredRestaurant: function () {
      if (!this.restaurant) {
        return this.reviews;
      }
      let filtered = this.reviews.filter((eachReview) => {
        if (eachReview.restaurant) {
          const search = eachReview.restaurant.toLowerCase();
          if (search === this.restaurant.toLowerCase()) {
            return eachReview;
          }
        }
        // console.log(eachReview)
        // return eachReview.restaurant.toLowerCase().includes(this.restaurant.toLowerCase())
      });
      return filtered;
    },
  },
  methods: {
    // Deleting a single review
    deleteReview: function(itemId) {
        axios({
          method: "DELETE",
          url: BASE_URL + `/review/${itemId}`,
        })
        .then(() => {
          // Refetch the review list
          axios({
            method: "GET",
            url: BASE_URL + `/review`,
          }).then((res) => {
            this.reviews = res.data;
            alert('Removed review')
          });
        })
    },
    // Record the comment in the TextArea
    commenting: function (index, itemId, ref) {
      this.comments[itemId] = ref.target.value;
    },
    // Submit the comment according to the selected item
    postComment: function (itemId) {
      axios({
        method: "POST",
        url: BASE_URL + `/reviews/${itemId}/comments`,
        data: {
          review: this.comments[itemId],
        },
      })
        .then(() => {
          this.comments[itemId] = "";
          // Refetch the review list
          axios({
            method: "GET",
            url: BASE_URL + `/review`,
          }).then((res) => {
            this.reviews = res.data;
          });
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    // Delete the comment according to the selected item
    deleteComment: function (commentId) {
      axios({
        method: "DELETE",
        url: BASE_URL + `/comments/${commentId}`,
      })
      .then(() => {
        // Refetch the review list
        axios({
          method: "GET",
          url: BASE_URL + `/review`,
        }).then((res) => {
          this.reviews = res.data;
          alert("Comment Deleted");
        });
      })
      .catch((error) => {
        console.log(error.data);
      });
    }  
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

.submitButton {
  width: 100%;
  height: 48px;
  margin: 10px;
}

.boundary {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.image {
  max-width: 100%;
}
.commentbox {
  margin-top: 20px;

  width: 100%;
}

.container-flex-column {
  display: flex
}

.bordered {
  border: 2px solid #212529
}

.buttonText {
  color: white;
  margin-top: 5px;
}
</style>
