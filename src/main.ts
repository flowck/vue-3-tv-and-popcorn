import axios from "axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { createApp } from "vue";

/**
 * Set base URL
 */
axios.defaults.baseURL = process.env.VUE_APP_API;

createApp(App).use(store).use(router).mount("#app");
