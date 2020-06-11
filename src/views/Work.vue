<template>
  <div>
    <div>
      <header class="header2">
        <!-- <p class="hTitle">Work</p> -->
      </header>
      <v-img class="mirrorIMGg" src="../assets/green2b.png"></v-img>
      <div class="projectsText">
        <img
          data-aos="fade-down"
          data-aos-duration="2000"
          class="pencil"
          src="../assets/pencil.png"
        />
        <h1
          data-aos="fade-up"
          data-aos-duration="2000"
          style="color: #031d22;"
        >Lately I've been up to..</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          style="color: #031d22; padding-bottom:2em;"
        >Here's a selection of some recent work. I've been dedicating most of my time on trying things and learning new languages.</p>
      </div>

      <!-- TGIF TRANSPARENCY -->
      <v-img src="../assets/work1.png"></v-img>
      <div class="projects project1">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/tgifproject.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>TGIF Transparency</h2>
          <p>
            Site that shows information about senators and congressmen obtained from ProPublica RestAPI. Mainly created to practice filtering.
            <br />
            <br />♢JS ♢VUE ♢JQUERY ♢BOOTSTRAP ♢NETLIFY
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
      </div>

      <!-- NEWSLETTER -->
      <v-img src="../assets/work2.png"></v-img>
      <div class="projects project2">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG2"
          src="../assets/newsletterfram1.png"
        />
      </div>
      <div class="projectDescription2 no-overflow">
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2>VRC Newsletter</h2>
          <p>
            Basic newsletter subscription connected to Mailchimp as my introduction to back-end with node.
            <br />
            <br />♢JS ♢BOOTSTRAP ♢NODE ♢NODE ♢EXPRESS
          </p>
          <v-btn
            target="_blank"
            href="https://vrc-newsletter.herokuapp.com/"
            class="projectBTN"
            color="#9bb36f"
          >
            <span style="color:#031d22">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- SIMON GAME-->
      <v-img src="../assets/work3.png"></v-img>
      <div class="projects project3">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/simonproject.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>Simon Game</h2>
          <p>
            Site where you can play the Simon memory game. Has its own database to keep the highscores up to date. Made to practice JS logic, event listeners and Firebase database.
            <br />
            <br />♢JS ♢JQUERY ♢NETLIFY
          </p>
          <v-btn target="_blank" href="https://vsimon.netlify.com/" class="projectBTN">
            <span style="color:#9bb36f">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- MG TEAM -->
      <v-img src="../assets/work4.png"></v-img>
      <div class="projects project4">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/mgproject.png"
        />
      </div>
      <div class="projectDescription2 no-overflow">
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2>MG Team</h2>
          <p>
            The official MG Team bjj/mma site, component-oriented where you can find all the information related to the team including schedules, filters, comments section, gallery, contact form etc. Big screens display is still pending.
            <br />
            <br />♢VUE ♢VUETIFY ♢WEBPACK ♢NPM ♢JQUERY ♢JS ♢FIREBASE ♢AXIOS ♢SMTP
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
      </div>

      <!-- NODE BLOG-->
      <v-img src="../assets/work3.png"></v-img>
      <div class="projects project3">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/blogproject.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>VRC Blog</h2>
          <p>
            Blog where you can create single pages dynamicaly for each posts submited in a hidden page (/compose).
            <br />
            <br />♢JS ♢EJS ♢NODE ♢EXPRESS ♢MONGOOSE ♢MONGODB
          </p>
          <v-btn target="_blank" href="https://vrc-blog.herokuapp.com/" class="projectBTN">
            <span style="color:#9bb36f">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- TO DO LIST -->
      <v-img src="../assets/work4.png"></v-img>
      <div class="projects project4">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG2"
          src="../assets/todolistframe1.png"
        />
      </div>
      <div class="projectDescription2 no-overflow">
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2>VRC To-Do-List</h2>
          <p>
            A ToDO list, where you can add and remove stuff aswell as dynamicaly create other lists. Made in order to learn more about templating and partials.
            <br />
            <br />♢JS ♢EJS ♢BOOTSTRAP ♢NODE ♢EXPRESS ♢MONGOOSE ♢MONGODB
          </p>
          <v-btn
            target="_blank"
            href="https://vrc-todolist.herokuapp.com/"
            class="projectBTN"
            color="#9bb36f"
          >
            <span style="color:#031d22">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- REACT NOTES -->
      <v-img src="../assets/work5.png"></v-img>
      <div class="projects project5">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/vrc-notes.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>React Notes</h2>
          <p>
            Notes app to practice with React (complex state, hooks, components, forms, props, conditional rendering, material-ui ...)
            <br />
            <br />♢REACT ♢MATERIAL-UI
          </p>
          <v-btn
            target="_blank"
            href="https://notes-vrc.herokuapp.com/"
            class="projectBTN"
            color="#08323a"
          >
            <span style="color:#9bb36f">View Site</span>
          </v-btn>
        </div>
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

<style></style>
