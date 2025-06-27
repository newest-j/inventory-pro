import { userInfoStore } from "@/stores/UserStore";

export const requireAuth = (to: any, from: any, next: any) => {
  const userStore = userInfoStore();

  // Check authentication
  const isAuthenticated = userStore.checkAuth();

  if (isAuthenticated) {
    next(); // User is authenticated, allow access
  } else {
    // User is not authenticated, redirect to login
    next("/login");
  }
};

export const requireGuest = (to: any, from: any, next: any) => {
  const userStore = userInfoStore();

  // Check authentication
  const isAuthenticated = userStore.checkAuth();

  if (isAuthenticated) {
    // User is already authenticated, redirect to dashboard
    next("/dashboard");
  } else {
    next(); // User is not authenticated, allow access to login/signup
  }
};
