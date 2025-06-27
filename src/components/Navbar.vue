<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top custom-nav">
      <div class="container">
        <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
          <div
            class="logo-icon me-2"
            v-motion
            :initial="{ scale: 0, rotate: -180 }"
            :enter="{ scale: 1, rotate: 0 }"
            :duration="800"
          >
            <i class="fas fa-cube"></i>
          </div>
          <span
            class="logo-text"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0 }"
            :duration="600"
            :delay="300"
          >
            InventoryPro
          </span>
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon-custom">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center">
            <li
              class="nav-item"
              v-motion
              :initial="{ opacity: 0, y: -20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="500"
              :delay="400"
            >
              <a class="nav-link nav-hover" href="#features">Features</a>
            </li>
            <li
              class="nav-item"
              v-motion
              :initial="{ opacity: 0, y: -20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="500"
              :delay="500"
            >
              <a class="nav-link nav-hover" href="#pricing">Pricing</a>
            </li>
            <li
              class="nav-item"
              v-motion
              :initial="{ opacity: 0, y: -20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="500"
              :delay="600"
            >
              <a class="nav-link nav-hover" href="#contact">Contact</a>
            </li>
            <li
              class="nav-item ms-3"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :enter="{ opacity: 1, scale: 1 }"
              :duration="500"
              :delay="700"
            >
              <router-link to="/login" class="btn btn-glass me-2 hover-scale"
                >Login</router-link
              >
            </li>
            <li
              class="nav-item"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :enter="{ opacity: 1, scale: 1 }"
              :duration="500"
              :delay="800"
            >
              <router-link to="/signup" class="btn btn-gradient hover-lift"
                >Get Started</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Navigation */
.custom-nav {
  background: rgba(10, 14, 26, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.logo-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
}

.nav-hover {
  color: #94a3b8 !important;
  transition: all 0.3s ease;
  position: relative;
}

.nav-hover:hover {
  color: #6366f1 !important;
  transform: translateY(-2px);
}

/* Custom Hamburger Menu */
.navbar-toggler {
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  border-color: #6366f1 !important;
  background: rgba(99, 102, 241, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(99, 102, 241, 0.25);
}

.navbar-toggler-icon-custom {
  display: inline-block;
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
}

.navbar-toggler-icon-custom span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.navbar-toggler-icon-custom span:nth-child(1) {
  top: 2px;
}

.navbar-toggler-icon-custom span:nth-child(2) {
  top: 9px;
}

.navbar-toggler-icon-custom span:nth-child(3) {
  top: 16px;
}

/* Animated hamburger when collapsed/expanded */
.navbar-toggler[aria-expanded="true"]
  .navbar-toggler-icon-custom
  span:nth-child(1) {
  top: 9px;
  transform: rotate(135deg);
}

.navbar-toggler[aria-expanded="true"]
  .navbar-toggler-icon-custom
  span:nth-child(2) {
  opacity: 0;
  left: -20px;
}

.navbar-toggler[aria-expanded="true"]
  .navbar-toggler-icon-custom
  span:nth-child(3) {
  top: 9px;
  transform: rotate(-135deg);
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
  color: white;
}

.btn-glass {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: white;
}

.btn-outline-glass {
  background: transparent;
  border: 2px solid rgba(99, 102, 241, 0.5);
  color: #6366f1;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.btn-outline-glass:hover {
  background: rgba(99, 102, 241, 0.1);
  border-color: #6366f1;
  transform: translateY(-2px);
  color: #6366f1;
}

/* Animation classes */
.hover-scale {
  transition: all 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Mobile responsive adjustments */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(10, 14, 26, 0.95);
    backdrop-filter: blur(20px);
    margin-top: 1rem;
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-item {
    margin-bottom: 0.5rem;
  }

  .btn-glass,
  .btn-gradient {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
