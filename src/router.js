import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Work",
      name: "work",
      component: Work
    },
    {
      path: "/Contact",
      name: "contact",
      component: Contact
    }
  ]
});
