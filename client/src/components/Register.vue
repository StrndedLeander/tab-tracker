<template>
<div>
  <h1>Register</h1>
  <form>
    <input type="email" name="email" v-model="email" placeholder="E-Mail adress">
    <input type="password" name="password" v-model="password" placeholder="Password">
    <button v-on:click="register">Register</button>
  </form>
</div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data)
    }
  }
};
</script>

<style scoped>

</style>
