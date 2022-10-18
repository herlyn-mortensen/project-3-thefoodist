<template>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand"><img src="../../assets/images/minilogo.png" class="minilogo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Write a review</a>
                  <a class="nav-link" href="#">Find restaurant</a>
              </div>
                <div class="d-flex justify-content-end">
                  <appButton class="register" text="Register"/>
                </div>
            </div>
        </div>
      </nav>
</template>
 
<script>
import appButton from '../atom/appButton.vue'

export default {
  name: 'navigationBar',
  components: {
    appButton
  }
}

</script>
 
<style>
.navbar-brand {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.minilogo {
  width: 60px;
  height: 40px;
}

/*.register-button {
  display: flex;
  align-self: flex-end;
} 

.register {
  display: flex;
} 
*/
</style>
