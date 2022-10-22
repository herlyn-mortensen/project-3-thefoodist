<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"
        ><router-link to="/"
          ><img
            src="../../assets/images/minilogo.png"
            class="minilogo" /></router-link
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto mb-2 mb-lg-0">
          <div class="write">
            <router-link to="/WriteReview">Write Review</router-link>
          </div>
          <div class="find">
            <router-link to="/FindReview">Find Restaurant</router-link>
          </div>
        </div>
         <div class="d-flex">
          <appButton
            class="register"
            text="Business"
            link="/RegisterBusiness"
          />
          <appButton
            class="register"
            text="Login/Register"
            link="/RegisterBusiness"
          />
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
import appButton from "../atom/appButton.vue";

export default {
  name: "navigationBar",
  components: {
    appButton,
  },
};
</script>

<style>
.navbar-brand {
  font-family: Montserrat;
  padding: 10px;
}

a:link,
a:visited {
  text-decoration: none;
  color: black;
}

a:hover,
a:active {
  color: grey;
}

.write {
  padding-right: 10px;
  padding-top: 10px;
}

.find {
  padding-right: 10px;
  padding-top: 10px;
}

.minilogo {
  width: 60px;
  height: 40px;
}

.register {
  margin: 10px;
  display: flex;
}
</style>
