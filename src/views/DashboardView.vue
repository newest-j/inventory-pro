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
                <div v-if="userProduct.getLowStockProductsData.length > 0">
                  <div
                    v-for="(
                      product, index
                    ) in userProduct.getLowStockProductsData"
                    :key="product.id || index"
                    class="d-flex justify-content-between align-items-center py-2 border-bottom"
                  >
                    <span class="fw-medium">{{ product.name }}</span>
                    <span class="badge bg-warning text-dark">
                      {{ product.quantity }} left
                    </span>
                  </div>
                </div>

                <div v-else class="text-center text-muted py-4">
                  <i
                    class="bi bi-check-circle-fill text-success fs-4 d-block mb-2"
                  ></i>
                  <p class="mb-0">All products are well-stocked!</p>
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
import { useDarkMode } from "../composables/useDarkMode";
import InventoryForm from "../components/InventoryForm.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { userProductStore } from "../stores/UserProductStore";

const userProduct = userProductStore();
const router = useRouter();

useDarkMode();

onMounted(async () => {
  const success = await userProduct.loadUserProduct();
  if (!success) {
    router.push("/");
  }
});
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
