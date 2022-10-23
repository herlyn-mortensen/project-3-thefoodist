<template>
  <div id="writereviewpage">
    <h2 class="write-review-section">Write Review</h2>

    <div class="write-review-section">
      <form class="filloutform">
        <div>
            <label class="label-write">Restaurant:</label>
            <input type="text" name="restaurant" class="form-control"/>
        </div>
        <div>
            <label class="label-write">Title:</label>
            <input type="text" name="title" class="form-control"/>
        </div> 
        <div>
            <label class="label-write">Date:</label>
            <input type="text" name="date" class="form-control"/>
        </div> 
        <div>
            <label class="label-write">Cuisine:</label>
            <input type="text" name="cuisine" class="form-control"/>
        </div>
        <div>
            <label class="label-write">Food ordered:</label>
            <input type="text" name="foodordered" class="form-control"/>
        </div>
        <div class="section">
            <label class="label-write">Write Review</label>
            <div>
            <textarea class="form-control-review" name="review" rows="4" cols="50"></textarea>
            </div>
        </div>
        <div>
            <label class="label-write">Ratings</label>  
            <input type="radio" class="form-check-input" name="ratings" value="1"/>
            <label class="form-check-label"><i class="fa-solid fa-star"></i></label>
            <input type="radio" class="form-check-input" name="ratings" value="2" />
            <label class="form-check-label"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
            <input type="radio" class="form-check-input" name="ratings" value="3"/>
            <label class="form-check-label"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
            <input type="radio" class="form-check-input" name="ratings" value="4"/>
            <label class="form-check-label"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
            <input type="radio" class="form-check-input" name="ratings" value="5"/>
            <label class="form-check-label"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
        </div>
        <div>
            <input type="submit" class="btn btn-dark mt-3"/>
        </div>
      </form>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'WriteReview',
}
</script>
 
<style>

#writereviewpage {
  height: 100vh;
}

.label-write {
  display: flex;
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
</style>
