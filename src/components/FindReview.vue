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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindReview",
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
