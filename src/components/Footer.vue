<template>
  <div>
    <footer class="footer-section">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p
              class="mb-0 footer-text"
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="600"
            >
              &copy; 2025 InventoryPro. All rights reserved.
            </p>
          </div>
          <div
            class="col-md-6 text-md-end"
            v-motion
            :initial="{ opacity: 0, x: 20 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            :delay="200"
          >
            <a href="#" class="footer-link me-4">Privacy Policy</a>
            <a href="#" class="footer-link me-4">Terms of Service</a>
            <a href="#" class="footer-link">Support</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Footer */
.footer-section {
  background: #0a0e1a;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-text {
  color: #64748b;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #6366f1;
}
</style>
