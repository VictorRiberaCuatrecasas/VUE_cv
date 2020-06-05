import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import AOS from "aos";
import "aos/dist/aos.css";
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-168545292-1',
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
