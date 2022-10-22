<template>
<div>
  <h1>Search</h1>
    <form>
      <label>Restaurant Name</label>
      <input type="text" class="form-control" name="restaurant"/>

      <div>
          <input type="submit" class="btn btn-dark mt-3" value="Search"/>
      </div>
    </form>

    <form>
        <div>
            <input type="submit" class="btn btn-dark mt-3" value="Delete"/>
        </div>
    </form>
    <form>
        <div>
            <input type="submit" class="btn btn-light border-dark mt-3" value="Edit"/>
        </div>
    </form>
</div>
</template>
 
<script>
export default {
  name: 'FindReview',
}
</script>
 
<style>
.title {
  font-family: Verdana;
}
div {
  background-color: #f8f9fa;
}
</style>
