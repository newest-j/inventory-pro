<template>
  <div class="signup-page">
    <!-- Background -->
    <div class="signup-bg">
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

    <div class="signup-container">
      <!-- Header -->
      <div class="signup-header text-center mb-4">
        <router-link to="/" class="logo-link">
          <h2 class="logo gradient-text">InventoryPro</h2>
        </router-link>
        <p class="signup-subtitle">
          Start your journey to smarter inventory management
        </p>
      </div>

      <!-- Main Content -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row g-0">
            <!-- Left Side - Form -->
            <div class="col-lg-7">
              <div
                class="signup-form-container"
                v-motion
                :initial="{ opacity: 0, x: -50 }"
                :enter="{ opacity: 1, x: 0 }"
                :duration="800"
                :delay="200"
              >
                <div class="form-header mb-4">
                  <h3 class="form-title">Create Your Account</h3>
                  <p class="form-subtitle">
                    Join thousands of businesses already using InventoryPro
                  </p>
                </div>

                <!-- Plan Selection -->
                <div class="plan-selector mb-4">
                  <div class="plan-tabs">
                    <button class="plan-tab active">
                      <div class="plan-info">
                        <div class="plan-name">Starter</div>
                        <div class="plan-price">Free</div>
                      </div>
                    </button>
                    <button class="plan-tab">
                      <div class="plan-info">
                        <div class="plan-name">Professional</div>
                        <div class="plan-price">$29/mo</div>
                      </div>
                      <div class="popular-badge">Popular</div>
                    </button>
                  </div>
                </div>

                <!-- Social Login -->
                <div class="social-login mb-4">
                  <button
                    class="btn btn-social btn-google hover-scale"
                    type="button"
                  >
                    <i class="fab fa-google me-2"></i>
                    Continue with Google
                  </button>
                  <button
                    class="btn btn-social btn-microsoft hover-scale"
                    type="button"
                  >
                    <i class="fab fa-microsoft me-2"></i>
                    Continue with Microsoft
                  </button>
                </div>

                <div class="divider mb-4">
                  <span class="divider-text">or sign up with email</span>
                </div>

                <!-- Signup Form -->
                <form @submit.prevent="onSubmit" class="signup-form">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-group hover-focus">
                        <label class="form-label">First Name</label>
                        <input
                          v-model="userStore.firstName"
                          type="text"
                          class="form-control"
                          placeholder="Enter your first name"
                          @input="userStore.validateFirstName"
                        />
                        <p class="text-danger">
                          {{ userStore.error.userName }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group hover-focus">
                        <label class="form-label">Last Name</label>
                        <input
                          v-model="userStore.lastName"
                          type="text"
                          class="form-control"
                          placeholder="Enter your last name"
                          @input="userStore.validateLastName"
                        />
                        <p class="text-danger">
                          {{ userStore.error.userName }}
                        </p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group hover-focus">
                        <label class="form-label">Email Address</label>
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
                    <div class="col-12">
                      <div class="form-group hover-focus">
                        <label class="form-label">Company Name</label>
                        <input
                          v-model="userStore.companyName"
                          type="text"
                          class="form-control"
                          placeholder="Enter your company name"
                          @input="userStore.validateCompanyName"
                        />
                        <p class="text-danger">
                          {{ userStore.error.companyName }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group hover-focus">
                        <label class="form-label">Password</label>
                        <div class="password-input">
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
                    </div>
                    <div class="col-md-6">
                      <div class="form-group hover-focus">
                        <label class="form-label">Confirm Password</label>
                        <div class="password-input">
                          <input
                            v-model="userStore.confirmPassword"
                            :type="showConfirmPassword ? 'text' : 'password'"
                            class="form-control"
                            placeholder="Confirm your password"
                            @input="userStore.validateConfirmPassword"
                          />

                          <button
                            @click="toggleConfirmPassword"
                            type="button"
                            class="password-toggle"
                          >
                            <i
                              :class="
                                showConfirmPassword
                                  ? 'fas fa-eye-slash'
                                  : 'fas fa-eye'
                              "
                            ></i>
                          </button>
                        </div>
                        <p class="text-danger">
                          {{ userStore.error.password }}
                        </p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group hover-focus">
                        <label class="form-label"
                          >Phone Number (Optional)</label
                        >
                        <input
                          v-model="userStore.phoneNumber"
                          type="tel"
                          class="form-control"
                          placeholder="+2348123456789"
                          @input="userStore.validatephoneNumner"
                        />
                        <p class="text-danger">
                          {{ userStore.error.phoneNumber }}
                        </p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group hover-focus">
                        <label class="form-label">Company Size</label>
                        <select
                          class="form-control"
                          v-model="userStore.companySize"
                          @change="userStore.validateCompanySize"
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-1000">201-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>

                        <p class="text-danger">
                          {{ userStore.error.companySize }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Password Strength -->
                  <div class="password-strength mb-3">
                    <div class="strength-label">Password Strength:</div>
                    <div class="strength-bar">
                      <div
                        class="strength-fill medium"
                        style="width: 100%"
                      ></div>
                    </div>
                    <small class="strength-text medium">High - secure</small>
                  </div>

                  <!-- Terms and Conditions -->
                  <div class="form-check mb-4">
                    <input
                      v-model="userStore.agreeTerm"
                      class="form-check-input"
                      type="checkbox"
                      id="termsCheck"
                    />
                    <label class="form-check-label" for="termsCheck">
                      I agree to the
                      <a href="#" class="terms-link">Terms of Service</a>
                      and
                      <a href="#" class="terms-link">Privacy Policy</a>
                    </label>
                  </div>
                  <p class="text-danger">{{ userStore.error.terms }}</p>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    class="btn btn-gradient w-100 btn-lg hover-lift"
                    :disabled="userStore.isSubmitting"
                  >
                    <!-- Bootstrap Spinner -->
                    <span
                      v-if="userStore.isSubmitting"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <!-- Rocket icon when not loading -->
                    <i v-else class="fas fa-rocket me-s2"></i>

                    {{
                      userStore.isSubmitting
                        ? "Creating Account..."
                        : "Create My Account"
                    }}
                  </button>
                </form>

                <!-- Login Link -->
                <div class="login-link text-center mt-4">
                  <p class="mb-0">
                    Already have an account?
                    <router-link to="/login" class="auth-link"
                      >Sign in here</router-link
                    >
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Side - Benefits -->
            <div class="col-lg-5">
              <div
                class="benefits-container"
                v-motion
                :initial="{ opacity: 0, x: 50 }"
                :enter="{ opacity: 1, x: 0 }"
                :duration="800"
                :delay="400"
              >
                <div class="benefits-header mb-4">
                  <h4 class="benefits-title">Why Choose InventoryPro?</h4>
                  <p class="benefits-subtitle">
                    Join thousands of businesses already transforming their
                    inventory management
                  </p>
                </div>

                <div class="benefits-list">
                  <div
                    class="benefit-item"
                    v-motion
                    :initial="{ opacity: 0, x: 20 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :duration="500"
                    :delay="600"
                  >
                    <div class="benefit-icon">
                      <i class="fas fa-brain"></i>
                    </div>
                    <div class="benefit-content">
                      <h6 class="benefit-title">AI-Powered Intelligence</h6>
                      <p class="benefit-description">
                        Smart predictions and automated decision-making to
                        optimize your inventory
                      </p>
                    </div>
                  </div>

                  <div
                    class="benefit-item"
                    v-motion
                    :initial="{ opacity: 0, x: 20 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :duration="500"
                    :delay="800"
                  >
                    <div class="benefit-icon">
                      <i class="fas fa-bolt"></i>
                    </div>
                    <div class="benefit-content">
                      <h6 class="benefit-title">Real-time Tracking</h6>
                      <p class="benefit-description">
                        Monitor your inventory levels and movements in real-time
                        across all locations
                      </p>
                    </div>
                  </div>

                  <div
                    class="benefit-item"
                    v-motion
                    :initial="{ opacity: 0, x: 20 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :duration="500"
                    :delay="1000"
                  >
                    <div class="benefit-icon">
                      <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="benefit-content">
                      <h6 class="benefit-title">Advanced Analytics</h6>
                      <p class="benefit-description">
                        Get detailed insights and reports to make data-driven
                        business decisions
                      </p>
                    </div>
                  </div>

                  <div
                    class="benefit-item"
                    v-motion
                    :initial="{ opacity: 0, x: 20 }"
                    :visible-once="{ opacity: 1, x: 0 }"
                    :duration="500"
                    :delay="1200"
                  >
                    <div class="benefit-icon">
                      <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="benefit-content">
                      <h6 class="benefit-title">Enterprise Security</h6>
                      <p class="benefit-description">
                        Bank-level encryption and security protocols protect
                        your sensitive data
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Trust Indicators -->
                <div class="trust-indicators mt-5">
                  <div class="trust-item">
                    <div class="trust-icon">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="trust-content">
                      <div class="trust-number">50,000+</div>
                      <div class="trust-label">Active Users</div>
                    </div>
                  </div>
                  <div class="trust-item">
                    <div class="trust-icon">
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="trust-content">
                      <div class="trust-number">4.9/5</div>
                      <div class="trust-label">Customer Rating</div>
                    </div>
                  </div>
                  <div class="trust-item">
                    <div class="trust-icon">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div class="trust-content">
                      <div class="trust-number">99.9%</div>
                      <div class="trust-label">Uptime</div>
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
const showConfirmPassword = ref<boolean>(false);
const userStore = userInfoStore();
const router = useRouter();

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const onSubmit = async () => {
  await userStore.handleSubmit(router);
};
</script>

<style scoped>
/* Base Styles */
.signup-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1e1b4b 50%, #312e81 100%);
  color: #ffffff;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 2rem 0;
  position: relative;
}

/* Background */
.signup-bg {
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
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #ec4899, #f97316);
  top: 60%;
  right: 20%;
  animation-delay: 5s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  bottom: 20%;
  left: 60%;
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
.signup-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.signup-header {
  margin-bottom: 3rem;
}

.logo-link {
  text-decoration: none;
}

.logo {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.signup-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 0;
}

/* Form Container */
.signup-form-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
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

/* Plan Selection */
.plan-selector {
  margin-bottom: 2rem;
}

.plan-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.plan-tab {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-align: center;
}

.plan-tab:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.plan-tab.active {
  background: rgba(99, 102, 241, 0.1);
  border-color: #6366f1;
}

.plan-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.plan-price {
  color: #6366f1;
  font-weight: 700;
}

.popular-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
}

/* Social Login */
.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

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

.form-control {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
}

.form-control option {
  background: #1e293b;
  color: #ffffff;
  padding: 0.5rem;
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
}

.password-toggle:hover {
  color: #6366f1;
}

/* Password Strength */
.password-strength {
  margin-top: 0.5rem;
}

.strength-label {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.strength-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s ease;
}

.strength-fill.weak {
  background: #ef4444;
}

.strength-fill.medium {
  background: #f59e0b;
}

.strength-fill.strong {
  background: #10b981;
}

.strength-text {
  font-size: 0.75rem;
}

.strength-text.weak {
  color: #ef4444;
}

.strength-text.medium {
  color: #f59e0b;
}

.strength-text.strong {
  color: #10b981;
}

/* Checkboxes */
.form-check {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.form-check-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0;
  flex-shrink: 0;
}

.form-check-input:checked {
  background: #6366f1;
  border-color: #6366f1;
}

.form-check-label {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.terms-link {
  color: #6366f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.terms-link:hover {
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

.btn-gradient:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
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
.login-link {
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

/* Benefits Container */
.benefits-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  height: 100%;
}

.benefits-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.benefits-subtitle {
  color: #94a3b8;
  font-size: 1rem;
  margin-bottom: 0;
}

/* Benefit Items */
.benefit-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 1.25rem;
  color: white;
}

.benefit-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.benefit-description {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0;
}

/* Trust Indicators */
.trust-indicators {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.trust-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.trust-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.trust-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
  font-size: 1rem;
  color: white;
}

.trust-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.trust-label {
  color: #94a3b8;
  font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 992px) {
  .signup-form-container,
  .benefits-container {
    padding: 2rem;
  }

  .social-login {
    grid-template-columns: 1fr;
  }

  .plan-tabs {
    grid-template-columns: 1fr;
  }

  .benefits-container {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .signup-container {
    padding: 0 0.5rem;
  }

  .signup-form-container,
  .benefits-container {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .trust-indicators {
    grid-template-columns: 1fr;
  }

  .col-md-6 {
    margin-bottom: 1rem;
  }
}

/* Loading Spinner */
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
