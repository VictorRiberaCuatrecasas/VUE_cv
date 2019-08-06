<template>
  <div>
    <header class="header3">
      <p class="hTitle">Contact</p>
    </header>
    <v-img class="mirrorIMG" src="../assets/blueb.png"></v-img>

    <v-img src="../assets/footer3.png"></v-img>
    <Footer class="footer3"></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
.footer3 {
  background-color: #00003b;
  color: white;
}
.footer2 {
  background-color: #031d22;
  color: white;
}
.footer1 {
  background-color: #210002;
  color: white;
}
.footerBottom {
  text-align: center;
  padding: 16px 0 16px 0;
  margin: 0;
}
.v-application p {
  margin-bottom: 0 !important;
}
footer div a img {
  max-height: 25px;
  max-width: 25px;
  margin: 16px 2em 10px;
}
footer div a img:hover {
  padding-bottom: 6px;
}
.footerNav {
  margin: 0px 2.5% 032px;
  text-decoration: none;
  color: white !important;
}
.footerNav:hover {
  font-weight: bold;
}
hr {
  border: none;
  height: 2px;
  /* Set the hr color */
  color: white; /* old IE */
  background-color: white; /* Modern Browsers */
}

footer div {
  display: flex;
  justify-content: center;
}

.header3 {
  background-image: url("../assets/blue.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -15vh;
}
</style>
