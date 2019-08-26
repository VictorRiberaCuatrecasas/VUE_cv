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
    <div class="projectsText">
      <div class="cvpic"></div>

      <h2 data-aos="fade-right" data-aos-duration="2000" class="colorAbout1">Hey there!</h2>
      <p
        data-aos="fade-left"
        data-aos-duration="2000"
        class="colorAbout2"
      >I'm a junior web developer / designer based in Barcelona, Spain. I've always had a passion for design and IT in general and so I decided to pursue my goal of becoming a web developer.</p>
    </div>
    <pre class="separator">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1"
    >What I can do</h1>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs10 md2 xl2>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics"
            src="../assets/html1.png"
          ></v-img>
        </v-flex>
        <v-flex xs10 md5 xl3 align-self-center>
          <h2
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout1"
          >Design / Develop</h2>
          <p data-aos="fade-left" data-aos-duration="2000" class="aboutText colorAbout2 margin-b">
            As a junior front end developer, everyday I'm getting better and better at developing, so I know how to create your website.
            When designing, I like to keep it simple. My goals are to focus on typography, flat design and landscape images.
          </p>
        </v-flex>
      </v-layout>
      <br />
      <v-layout row wrap justify-center>
        <v-flex xs10 md5 xl3 align-self-center order-md1 order-xs2>
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout1"
          >Tech Skills</h2>
          <p data-aos="fade-right" data-aos-duration="2000" class="aboutText colorAbout2">
            As of now, I've learned some front-end languages and I'm in the process of learning back end in order to become a full stack developer.
            <br />
            <br />♢HTML ♢CSS ♢JS ♢JQUERY ♢BOOTSTRAP ♢VUE ♢VUETIFY ♢GIT ♢FIREBASE ♢AXIOS
          </p>
        </v-flex>
        <v-flex xs10 md2 xl2 order-md2 order-xs1>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics"
            src="../assets/skillspic.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <pre class="separator">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1"
    >More about me</h1>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs10 md2 xl2>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics"
            src="../assets/me.png"
          ></v-img>
        </v-flex>
        <v-flex xs10 md5 xl3 align-self-center>
          <h2 data-aos="fade-left" data-aos-duration="2000" class="aboutText colorAbout1">Me</h2>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            class="aboutText colorAbout2 margin-b"
          >I've been living 30km away from Barcelona in a town called La Garriga since I was born in 1992. Whilst always fascinated by technology and design, I chose to study International Trade and Human Resources. I've always liked working with and for the people, so I enjoyed working as an HR Generalist, but it was not my passion, so in the end, I made the jump and started pursuing a web development career.</p>
        </v-flex>
      </v-layout>
      <br />
      <v-layout row wrap justify-center>
        <v-flex xs10 md5 xl3 align-self-center order-md1 order-xs2>
          <h2 data-aos="fade-right" data-aos-duration="2000" class="aboutText colorAbout1">Hobbies</h2>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            class="aboutText colorAbout2 margin-b"
          >There are three things I really love: martial arts, reading and videogames. I've always been into sports and over 10 years ago I started training martial arts, nowadays I'm a mma instructor and brasilian jiu-jitsu practitioner. When it comes to reading, fantasy novels and mythology books are my go to, I specially like Brandon Sanderson and the Norse and Egyptian mythology.</p>
        </v-flex>
        <v-flex xs10 md2 xl2 order-md2 order-xs1>
          <v-img
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="aboutPics"
            src="../assets/bjjabout.png"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <pre class="separator">......</pre>
    <h1
      data-aos="fade-up"
      data-aos-duration="2000"
      style="text-align:center; margin-bottom: 1em;font-size: 2.5em;
    font-weight: 400;"
      class="colorAbout1"
    >Download my CV</h1>

    <v-flex justify-center row style="margin:0">
      <v-btn
        data-aos="fade-right"
        data-aos-duration="2000"
        elevation="6"
        class="pdfbtn"
        @click="esp"
      >
        <v-icon>mdi-download</v-icon>Spanish
      </v-btn>
      <v-btn
        data-aos="fade-left"
        data-aos-duration="2000"
        elevation="6"
        class="pdfbtn"
        @click="eng"
      >
        <v-icon>mdi-download</v-icon>English
      </v-btn>
    </v-flex>

    <v-img src="../assets/footer1.png"></v-img>
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
.container {
  max-width: 100% !important; /* to change default .container media from vue*/
}
.aboutPics {
  width: 200px;
  height: 200px;
  margin: auto;
}
.aboutText {
  text-align: justify;
}
.cvpic {
  background-image: url("../assets/vic.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  margin-top: 10em;
  transition: 1s;
}
.cvpic:hover {
  background-image: url("../assets/cartoon1.png");
  border-radius: 50%;
}

.separator {
  margin: 2.5em 0 3em 0;
  font-size: 35px;
  color: #2100023f;
  text-align: center;
}
.colorAbout1 {
  color: #210002 !important;
}
.colorAbout2 {
  color: #280003 !important;
}
.projectsText h2 {
  max-width: 35%;
  text-align: center;
  padding: 0.5em 0 0.5em 0;
}

.pdfbtn {
  color: white !important;
  background-color: #210002 !important;
  margin: 0 1em 8em 0;
}

@media (max-width: 600px) {
  .cvpic {
    width: 150px;
    height: 150px;
  }
  .aboutText {
    text-align: center;
  }
  .margin-b {
    padding-bottom: 4em;
  }
}
</style>
