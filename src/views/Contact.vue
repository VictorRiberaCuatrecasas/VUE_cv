<template>
  <div>
    <header class="header3">
      <!-- <p class="hTitle">Contact</p> -->
    </header>
    <v-img class="mirrorIMG" src="../assets/bluebt.png"></v-img>

    <v-flex justify-center row style="margin:0">
      <v-btn
        data-aos="flip-right"
        data-aos-duration="1000"
        style="background-color:#000035; margin: 6em 0 6em 0"
      >
        <a class="contactMail" href="mailto:victorribera92@gmail.com">✉ MESSAGE ME</a>
      </v-btn>
    </v-flex>
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

<style></style>
