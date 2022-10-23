<template>
  <div id="findreview">
    <h1>Search</h1>
    <form>
      <label class="label-find">Restaurant Name</label>
      <input type="text" class="form-control-find" name="restaurant" />
    </form>

    <div class="d-flex buttons-find">
      <div class="p-2">
        <input type="submit" class="btn btn-dark mt-3" value="Search" />
      </div>
      <div class="p-2">
        <input type="submit" class="btn btn-dark mt-3" value="Delete" />
      </div>
      <div class="p-2">
        <input
          type="submit"
          class="btn btn-light border-dark mt-3"
          value="Edit"
        />
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
  width: 500px;
  display: flex;
  margin-left: 20px;
}

.label-find {
  display: flex;
  margin-left: 20px;
}

.buttons-find {
  margin-left: 20px;
}
</style>
