<template>
  <div class="landing-page">
    <!-- Navigation -->
    <Navbar />
    <!-- Hero Section -->
    <section class="hero-section position-relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="hero-bg">
        <div class="floating-shapes">
          <div
            class="shape shape-1"
            v-motion
            :initial="{ scale: 0, opacity: 0 }"
            :enter="{ scale: 1, opacity: 0.1 }"
            :duration="2000"
            :delay="1000"
          ></div>
          <div
            class="shape shape-2"
            v-motion
            :initial="{ scale: 0, opacity: 0 }"
            :enter="{ scale: 1, opacity: 0.1 }"
            :duration="2000"
            :delay="1500"
          ></div>
          <div
            class="shape shape-3"
            v-motion
            :initial="{ scale: 0, opacity: 0 }"
            :enter="{ scale: 1, opacity: 0.1 }"
            :duration="2000"
            :delay="2000"
          ></div>
          <div
            class="shape shape-4"
            v-motion
            :initial="{ scale: 0, opacity: 0 }"
            :enter="{ scale: 1, opacity: 0.1 }"
            :duration="2000"
            :delay="2500"
          ></div>
        </div>
      </div>

      <div class="container position-relative" style="z-index: 10">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <div
              class="hero-badge mb-4"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="200"
            >
              <span class="badge-text">✨ Powered by AI Technology</span>
            </div>
            <h1
              class="hero-title mb-4"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="800"
              :delay="400"
            >
              Next-Gen Inventory
              <span class="gradient-text">Intelligence</span>
            </h1>
            <p
              class="hero-subtitle mb-5"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="600"
            >
              Transform your inventory management with cutting-edge AI,
              real-time insights, and seamless automation that scales with your
              business.
            </p>
            <div
              class="d-flex gap-3 mb-4 flex-wrap"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="800"
            >
              <a
                href="/signup"
                class="btn btn-gradient btn-lg px-4 py-3 hover-lift-scale"
              >
                <i class="fas fa-rocket me-2"></i>
                Start Free Trial
              </a>
            </div>
            <div
              class="hero-stats d-flex gap-4 flex-wrap"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="1000"
            >
              <div class="stat-item hover-scale">
                <div class="stat-number">50K+</div>
                <div class="stat-label">Active Users</div>
              </div>
              <div class="stat-item hover-scale">
                <div class="stat-number">99.9%</div>
                <div class="stat-label">Uptime</div>
              </div>
              <div class="stat-item hover-scale">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Support</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="hero-image-container"
              v-motion
              :initial="{ opacity: 0, x: 50, scale: 0.8 }"
              :enter="{ opacity: 1, x: 0, scale: 1 }"
              :duration="1000"
              :delay="600"
            >
              <div class="dashboard-mockup hover-tilt">
                <div class="mockup-header">
                  <div class="mockup-dots">
                    <span
                      v-motion
                      :initial="{ scale: 0 }"
                      :enter="{ scale: 1 }"
                      :duration="300"
                      :delay="1200"
                    ></span>
                    <span
                      v-motion
                      :initial="{ scale: 0 }"
                      :enter="{ scale: 1 }"
                      :duration="300"
                      :delay="1400"
                    ></span>
                    <span
                      v-motion
                      :initial="{ scale: 0 }"
                      :enter="{ scale: 1 }"
                      :duration="300"
                      :delay="1600"
                    ></span>
                  </div>
                </div>
                <div class="mockup-body">
                  <div
                    class="chart-placeholder"
                    v-motion
                    :initial="{ opacity: 0, height: 0 }"
                    :enter="{ opacity: 1, height: '120px' }"
                    :duration="800"
                    :delay="1800"
                  ></div>
                  <div class="metrics-row">
                    <div
                      class="metric-card"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :enter="{ opacity: 1, y: 0 }"
                      :duration="400"
                      :delay="2000"
                    ></div>
                    <div
                      class="metric-card"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :enter="{ opacity: 1, y: 0 }"
                      :duration="400"
                      :delay="2200"
                    ></div>
                    <div
                      class="metric-card"
                      v-motion
                      :initial="{ opacity: 0, y: 20 }"
                      :enter="{ opacity: 1, y: 0 }"
                      :duration="400"
                      :delay="2400"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <div
            class="section-badge mb-3"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
          >
            <span class="badge-text">🚀 Powerful Features</span>
          </div>
          <h2
            class="section-title mb-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="800"
            :delay="200"
          >
            Why Choose InventoryPro?
          </h2>
          <p
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="400"
          >
            Everything you need to revolutionize your inventory management
          </p>
        </div>
        <div class="row g-4">
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="200"
          >
            <div class="feature-card h-100 hover-lift-rotate">
              <div class="feature-icon-wrapper">
                <div class="feature-icon hover-rotate">
                  <i class="fas fa-brain"></i>
                </div>
              </div>
              <h5 class="feature-title">AI-Powered Insights</h5>
              <p class="feature-description">
                Leverage machine learning to predict demand, optimize stock
                levels, and automate complex inventory decisions.
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="400"
          >
            <div class="feature-card h-100 hover-lift-rotate">
              <div class="feature-icon-wrapper">
                <div class="feature-icon hover-rotate">
                  <i class="fas fa-bolt"></i>
                </div>
              </div>
              <h5 class="feature-title">Lightning Fast</h5>
              <p class="feature-description">
                Built on cloud infrastructure that processes millions of
                transactions per second with zero downtime.
              </p>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="600"
          >
            <div class="feature-card h-100 hover-lift-rotate">
              <div class="feature-icon-wrapper">
                <div class="feature-icon hover-rotate">
                  <i class="fas fa-shield-alt"></i>
                </div>
              </div>
              <h5 class="feature-title">Enterprise Security</h5>
              <p class="feature-description">
                Bank-level encryption, SOC 2 compliance, and advanced security
                protocols protect your data 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing-section py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <div
            class="section-badge mb-3"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
          >
            <span class="badge-text">💰 Simple Pricing</span>
          </div>
          <h2
            class="section-title mb-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="800"
            :delay="200"
          >
            Choose Your Perfect Plan
          </h2>
          <p
            class="section-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="400"
          >
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        <div class="row g-4 justify-content-center">
          <!-- Free Plan -->
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="200"
          >
            <div class="pricing-card hover-lift-scale">
              <div class="pricing-header">
                <h3 class="plan-name">Starter</h3>
                <div class="price-container">
                  <span class="price-amount">Free</span>
                  <span class="price-period">Forever</span>
                </div>
                <p class="plan-description">
                  Perfect for small businesses getting started
                </p>
              </div>
              <ul class="features-list">
                <li>
                  <i class="fas fa-check text-success"></i> Up to 100 products
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Basic inventory
                  tracking
                </li>
                <li><i class="fas fa-check text-success"></i> Email support</li>
                <li>
                  <i class="fas fa-check text-success"></i> 1 user account
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Mobile app access
                </li>
              </ul>
              <a
                href="/signup"
                class="btn btn-outline-glass w-100 pricing-btn hover-scale"
              >
                Get Started Free
              </a>
            </div>
          </div>

          <!-- Pro Plan -->
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="400"
          >
            <div class="pricing-card featured hover-lift-scale">
              <div class="popular-badge">Most Popular</div>
              <div class="pricing-header">
                <h3 class="plan-name">Professional</h3>
                <div class="price-container">
                  <span class="price-amount">$29</span>
                  <span class="price-period">/month</span>
                </div>
                <p class="plan-description">Best for growing businesses</p>
              </div>
              <ul class="features-list">
                <li>
                  <i class="fas fa-check text-success"></i> Up to 5,000 products
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Advanced analytics &
                  reports
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Priority support
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Up to 10 users
                </li>
                <li><i class="fas fa-check text-success"></i> API access</li>
                <li>
                  <i class="fas fa-check text-success"></i> Automated alerts
                </li>
              </ul>
              <a
                href="/signup"
                class="btn btn-gradient w-100 pricing-btn hover-scale"
              >
                Start 14-Day Free Trial
              </a>
            </div>
          </div>

          <!-- Enterprise Plan -->
          <div
            class="col-lg-4 col-md-6"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="600"
          >
            <div class="pricing-card hover-lift-scale">
              <div class="pricing-header">
                <h3 class="plan-name">Enterprise</h3>
                <div class="price-container">
                  <span class="price-amount">Custom</span>
                  <span class="price-period">Pricing</span>
                </div>
                <p class="plan-description">
                  For large organizations with complex needs
                </p>
              </div>
              <ul class="features-list">
                <li>
                  <i class="fas fa-check text-success"></i> Unlimited products
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Custom integrations
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> 24/7 phone support
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Unlimited users
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> Dedicated account
                  manager
                </li>
                <li>
                  <i class="fas fa-check text-success"></i> On-premise
                  deployment
                </li>
              </ul>
              <a
                href="#contact"
                class="btn btn-outline-glass w-100 pricing-btn hover-scale"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2
            class="stats-title mb-4"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="800"
          >
            Trusted by Industry Leaders
          </h2>
          <p
            class="stats-subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="600"
            :delay="200"
          >
            Join thousands of companies already transforming their operations
          </p>
        </div>
        <div class="row g-4 text-center">
          <div
            class="col-lg-3 col-md-6"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :duration="600"
            :delay="200"
          >
            <div class="stat-card hover-lift-scale">
              <div class="stat-number gradient-text">100K+</div>
              <div class="stat-label">Products Managed</div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-6"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :duration="600"
            :delay="400"
          >
            <div class="stat-card hover-lift-scale">
              <div class="stat-number gradient-text">2,500+</div>
              <div class="stat-label">Happy Customers</div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-6"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :duration="600"
            :delay="600"
          >
            <div class="stat-card hover-lift-scale">
              <div class="stat-number gradient-text">99.99%</div>
              <div class="stat-label">Uptime SLA</div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-6"
            v-motion
            :initial="{ opacity: 0, scale: 0.5 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :duration="600"
            :delay="800"
          >
            <div class="stat-card hover-lift-scale">
              <div class="stat-number gradient-text">150+</div>
              <div class="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mb-5">
            <div
              class="section-badge mb-3"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="600"
            >
              <span class="badge-text">📞 Get In Touch</span>
            </div>
            <h2
              class="section-title mb-4"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="800"
              :delay="200"
            >
              Ready to Get Started?
            </h2>
            <p
              class="section-subtitle"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="400"
            >
              Have questions? Need a custom solution? Our team is here to help
              you succeed.
            </p>
          </div>
        </div>
        <div class="row g-4">
          <!-- Contact Info -->
          <div class="col-lg-6">
            <div
              class="contact-info"
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="600"
              :delay="200"
            >
              <h3 class="contact-title mb-4">Let's Talk Business</h3>
              <p class="contact-description mb-4">
                Whether you're a startup or an enterprise, our inventory
                management experts are ready to help you optimize your
                operations and drive growth.
              </p>

              <div class="contact-methods">
                <div class="contact-item hover-slide">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Email Us</h5>
                    <p>hello@inventoryeducation.com</p>
                  </div>
                </div>

                <div class="contact-item hover-slide">
                  <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Call Us</h5>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="contact-item hover-slide">
                  <div class="contact-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-details">
                    <h5>Business Hours</h5>
                    <p>Mon - Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-6">
            <div
              class="contact-form-container"
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="600"
              :delay="400"
            >
              <form class="contact-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-group hover-focus">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group hover-focus">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group hover-focus">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group hover-focus">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group hover-focus">
                      <select class="form-control">
                        <option>How can we help you?</option>
                        <option>Schedule a Demo</option>
                        <option>Get Pricing Information</option>
                        <option>Technical Support</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group hover-focus">
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Tell us more about your needs..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-gradient w-100 hover-scale"
                    >
                      <i class="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container py-5 text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2
              class="cta-title mb-4"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="800"
            >
              Ready to Transform Your Business?
            </h2>
            <p
              class="cta-subtitle mb-5"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="200"
            >
              Join the inventory management revolution. Start your free trial
              today and experience the future of inventory control.
            </p>
            <div
              class="d-flex gap-3 justify-content-center flex-wrap"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :duration="600"
              :delay="400"
            >
              <a
                href="/signup"
                class="btn btn-gradient btn-lg px-5 py-3 hover-lift"
              >
                <i class="fas fa-rocket me-2"></i>
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
/* Add these CSS-based hover animations */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-3px);
}

.hover-scale {
  transition: all 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift-scale {
  transition: all 0.3s ease;
}

.hover-lift-scale:hover {
  transform: translateY(-10px) scale(1.02);
}

.hover-lift-rotate {
  transition: all 0.3s ease;
}

.hover-lift-rotate:hover {
  transform: translateY(-10px) scale(1.02);
}

.hover-rotate {
  transition: transform 0.5s ease;
}

.hover-rotate:hover {
  transform: rotate(360deg);
}

.hover-tilt {
  transition: all 0.3s ease;
}

.hover-tilt:hover {
  transform: scale(1.05) rotateY(5deg);
}

.hover-slide {
  transition: all 0.3s ease;
}

.hover-slide:hover {
  transform: translateX(10px);
}

.hover-focus {
  transition: all 0.3s ease;
}

.hover-focus:focus-within {
  transform: scale(1.02);
}

/* All existing styles remain the same */
.landing-page {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  background: #0a0e1a;
  color: #ffffff;
  /* width: 100%; */
  overflow-x: hidden;
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

/* Hero Section */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e1a 0%, #1e1b4b 50%, #312e81 100%);
  padding-top: 100px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #ec4899, #f97316);
  top: 60%;
  right: -5%;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  top: 30%;
  right: 20%;
  animation-delay: 10s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #10b981, #059669);
  bottom: 10%;
  left: 10%;
  animation-delay: 15s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateY(30px) rotate(240deg);
  }
}

.hero-badge {
  display: inline-block;
}

.badge-text {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a78bfa;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.6;
}

.hero-stats {
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  transition: all 0.3s ease;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366f1;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

/* Dashboard Mockup */
.hero-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-mockup {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.mockup-header {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mockup-dots {
  display: flex;
  gap: 8px;
}

.mockup-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444, #f97316, #eab308);
}

.mockup-body {
  padding: 24px;
}

.chart-placeholder {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.2),
    rgba(139, 92, 246, 0.2)
  );
  border-radius: 8px;
  margin-bottom: 16px;
}

.metrics-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.metric-card {
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Features Section */
.features-section {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
}

.section-badge {
  display: inline-block;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #94a3b8;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.feature-icon-wrapper {
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
  color: white;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.feature-description {
  color: #94a3b8;
  line-height: 1.6;
}

/* Pricing Section */
.pricing-section {
  background: linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #0f172a 100%);
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.pricing-card.featured {
  border: 2px solid #6366f1;
  background: rgba(99, 102, 241, 0.05);
  transform: scale(1.05);
}

.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-name {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.price-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1rem;
}

.price-amount {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 800;
  margin-right: 0.25rem;
}

.price-period {
  color: #94a3b8;
  font-size: 1rem;
}

.plan-description {
  color: #94a3b8;
  margin-bottom: 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.features-list li {
  color: #94a3b8;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.features-list li i {
  font-size: 1rem;
  flex-shrink: 0;
}

.pricing-btn {
  margin-top: auto;
  padding: 12px 24px;
}

/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
}

.stats-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
}

.stats-subtitle {
  font-size: 1.125rem;
  color: #94a3b8;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-card .stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-card .stat-label {
  color: #94a3b8;
  font-size: 1rem;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
}

.contact-info {
  height: 100%;
}

.contact-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.contact-description {
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-methods {
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
  gap: 1rem; /* Add gap for better spacing */
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0; /* Prevent icon from shrinking */
}

.contact-details {
  flex: 1; /* Take remaining space */
}

.contact-details h5 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.25rem;
  white-space: nowrap; /* Prevent title from wrapping */
}

.contact-details p {
  color: #94a3b8;
  margin-bottom: 0;
  word-break: break-word; /* Allow breaking long words if needed */
  overflow-wrap: break-word; /* Modern browsers */
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-control {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: #6366f1;
  box-shadow: 0 0 0 0.2rem rgba(99, 102, 241, 0.25);
  color: #ffffff;
}

.form-control::placeholder {
  color: #94a3b8;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #312e81 0%, #1e1b4b 100%);
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
}

.cta-subtitle {
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    justify-content: center;
  }

  .hero-stats .stat-item {
    min-width: 80px;
  }

  .mockup-body {
    padding: 16px;
  }

  .metrics-row {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
    margin-top: 1rem;
  }

  .popular-badge {
    position: static;
    transform: none;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .contact-form-container {
    margin-top: 2rem;
    padding: 2rem;
  }
}

@media (max-width: 576px) {
  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .contact-icon {
    margin-bottom: 1rem;
  }

  .contact-details h5 {
    white-space: normal; /* Allow wrapping on mobile */
  }
  .price-amount {
    font-size: 1rem;
  }
  .section-title {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
}
</style>
