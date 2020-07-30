import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import VueAnalytics from "vue-analytics";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyD4Vu8V6ilX-0_GEQBs99Ml7rK8gqP_RiY",
  authDomain: "victor-ribera.firebaseapp.com",
  databaseURL: "https://victor-ribera.firebaseio.com",
  projectId: "victor-ribera",
  storageBucket: "victor-ribera.appspot.com",
  messagingSenderId: "704340295662",
  appId: "1:704340295662:web:b1aa4131ffec2b2e5b98ff",
  measurementId: "G-1XG4VQF66E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-168545292-1",
  router
});

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
