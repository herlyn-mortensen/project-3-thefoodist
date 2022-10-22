<template>
  <div>
    <div>
      <label>Username</label>
      <input type="text" v-model="username" />
      <div class="error" v-if="usernameOk === false && buttonHaveBeenClicked">
        User name must have at least 7 characters
      </div>
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="password" />
      <div class="error" v-if="passwordOk === false && buttonHaveBeenClicked">
        Password must have at least one special characters
      </div>
    </div>
    <button v-on:click="login">Log In</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      password: "",
      username: "",
      buttonHaveBeenClicked: false,
    };
  },
  computed: {
    usernameOk: function () {
      if (this.username.length >= 7) {
        return true;
      } else {
        return false;
      }
    },
    passwordOk: function () {
      if (
        this.password.includes("~") ||
        this.password.includes("!") ||
        this.password.includes("@") ||
        this.password.includes("#") ||
        this.password.includes("$") ||
        this.password.includes("%") ||
        this.password.includes("^") ||
        this.password.includes("*") ||
        this.password.includes("(") ||
        this.password.includes(")")
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    login: function () {
      this.buttonHaveBeenClicked = true;
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>