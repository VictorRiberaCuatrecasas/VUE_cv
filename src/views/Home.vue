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
    <footer class="footer1">
      <div>
        <a target="_blank" href="https://github.com/VictorRiberaCuatrecasas">
          <img src="../assets/github.png" alt />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/victor-r-c/">
          <img src="../assets/linkedin.png" alt />
        </a>
      </div>
      <div>
        <router-link class="footerNav" to="/">About</router-link>
        <router-link class="footerNav" to="/Work">Work</router-link>
        <router-link class="footerNav" to="/Contact">Contact</router-link>
      </div>
      <hr />
      <p class="footerBottom">
        &copy; {{ new Date().getFullYear() }} |
        <strong>Victor Ribera</strong>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
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
