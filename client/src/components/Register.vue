<template>
<v-layout column>
  <v-flex xs6 offset-xs3 class="flexContainer">
    <div class="white elevation-2">
      <v-toolbar flat dense dark class="cyan">
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="px-4 py-2">
        <form>
          <v-text-field label="E-Mail" v-model="email"></v-text-field><br>
          <v-text-field label="Password" v-model="password"></v-text-field>
        </form><br>
      </div>
      <div class="error" v-html="error"></div>
      <v-btn dark class="cyan" @click="register">Register</v-btn>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
};
</script>

<style scoped>
.flexContainer {
  width: 53%;
}
</style>
