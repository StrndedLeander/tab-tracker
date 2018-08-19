<template>
<div class="header">
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="title">
      <router-link class="links" to="/">Tab Tracker</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat class="ml-2" :to="{path: '/browse'}">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="{path: '/login'}">Sign In</v-btn>
      <v-btn flat :to="{path: '/register'}">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.links {
  text-decoration: none;
  color: white;
  margin-top: 20px;
}

.header {
  margin-bottom: 55px;
}

.title {
  font-weight: 600;
}
</style>
