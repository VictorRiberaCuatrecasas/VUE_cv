<template>
  <v-app>
    <v-content>
      <Navbar class="body"></Navbar>
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

/* fix right overflow on mobile screen caused by AOS animations */
.no-overflow {
  overflow: hidden !important;
}
.testN {
  overflow: visible !important;
}

html {
  font-size: 16px;
}
</style>
