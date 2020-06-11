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

<style lang="css" src="./css/main.css"></style>
