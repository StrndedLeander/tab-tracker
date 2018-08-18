<template>
<v-toolbar fixed class="cyan" dark>
  <v-toolbar-title>Tab Tracker</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat><router-link class="links" to="/login">Sign In</router-link></v-btn>
    <v-btn flat><router-link class="links" to="/register">Sign Up</router-link></v-btn>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.links{
  text-decoration: none;
  color: white;
}
</style>
