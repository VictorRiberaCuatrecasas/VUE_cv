<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <router-link to="/">About</router-link>
    <router-link to="/Work">Work</router-link>
    <router-link to="/Contact">Contact</router-link>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Satisfy&display=swap");
</style>
