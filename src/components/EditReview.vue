
<template>
  <div id="writereviewpage">
    <h2 class="write-review-section">Write Review</h2>

    <div class="write-review-section">


    
      <form class="filloutform">
        <img v-bind:src="imageUrl">
        <Uploadcare publicKey="0c2d3aab955c945b00e7" v-on:success="uploadImageSuccess" v-on:error="uploadImageError">
          <button class="uploadBtn">Upload image<img /></button>
        </Uploadcare>
        <div>
          <label class="label-write">Restaurant:</label>
          <input type="text" name="restaurant" class="form-control" v-on:input="onTextChange" />
        </div>
        <div>
          <label class="label-write">Title:</label>
          <input type="text" name="title" class="form-control" v-on:input="onTextChange"/>
        </div>
        <div>
          <label class="label-write">Date:</label>
          <input type="text" name="date" class="form-control" v-on:input="onTextChange"/>
        </div>
        <div>
          <label class="label-write">Cuisine:</label>
          <input type="text" name="cuisine" class="form-control" v-on:input="onTextChange"/>
        </div>
        <div>
          <label class="label-write">Food ordered:</label>
          <input type="text" name="foodordered" class="form-control" v-on:input="onTextChange"/>
        </div>
        <div class="section">
          <label class="label-write">Write Review</label>
          <div>
            <textarea
              class="form-control-review"
              name="review"
              rows="4"
              cols="50"
              v-on:input="onTextChange"
            ></textarea>
          </div>
        </div>
        <div>
          <label class="label-write">Ratings</label>
          <input
            type="radio"
            class="form-check-input"
            name="ratings"
            value="1"
            v-on:click="onRadioClick"
          />
          <label class="form-check-label"
            ><i class="fa-solid fa-star"></i
          ></label>
          <input
            type="radio"
            class="form-check-input"
            name="ratings"
            value="2"
            v-on:click="onRadioClick"
          />
          <label class="form-check-label"
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ></label>
          <input
            type="radio"
            class="form-check-input"
            name="ratings"
            value="3"
            v-on:click="onRadioClick"
          />
          <label class="form-check-label"
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i
          ></label>
          <input
            type="radio"
            class="form-check-input"
            name="ratings"
            value="4"
            v-on:click="onRadioClick"
          />
          <label class="form-check-label"
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
          ></label>
          <input
            type="radio"
            class="form-check-input"
            name="ratings"
            value="5"
            v-on:click="onRadioClick"
          />
          <label class="form-check-label"
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
            ><i class="fa-solid fa-star"></i
          ></label>
        </div>
        <div>
          <input type="submit" class="btn btn-dark mt-3" v-on:click="onSubmit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Uploadcare from 'uploadcare-vue'
import axios from 'axios'
const {BASE_URL} = require('../../prod.env')

export default {
  name: "EditReview",
  data() {
    return {
      form: {},
      imageUrl: null
    }
  },
  methods: {
    onTextChange(evt) {
      this.form[evt.target.name] = evt.target.value
    },
    onRadioClick(evt) {
      this.form.ratings = evt.target.value
    },  
    onSubmit() {
      // Submit Data
      axios.post(BASE_URL + "/review", {...this.form, imageUrl: this.imageUrl})
      .then((res) => {
        console.log(res)
      })
    },
    uploadImageSuccess(x) {
      this.imageUrl = x.originalUrl
    },
    uploadImageError(error) {
      console.log('Error: ', error)
    }
  },
  components: {
    Uploadcare,
  },
};
</script>

<style>
#writereviewpage {
  height: 100vh;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.label-write {
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
}

.form-check-input {
  display: inline-block;
}

.title {
  font-family: Verdana;
}
.write-review-section {
  display: flex !important;
  justify-content: center !important;
}
.uploadBtn {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  background: black;
  color: white;
}
</style>
