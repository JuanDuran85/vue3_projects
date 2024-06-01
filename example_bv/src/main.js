import "./assets/main.css";

import Vue, { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

createApp(App).mount("#app");
