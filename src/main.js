import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import './assets/css/a.css';

import './assets/css/b.css';
import './assets/css/c.css';
import './assets/css/d.css';

import './assets/css/index.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
