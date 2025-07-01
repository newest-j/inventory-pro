<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <side-bar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header
        class="header bg-white border-bottom d-flex justify-content-between align-items-center px-4 py-3"
      >
        <offcanvas />
        <h2 class="mb-0 text-dark">Dashboard</h2>
        <div
          class="user-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
        >
          JD
        </div>
      </header>

      <!-- Content -->
      <div class="content p-4">
        <div class="row">
          <!-- the form -->

          <!-- Inventory Form -->
          <InventoryForm />

          <!-- Low-Stock Alerts Sidebar -->
          <div class="col-xl-3 col-lg-4">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-white border-0 pb-0">
                <h5 class="card-title mb-0">Low-Stock Alerts</h5>
              </div>
              <div class="card-body">
                <div
                  class="d-flex justify-content-between align-items-center py-2 border-bottom"
                >
                  <span class="fw-medium">Samsung Galaxy S23</span>
                  <span class="badge bg-warning text-dark">8 left</span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center py-2 border-bottom"
                >
                  <span class="fw-medium">Wireless Earbuds</span>
                  <span class="badge bg-warning text-dark">5 left</span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center py-2 border-bottom"
                >
                  <span class="fw-medium">Gaming Mouse</span>
                  <span class="badge bg-warning text-dark">3 left</span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center py-2 border-bottom"
                >
                  <span class="fw-medium">USB-C Cable</span>
                  <span class="badge bg-warning text-dark">2 left</span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center py-2"
                >
                  <span class="fw-medium">Bluetooth Speaker</span>
                  <span class="badge bg-warning text-dark">1 left</span>
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
import InventoryForm from "../components/InventoryForm.vue";
</script>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevents scrollbars if content fits */
}

.main-content {
  flex: 1;
  margin-left: 250px; /*Sidebar width*/
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow scrolling in main content */
}

.header {
  min-height: 70px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.stat-card {
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table th {
  font-weight: 600;
  color: #495057;
}

.table tbody tr:hover {
  background-color: #f8f9fa;
}

/* this removes the padding at the iphone 14 pro max and others */
/* element.style {
  padding-right: 0px;
} */

@media (max-width: 992px) {
  .sidebar {
    margin-left: -250px;
  }
}

@media (max-width: 767px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
