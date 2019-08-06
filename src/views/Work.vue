<template>
  <div>
    <div>
      <header class="header2">
        <p class="hTitle">Work</p>
      </header>
      <v-img class="mirrorIMGg" src="../assets/green2b.png"></v-img>
      <div class="projectsText">
        <img class="pencil" src="../assets/pencil.svg" />
        <h1>Lately I've been up to..</h1>
        <p>Here's a selection of some recent work. I've been dedicating most of my time on trying things and learning new languages.</p>
      </div>

      <v-img src="../assets/work1.png"></v-img>
      <div class="projects project1">
        <img class="projectIMG" src="../assets/tgifproject.png" />
      </div>
      <div class="projectDescription1">
        <h2>TGIF Transparency</h2>
        <p>
          Site that shows information about senators and congressmen obtained from ProPublica RestAPI. Mainly created to practise filtering.
          <br />
          <br />▯JS ▯VUE ▯JQUERY ▯BOOTSTRAP ▯NETLIFY
        </p>
        <v-btn
          target="_blank"
          href="https://tgiftransparency.netlify.com/"
          class="projectBTN"
          color="#08323a"
        >
          <span style="color:#9bb36f">View Site</span>
        </v-btn>
      </div>

      <v-img src="../assets/work2.png"></v-img>
      <div class="projects project2">
        <img class="projectIMG" src="../assets/tindogproject.png" />
      </div>
      <div class="projectDescription2">
        <h2>Tindog</h2>
        <p>
          Very basic site made only to practise responsive design with bootstrap grid and classes.
          <br />
          <br />▯BOOTSTRAP ▯NETLIFY
        </p>
        <v-btn
          target="_blank"
          href="https://vtindog.netlify.com/"
          class="projectBTN"
          color="#9bb36f"
        >
          <span style="color:#031d22">View Site</span>
        </v-btn>
      </div>

      <v-img src="../assets/work3.png"></v-img>
      <div class="projects project3">
        <img class="projectIMG" src="../assets/simonproject.png" />
      </div>
      <div class="projectDescription1">
        <h2>Simon Game</h2>
        <p>
          Site where you can play the Simon memory game. Has its own database to keep the highscores up to date. Made to practise JS logic, even listeners and Firebase database.
          <br />
          <br />▯JS ▯JQUERY ▯NETLIFY
        </p>
        <v-btn
          target="_blank"
          href="https://vsimon.netlify.com/"
          class="projectBTN"
          color="#08323a"
        >
          <span style="color:#9bb36f">View Site</span>
        </v-btn>
      </div>

      <v-img src="../assets/work4.png"></v-img>
      <div class="projects project4">
        <img class="projectIMG" src="../assets/mgproject.png" />
      </div>
      <div class="projectDescription2">
        <h2>MG Team</h2>
        <p>
          The official MG Team bjj/mma site, component-oriented where you can find all the information related to the team including schedules, filters, comments section, gallery, contact form etc. Big screens display is still pending.
          <br />
          <br />▯VUE ▯VUETIFY ▯WEBPACK ▯NPM ▯JQUERY ▯JS ▯FIREBASE ▯AXIOS ▯SMTP
        </p>
        <v-btn
          target="_blank"
          href="https://mg-bjj.firebaseapp.com/"
          class="projectBTN"
          color="#9bb36f"
        >
          <span style="color:#031d22">View Site</span>
        </v-btn>
      </div>
      <v-img src="../assets/work5.png"></v-img>
      <div class="projects project5">
        <img class="projectIMG" src="../assets/allaproject.png" />
      </div>
      <div class="projectDescription1">
        <h2>Allá Que Voy!</h2>
        <p>
          Setting up my sisters traveling blog with Wordpress. Will be adding more custom css to in order to make her happy and practise with Wordpress at the same time.
          <br />
          <br />▯WORDPRESS ▯CSS
        </p>
        <v-btn
          target="_blank"
          href="https://www.allaquevoy.com/"
          class="projectBTN"
          color="#08323a"
        >
          <span style="color:#9bb36f">View Site</span>
        </v-btn>
      </div>
      <v-img src="../assets/worklast.png"></v-img>
    </div>

    <v-img src="../assets/footer2.png"></v-img>
    <Footer class="footer2"></Footer>
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
.work1 {
  background-image: url("../assets/work1.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
.projects {
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  justify-content: center;
}
.projectsText {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.projectsText h1 {
  max-width: 35%;
  text-align: center;
  padding: 0.5em 0 0.5em 0;
}
.projectsText p {
  max-width: 35%;
  text-align: center;
  padding-bottom: 3em;
}
.projectDescription1 {
  background-color: #031d22;
  color: #9bb36f;
  text-align: center;
}
.projectDescription1 h2 {
  max-width: 35%;
  margin: auto;
}
.projectDescription1 p {
  margin: auto;
  max-width: 35%;
  margin-bottom: 0 !important;
}
.projectDescription2 {
  background-color: #9bb36f;
  color: #031d22;
  text-align: center;
}
.projectDescription2 h2 {
  max-width: 35%;
  margin: auto;
}
.projectDescription2 p {
  margin: auto;
  max-width: 35%;
  margin-bottom: 0 !important;
}
.projectBTN {
  margin: 1em 0 3em 0;
}

.projectIMG {
  max-width: 50%;
  padding-top: 2em;
}
.pencil {
  width: 20%;
  max-width: 250px;
  padding-top: 40%;
}
.project1 {
  background-color: #031d22;
}
.project2 {
  background-color: #9bb36f;
}
.project3 {
  background-color: #031d22;
}
.project4 {
  background-color: #9bb36f;
}
.project5 {
  background-color: #031d22;
}
.header2 {
  background-image: url("../assets/green2.png");
  height: 100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -15vh;
}

@media (max-width: 600px) {
  .projectIMG {
    max-width: 90%;
    height: 250px;
  }
  .projectsText h1 {
    max-width: 90%;

    font-size: 1.5em;
  }
  .projectsText p {
    max-width: 80%;
  }
  .projectDescription1 h2 {
    max-width: 90%;
  }
  .projectDescription1 p {
    max-width: 90%;
  }
  .projectDescription2 h2 {
    max-width: 90%;
  }
  .projectDescription2 p {
    max-width: 90%;
  }
}
@media (min-width: 2000px) {
  .projectsText p {
    max-width: 20%;
  }
  .projectDescription1 h2 {
    max-width: 20%;
  }
  .projectDescription1 p {
    max-width: 20%;
  }
  .projectDescription2 h2 {
    max-width: 20%;
  }
  .projectDescription2 p {
    max-width: 20%;
  }
  .projectIMG {
    max-width: 30%;
  }
}
</style>
