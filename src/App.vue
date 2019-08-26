<template>
  <v-app>
    <v-content>
      <Navbar></Navbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Satisfy&display=swap");
.theme--light.v-application {
  background: white !important;
}

body {
  overflow-x: hidden;
}
html {
  font-size: 16px;
}
</style>
