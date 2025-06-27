import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { userInfoStore } from "./stores/UserStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import SideBar from "./components/SideBar.vue";
import Offcanvas from "./components/Offcanvas.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.component("side-bar", SideBar);
app.component("offcanvas", Offcanvas);

// Initialize authentication check
const userStore = userInfoStore();
userStore.checkAuth();

app.mount("#app");
