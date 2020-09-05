<template >
  <div>
    <header class="header1">
      <p class="hTitle">I'm Victor</p>
      <p class="hSubtitle1">
        a web
        <strong style="font-style: italic">pro</strong>grammer
      </p>
    </header>
    <v-img src="../assets/orangeb.png" alt="decorationImg"></v-img>
    <div class="projectsText no-overflow">
      <div class="cvpic no-overflow"></div>

      <h2 data-aos="fade-right" data-aos-duration="2000" class="colorAbout1 no-overflow">Hey there!</h2>
      <p
        data-aos="fade-left"
        data-aos-duration="2000"
        class="colorAbout2 no-overflow"
      >I'm Victor Ribera, a junior web developer / designer based in Barcelona, Spain. I've always had a passion for design and IT in general and so I decided to pursue my goal of becoming a web developer.</p>
    </div>
    <pre class="separator no-overflow">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1 no-overflow"
    >What I can do</h1>

    <v-container class="no-overflow">
      <!-- DESIGN DEVELOP -->
      <v-layout class="no-overflow" row wrap justify-center>
        <v-flex  class="no-overflow center-pic" xs9 sm5 md2 xl2>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics no-overflow"
            src="../assets/develop.png"
            alt="designIMG"
          ></v-img>
        </v-flex>
        <v-flex class="no-overflow" xs10 md5 xl3 align-self-center>
          <h2
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout1 no-overflow"
          >Design / Develop</h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout2 margin-b no-overflow"
          >
            As a junior web developer I'm getting better and better at developing by the day so there is a big chance that I know how to create your website. Im confident on my skills in the front-end area and I'm currently working on my back-end skills.<br>
            When it comes designing, I focus the most on UX and accessibility. I like flat design and cool typography.
          </p>
        </v-flex>
      </v-layout>
      <br />
      <!-- TECH SKILLS -->
      <v-layout class="no-overflow" row wrap justify-center>
        <v-flex class="no-overflow" xs10 md5 xl3 align-self-center order-md1 order-xs2>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout1 no-overflow"
          >Tech Skills</h2>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout2 no-overflow"
          >
            As of now, I've learned some front-end languages and I'm in the process of learning back end in order to become a full stack developer.
            <br />
            <br />♢HTML ♢CSS ♢JS ♢BOOTSTRAP ♢SASS ♢JQUERY ♢REACT ♢MATERIALUI ♢VUE ♢VUETIFY ♢GIT ♢JEST ♢NODE ♢EXPRESS ♢MONGODB ♢EJS ♢MONGOOSE ♢LARAVEL.BLADES ♢FIREBASE ♢PASSPORT.JS ♢OAUTH2.0 ♢UNIT-TESTING ♢CONTENTFUL
          </p>
        </v-flex>
        <v-flex class="no-overflow center-pic" xs9 sm5 md2 xl2 order-md2 order-xs1>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics no-overflow"
            src="../assets/skills.png"
            alt="skillsIMG"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>


    <pre class="separator no-overflow">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1 no-overflow"
    >More about me</h1>
    <v-container class="no-overflow">

      <!-- ME -->
      <v-layout class="no-overflow" row wrap justify-center>
        <v-flex  class="no-overflow center-pic" xs9 sm5 md2 xl2>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics no-overflow"
            src="../assets/profile.png"
            aboutMeIMG
          ></v-img>
        </v-flex>
        <v-flex class="no-overflow" xs10 md5 xl3 align-self-center>
          <h2
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout1 no-overflow"
          >Me</h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout2 margin-b no-overflow"
          >I've been living 30km away from Barcelona in a town called La Garriga since I was born in 1992. Whilst always fascinated by technology and design, I chose to study International Trade and Human Resources. I've always liked working with and for the people, so I enjoyed working as an HR Generalist, but it was not my passion, so in the end, I made the jump and started pursuing a web development career.</p>
        </v-flex>
      </v-layout>
      <br />
      <!-- HOBBIES -->
      <v-layout class="no-overflow" row wrap justify-center>
        <v-flex class="no-overflow" xs10 md5 xl3 align-self-center order-md1 order-xs2>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout1 no-overflow"
          >Hobbies</h2>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout2 margin-b no-overflow"
          >There are four things I really love: martial arts, reading, videogames and hiking. I've always been into sports and when I was 15 I started training martial arts, nowadays I'm a mma instructor and brasilian jiu-jitsu practitioner. When it comes to reading, fantasy novels and mythology books are my go to.</p>
        </v-flex>
        <v-flex  class="no-overflow center-pic" xs9 sm5 md2 xl2 order-md2 order-xs1>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics no-overflow"
            src="../assets/reading.png"
            alt="Hobbies"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <pre class="separator no-overflow">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1 no-overflow"
    >Download my CV</h1>

    <v-flex class="no-overflow" justify-center row style="margin:0">
      <v-btn
        data-aos="fade-right"
        data-aos-duration="2000"
        elevation="6"
        class="pdfbtn no-overflow"
        @click="esp"
      >
        <v-icon>mdi-download</v-icon>Spanish
      </v-btn>
      <v-btn
        data-aos="fade-left"
        data-aos-duration="2000"
        elevation="6"
        class="pdfbtn no-overflow"
        @click="eng"
      >
        <v-icon>mdi-download</v-icon>English
      </v-btn>
    </v-flex>

    <v-img src="../assets/footer1.png" alt="footer-decoration"></v-img>
    <Footer class="footer1"></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      url2: require("../assets/cveng.pdf"),
      url: require("../assets/cvesp.pdf")
    };
  },
  components: {
    Footer
  },
  methods: {
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV-ESP.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    forceFileDownload2(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV-ENG.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    esp() {
      axios({
        method: "get",
        url: this.url,
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response);
        })
        .catch(() => console.log("error occured"));
    },
    eng() {
      axios({
        method: "get",
        url: this.url2,
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload2(response);
        })
        .catch(() => console.log("error occured"));
    }
  },
  mounted() {}
};
</script>

<style></style>
