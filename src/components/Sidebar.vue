<template>
  <div>
    <div class="d-none d-md-block sidebar bg-white border-end">
      <div class="sidebar-header p-3">
        <h4 class="text-primary fw-bold mb-0">InventoryPro</h4>
      </div>
      <nav class="sidebar-nav">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/dashboard"
            >
              <i class="bi bi-grid-1x2-fill me-2"></i>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/products"
            >
              <i class="bi bi-box-seam me-2"></i>
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/categories"
            >
              <i class="bi bi-tags me-2"></i>
              Categories
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/settings"
            >
              <i class="bi bi-gear me-2"></i>
              Settings
            </router-link>
          </li>

          <button @click="handleLogout" class="btn btn-danger">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </ul>
      </nav>
    </div>

    <!-- offcanvas -->

    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          <i class="fas fa-cube"></i>Inventory Pro
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/dashboard"
            >
              <i class="bi bi-grid-1x2-fill me-2"></i>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/products"
            >
              <i class="bi bi-box-seam me-2"></i>
              Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/categories"
            >
              <i class="bi bi-tags me-2"></i>
              Categories
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link d-flex align-items-center"
              to="/settings"
            >
              <i class="bi bi-gear me-2"></i>
              Settings
            </router-link>
          </li>

          <button @click="handleLogout" class="btn btn-danger">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { userInfoStore } from "../stores/UserStore";

const router = useRouter();
const userStore = userInfoStore();

const handleLogout = async () => {
  await userStore.logout(router);
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.sidebar-header {
  border-bottom: 1px solid #dee2e6;
}

.sidebar-nav {
  padding: 1rem 0;
}

.sidebar .nav-link {
  color: #6c757d;
  padding: 0.75rem 1.5rem;
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.sidebar .nav-link:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
  transform: translateX(5px);
}

.router-link-active {
  background-color: #e7f1ff;
  color: #0d6efd !important;
  border-right: 3px solid #0d6efd;
  font-weight: 600;
}
</style>
