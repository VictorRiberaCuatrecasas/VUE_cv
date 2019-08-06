<template>
  <div>
    <header class="header1">
      <p class="hTitle">I'm Victor</p>
      <p class="hSubtitle1">
        a web
        <strong style="font-style: italic">pro</strong>grammer
      </p>
    </header>
    <v-img class="mirrorIMG" src="../assets/orangeb.png"></v-img>

    <v-img src="../assets/footer1.png"></v-img>
    <Footer class="footer1"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.header1 {
  background-image: url("../assets/orange.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -15vh;
}
.hTitle {
  padding-top: 20vh;
  color: white;
  font-size: 10vh;
  font-family: "Satisfy", cursive;
  text-align: center;
  margin-bottom: 0 !important;
}
.hSubtitle1 {
  color: white;
  font-size: 3vh;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
.mirrorIMG {
}
</style>
