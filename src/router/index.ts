import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import { requireAuth, requireGuest } from "./guards";

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
      component: () => import("@/views/DashboardView.vue"),
      beforeEnter: requireAuth, // Require authentication
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
      beforeEnter: requireGuest, // Redirect to dashboard if already logged in
    },

    {
      path: "/signup",
      name: "Signup",
      component: () => import("@/views/SignupView.vue"),
      beforeEnter: requireGuest, // Redirect to dashboard if already logged in
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("@/views/ProductsView.vue"),
      beforeEnter: requireAuth, // Require authentication
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("@/views/CategoriesView.vue"),
      beforeEnter: requireAuth, // Require authentication
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("@/views/SettingsView.vue"),
      beforeEnter: requireAuth, // Require authentication
    },

    // Catch-all route for 404 pages
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      redirect: "/",
    },
  ],
});

export default router;
