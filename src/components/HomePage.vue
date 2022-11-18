<template>
  <div id="homepage">
    <img alt="hero image" src="../assets/logo.png" />
    <img alt="hero image" src="../assets/text.png" />
  </div>
</template>

<script>
import axios from "axios";
// import reviewCard from "./atom/reviewCard.vue";
import { Server } from "../../config";
const BASE_URL = Server.BASE_URL;

export default {
  name: "HomePage",
  components: {
    // reviewCard,
  },
  data: function () {
    console.log(BASE_URL)
    axios({
      url: BASE_URL + "/review",      
      method: "GET",
    }).then(async (res) => {
      this.reviews = res.data;
    });
    return {
      reviews: [
        // {
        //   reviewTitle: "Title 1",
        //   date: "Date here",
        //   cuisine: "Cuisine 1",
        //   foodOrdered: "food ordered1",
        //   review: "REVASDAAJFGLKDJFGLKFDJSSKG",
        // },
        // {
        //   reviewTitle: "Title 2",
        //   date: "Date here",
        //   cuisine: "Cuisine 2",
        //   foodOrdered: "food ordered 2",
        //   review: "REVASDAAJFGLKDJFGLKFDJSSKG",
        // },
        // {
        //   reviewTitle: "Title 3",
        //   date: "Date here",
        //   cuisine: "Cuisine 3",
        //   foodOrdered: "food ordered 3 ",
        //   review: "REVASDAAJFGLKDJFGLKFDJSSKG",
        // },
      ],
    };
  },
};
</script>

<style>
.title {
  font-family: Verdana;
}
#homepage {
  background-color: #f8f8f8;
  height: 100vh;
}

/* Cards */
.reviewCntainer {
  max-width: 900px;
}
.card {
  width: 100%;
  padding: 20px;
  margin: 10px;
  border: 2px solid #000000;
}

.card-container {
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
