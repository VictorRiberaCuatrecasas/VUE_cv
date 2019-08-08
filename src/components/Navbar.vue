<template>
  <v-toolbar flat class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <img class="logo" src="../assets/logo.png" />

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <div>
        <div @click="navCollapseColor()">
          <router-link id="firstNav" v-bind:class="{selectedPage}" class="navBtn" to="/">About</router-link>
        </div>
      </div>
      <div>
        <div @click="navCollapseColor()">
          <router-link id="secondNav" v-bind:class="{selectedPage}" class="navBtn" to="/Work">Work</router-link>
        </div>
      </div>
      <div>
        <div @click="navCollapseColor()">
          <router-link
            id="thirdNav"
            v-bind:class="{selectedPage}"
            class="navBtn"
            to="/Contact"
          >Contact</router-link>
        </div>
      </div>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
const OFFSET = 20;
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      selectedPage: false
    };
  },

  mounted() {
    if (this.$route.path == "/") {
      $("#firstNav").addClass("selectedPage");
    }
    if (this.$route.path == "/Work") {
      $("#secondNav").addClass("selectedPage");
    }
    if (this.$route.path == "/Contact") {
      $("#thirdNav").addClass("selectedPage");
    }
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    test() {
      console.log(this.$route.path);
    },
    navCollapseColor() {
      this.selectedPage = false;
      event.target.classList.add("selectedPage");
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      //

      if (window.scrollY > 10) {
        $(".navbar").addClass("navbarUP");
        // $(".navBtn").addClass("btnColor");
      }

      //
      $(function() {
        var $win = $(window);

        $win.scroll(function() {
          if ($win.scrollTop() == 0) {
            $(".navbar").removeClass("navbarUP");
            // $(".navBtn").removeClass("btnColor");
          }
        });
      });
      //
    }
  }
};
</script>

<style>
.logo {
  height: 10vh;
  width: 10vh;
  position: fixed;
  top: 2.6vh;
}
.navbar {
  height: 15vh;
  padding-top: 6.7vh;
  top: 0;
  position: sticky !important;
  transform: translate3d(0, 0, 0);
  background-color: transparent !important;
  transition: 0.1s all ease-out;
  line-height: 1.2vh;
  z-index: 10;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding-right: 0 !important;
}
.navbar.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}
.navBtn {
  text-decoration: none;
  color: rgb(233, 221, 221) !important;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.5vh;
  margin-right: 3vh;
}

/* in case i wanna change nav color when scrlling up */
/* .btnColor {
  color: white !important;
} */
.navbarUP {
  background-color: rgba(20, 17, 17, 0.982) !important;
}
.selectedPage {
  color: white !important;
  font-size: 4vh;
}
</style>
