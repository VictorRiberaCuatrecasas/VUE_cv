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
      <div class="projects projectbg1">
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
           Responsive Site that shows information about senators and congressmen obtained from ProPublica RestAPI. Mainly created to practice filtering.
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

      <!-- RECIPES -->
      <v-img src="../assets/work2.png"></v-img>
      <div class="projects projectbg2">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/recipesproject.png"
        />
      </div>
      <div class="projectDescription2 no-overflow">
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2>Recipes Searcher</h2>
          <p>
            Responsive Web sample to improve on React dynamic routing and hooks. Deployment to heroku with router and api usage.
            <br />
            <br />♢JS ♢REACT ♢HEROKU
          </p>
          <v-btn
            target="_blank"
            href="https://vrc-recipes.herokuapp.com/"
            class="projectBTN"
            color="#9bb36f"
          >
            <span style="color:#031d22">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- SIMON GAME-->
      <v-img src="../assets/work3.png"></v-img>
      <div class="projects projectbg1">
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
      <div class="projects projectbg2">
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
            <br />♢VUE ♢VUETIFY ♢JQUERY ♢JS ♢FIREBASE ♢AXIOS ♢SMTP
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
      <div class="projects projectbg1">
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
      <div class="projects projectbg2">
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

      <!-- COVID TRACKER-->
      <v-img src="../assets/work3.png"></v-img>
      <div class="projects projectbg1">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG2"
          src="../assets/covidproject.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>Covid Tracker</h2>
          <p>
            Responsive project that tracks covid info by API and displays it on different charts and labels using Chart.js and CountUp. Styled with Material UI and css modules.
            <br />
            <br />♢JS ♢REACT ♢CHART.JS ♢MATERIAL-UI ♢COUNTUP
          </p>
          <v-btn target="_blank" href="https://vrc-covid.herokuapp.com/" class="projectBTN">
            <span style="color:#9bb36f">View Site</span>
          </v-btn>
        </div>
      </div>

      <!-- MERCK -->
      <v-img src="../assets/work4.png"></v-img>
      <div class="projects projectbg2">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/merckproject.png"
        />
      </div>
      <div class="projectDescription2 no-overflow">
        <div data-aos="fade-left" data-aos-duration="2000">
          <h2>Colorectal Cancer CMS</h2>
          <p>
            Project made along with a design and scientific team. Planned as an iframe, built mostly with vue, chart.js and core.ui. Loads content by Jsons and has many functionalities amongst which: navigation through charts, paginators, videos & animations... Styled with vuetify and scss.
            <br />
            <br />♢JS ♢VUE ♢VUETIFY ♢CHART.JS ♢CORE.UI ♢SCSS ♢FONTAWESOME
          </p>
        </div>
      </div>

      <!-- RESORT -->
      <v-img src="../assets/work5.png"></v-img>
      <div class="projects projectbg1">
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          class="projectIMG"
          src="../assets/resortproject.png"
        />
      </div>
      <div class="projectDescription1">
        <div data-aos="fade-right" data-aos-duration="2000">
          <h2>VRC Resort</h2>
          <p>
            Responsive React Project as a sample for renting rooms, has a global state using Context, contents are loaded from Contentful and routes are created dynamicaly. Styled with Styled Components and React Icons.
            <br />
            <br />♢JS ♢REACT ♢MATERIAL-UI ♢CONTENTFUL ♢STYLED-COMPONENTS ♢NETLIFY
          </p>
          <v-btn
            target="_blank"
            href="https://vrc-resort.netlify.app/"
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
