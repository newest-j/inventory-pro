<template>
  <div class="login-page">
    <!-- Background -->
    <div class="login-bg">
      <div class="floating-shapes">
        <div
          class="shape shape-1"
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :enter="{ scale: 1, opacity: 0.1 }"
          :duration="2000"
          :delay="500"
        ></div>
        <div
          class="shape shape-2"
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :enter="{ scale: 1, opacity: 0.1 }"
          :duration="2000"
          :delay="1000"
        ></div>
        <div
          class="shape shape-3"
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :enter="{ scale: 1, opacity: 0.1 }"
          :duration="2000"
          :delay="1500"
        ></div>
      </div>
    </div>

    <div class="login-container">
      <!-- Header -->
      <div class="login-header text-center mb-5">
        <router-link to="/" class="logo-link">
          <h2 class="logo gradient-text">InventoryPro</h2>
        </router-link>
        <p class="login-subtitle">Welcome back! Sign in to your account</p>
      </div>

      <!-- Main Content -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row g-0">
            <!-- Left Side - Login Form -->
            <div class="col-lg-6">
              <div
                class="login-form-container"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0 }"
                :duration="800"
                :delay="200"
              >
                <div class="form-header mb-4">
                  <h3 class="form-title">Sign In</h3>
                  <p class="form-subtitle">
                    Access your inventory management dashboard
                  </p>
                </div>

                <!-- Social Login -->
                <div class="social-login mb-4">
                  <button
                    class="btn btn-social btn-google hover-scale w-100 mb-3"
                    type="button"
                  >
                    <i class="fab fa-google me-2"></i>
                    Continue with Google
                  </button>
                  <button
                    class="btn btn-social btn-microsoft hover-scale w-100"
                    type="button"
                  >
                    <i class="fab fa-microsoft me-2"></i>
                    Continue with Microsoft
                  </button>
                </div>

                <div class="divider mb-4">
                  <span class="divider-text">or sign in with email</span>
                </div>

                <!-- Login Form -->
                <form @submit.prevent="onSubmit" class="login-form">
                  <div class="form-group hover-focus mb-3">
                    <label class="form-label">Email Address</label>
                    <div class="input-with-icon">
                      <i class="fas fa-envelope input-icon"></i>
                      <input
                        v-model="userStore.email"
                        type="email"
                        class="form-control"
                        placeholder="Enter your email address"
                        @input="userStore.validateEmail"
                      />
                      <p class="text-danger">
                        {{ userStore.error.email }}
                      </p>
                    </div>
                  </div>

                  <div class="form-group hover-focus mb-3">
                    <label class="form-label">Password</label>
                    <div class="password-input">
                      <i class="fas fa-lock input-icon"></i>
                      <input
                        v-model="userStore.password"
                        :type="showPassword ? 'text' : 'password'"
                        class="form-control"
                        placeholder="A1!b2@C3"
                        @input="userStore.validatePassword"
                      />
                      <button
                        @click="togglePassword"
                        type="button"
                        class="password-toggle"
                      >
                        <i
                          :class="
                            showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                          "
                        ></i>
                      </button>
                    </div>
                    <p class="text-danger">
                      {{ userStore.error.password }}
                    </p>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    class="btn btn-gradient w-100 btn-lg hover-lift mb-3"
                    :disabled="userStore.isLogging"
                  >
                    <!-- Bootstrap Spinner -->
                    <span
                      v-if="userStore.isLogging"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <!-- Sign In icon when not loading -->
                    <i v-else class="fas fa-sign-in-alt me-2"></i>

                    {{ userStore.isLogging ? "Signing In..." : "Sign In" }}
                  </button>
                </form>

                <!-- Signup Link -->
                <div class="signup-link text-center mt-4">
                  <p class="mb-0">
                    Don't have an account?
                    <router-link to="/signup" class="auth-link">
                      Create one here
                    </router-link>
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Side - Welcome Message -->
            <div class="col-lg-6">
              <div
                class="welcome-container"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0 }"
                :duration="800"
                :delay="400"
              >
                <div class="welcome-content">
                  <div class="welcome-icon mb-4">
                    <i class="fas fa-chart-line"></i>
                  </div>

                  <h4 class="welcome-title mb-3">
                    Welcome Back to InventoryPro
                  </h4>

                  <p class="welcome-description mb-4">
                    Continue managing your inventory with powerful analytics,
                    real-time tracking, and intelligent automation.
                  </p>

                  <!-- Feature Highlights -->
                  <div class="feature-highlights">
                    <div
                      class="feature-item"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :visible-once="{ opacity: 1, y: 0 }"
                      :duration="500"
                      :delay="600"
                    >
                      <div class="feature-icon">
                        <i class="fas fa-tachometer-alt"></i>
                      </div>
                      <div class="feature-text">
                        <h6>Real-time Dashboard</h6>
                        <p>Monitor your inventory levels instantly</p>
                      </div>
                    </div>

                    <div
                      class="feature-item"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :visible-once="{ opacity: 1, y: 0 }"
                      :duration="500"
                      :delay="800"
                    >
                      <div class="feature-icon">
                        <i class="fas fa-bell"></i>
                      </div>
                      <div class="feature-text">
                        <h6>Smart Alerts</h6>
                        <p>Get notified about low stock automatically</p>
                      </div>
                    </div>

                    <div
                      class="feature-item"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :visible-once="{ opacity: 1, y: 0 }"
                      :duration="500"
                      :delay="1000"
                    >
                      <div class="feature-icon">
                        <i class="fas fa-mobile-alt"></i>
                      </div>
                      <div class="feature-text">
                        <h6>Mobile Ready</h6>
                        <p>Access your inventory anywhere, anytime</p>
                      </div>
                    </div>
                  </div>

                  <!-- Stats -->
                  <div class="login-stats mt-5">
                    <div class="row">
                      <div class="col-4">
                        <div class="stat-item">
                          <div class="stat-number">99.9%</div>
                          <div class="stat-label">Uptime</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="stat-item">
                          <div class="stat-number">50K+</div>
                          <div class="stat-label">Users</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="stat-item">
                          <div class="stat-number">4.9★</div>
                          <div class="stat-label">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="recent-activity mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div
              class="activity-container"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="800"
              :delay="600"
            >
              <h5 class="activity-title mb-4">
                <i class="fas fa-clock me-2"></i>
                Recent Platform Updates
              </h5>
              <div class="row">
                <div class="col-md-4">
                  <div class="update-item">
                    <div class="update-icon">
                      <i class="fas fa-rocket"></i>
                    </div>
                    <div class="update-content">
                      <h6>New AI Analytics</h6>
                      <p>Advanced predictive analytics now available</p>
                      <small>2 days ago</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="update-item">
                    <div class="update-icon">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="update-content">
                      <h6>Enhanced Security</h6>
                      <p>Two-factor authentication improvements</p>
                      <small>1 week ago</small>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="update-item">
                    <div class="update-icon">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="update-content">
                      <h6>Mobile App Update</h6>
                      <p>Improved performance and new features</p>
                      <small>2 weeks ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { userInfoStore } from "../stores/UserStore";
import { useRouter } from "vue-router";

const showPassword = ref<boolean>(false);
const userStore = userInfoStore();
const router = useRouter();

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = async () => {
  await userStore.handleLogin(router);
};
</script>

<style scoped>
/* Base Styles */
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1e1b4b 50%, #312e81 100%);
  color: #ffffff;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 2rem 0;
  position: relative;
}

/* Background */
.login-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: 15%;
  left: 15%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #ec4899, #f97316);
  top: 65%;
  right: 25%;
  animation-delay: 5s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  bottom: 25%;
  left: 65%;
  animation-delay: 10s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(20px) rotate(240deg);
  }
}

/* Container */
.login-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.login-header {
  margin-bottom: 3rem;
}

.logo-link {
  text-decoration: none;
}

.logo {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-subtitle {
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 0;
}

/* Form Container */
.login-form-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  height: fit-content;
}

.form-header {
  text-align: center;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  margin-bottom: 0;
}

/* Social Login */
.btn-social {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn-social:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-google:hover {
  background: rgba(219, 68, 55, 0.1);
  border-color: #db4437;
}

.btn-microsoft:hover {
  background: rgba(0, 114, 198, 0.1);
  border-color: #0072c6;
}

/* Divider */
.divider {
  position: relative;
  text-align: center;
  margin: 2rem 0;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider-text {
  background: rgba(255, 255, 255, 0.05);
  padding: 0 1rem;
  color: #94a3b8;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.form-label {
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 1rem;
  z-index: 2;
}

.form-control {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: #6366f1;
  box-shadow: 0 0 0 0.2rem rgba(99, 102, 241, 0.25);
  color: #ffffff;
  outline: none;
}

.form-control::placeholder {
  color: #94a3b8;
  opacity: 1;
}

/* Password Input */
.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  transition: color 0.3s ease;
  z-index: 2;
}

.password-toggle:hover {
  color: #6366f1;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-check-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  width: 1.1rem;
  height: 1.1rem;
  margin: 0;
}

.form-check-input:checked {
  background: #6366f1;
  border-color: #6366f1;
}

.form-check-label {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.forgot-link {
  color: #6366f1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.forgot-link:hover {
  color: #8b5cf6;
}

/* Buttons */
.btn-gradient {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
  color: white;
}

.btn-outline-glass {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-weight: 500;
  border-radius: 12px;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.btn-outline-glass:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: scale(1.02);
}

/* Animations */
.hover-scale {
  transition: all 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-focus {
  transition: all 0.3s ease;
}

.hover-focus:focus-within {
  transform: translateY(-2px);
}

/* Auth Links */
.signup-link {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
}

.auth-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.auth-link:hover {
  color: #8b5cf6;
}

/* Welcome Container */
.welcome-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  height: fit-content;
  text-align: center;
}

.welcome-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: white;
}

.welcome-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
}

.welcome-description {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Feature Highlights */
.feature-item {
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 1rem;
  color: white;
}

.feature-text h6 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.feature-text p {
  color: #94a3b8;
  font-size: 0.8rem;
  margin-bottom: 0;
  line-height: 1.4;
}

/* Login Stats */
.login-stats {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.8rem;
}

/* Recent Activity */
.recent-activity {
  margin-top: 4rem;
}

.activity-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.activity-title {
  color: #ffffff;
  font-weight: 600;
  text-align: center;
}

.update-item {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
}

.update-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.update-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 1rem;
  color: white;
}

.update-content h6 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.update-content p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.update-content small {
  color: #6366f1;
  font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 992px) {
  .login-form-container,
  .welcome-container {
    padding: 2rem;
  }

  .welcome-container {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .login-container {
    padding: 0 0.5rem;
  }

  .login-form-container,
  .welcome-container,
  .activity-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .welcome-title {
    font-size: 1.5rem;
  }

  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .feature-item {
    flex-direction: column;
    text-align: center;
  }

  .feature-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
