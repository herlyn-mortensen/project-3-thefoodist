<template>
  <div id="register-user" style="text-align: left">
    <div class="boundary">
      <h1>Register</h1>
      <div>
        <label class="inputLabel">Username</label>        
        <input
          class="inputText"
          type="text"
          placeholder="Your username"
          v-model="username"
        />
        <div class="error" v-if="usernameOk === false && buttonHaveBeenClicked">
          User name must have at least 7 characters
        </div>
      </div>
      <div>
        <label class="inputLabel">Password</label>
        <input
          class="inputText"
          type="text"
          placeholder="Your name.."
          v-model="password"
        />
        <div class="error" v-if="passwordOk === false && buttonHaveBeenClicked">
          Password must have at least one special characters
        </div>
      </div>
      <button class="submitButton"
        text="Register"
        link=""
        v-on:click="regsiter">Register
      </button>
      
      
      
    </div>
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
  components: {
    
  },
  methods: {
    regsiter: function () {
      this.buttonHaveBeenClicked = true;
    },
  },
};
</script>

<style scoped>
#register-user {
  height: 100vh;
  background-color: #f8f9fa;
}
.error {
  color: red;
}
.inputText {
  height: 48ox;
  font-size: 1.25rem;
  border-radius: 5px;
  border: 1px solid #555;
  border-color: rgb(226, 226, 226);
  padding: 12px 20px;
  display: inline-block;
  width:100%
}
.boundary{
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.inputLabel{
  font-size: 1.5rem;
  font-weight: bold;
}

.submitButton{
  margin-top: 10px;
  background-color:  white;
  font-family: 'Montserrat-Regular';
  font-weight: 1.5rem;
  font-weight: bold;
  border-radius: 40px;
  color: black;
  border: 2px black solid;  
  padding: 5px;
  height:48px;
  width: 100%;
}

</style>
