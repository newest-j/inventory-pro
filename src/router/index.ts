import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: LandingView,
    },

    {
      path: "/dashboard",
      name: "Dashbaord",
      component: () => import("../views/DashboardView.vue"),
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },

    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("../views/SettingsView.vue"),
    },
  ],
});

export default router;
