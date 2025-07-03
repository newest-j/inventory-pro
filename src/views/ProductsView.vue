<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <side-bar />
    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header
        class="header bg-white border-bottom d-flex justify-content-between align-items-center px-4 py-3"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        }"
      >
        <div class="d-flex align-items-center">
          <offcanvas class="me-3" />
          <h2 class="mb-0 text-dark me-3">Products</h2>
          <span class="badge bg-primary fs-6">{{
            userProduct.getTotalProduct
          }}</span>
        </div>
        <div
          class="user-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
        >
          JD
        </div>
      </header>

      <!-- Content -->
      <div class="content p-4">
        <!-- Quick Stats -->
        <div
          class="row mb-4"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.8,
              ease: 'easeOut',
            },
          }"
        >
          <div class="col-xl-3 col-md-6 mb-3">
            <div class="card stat-card border-0 shadow-sm hover-lift">
              <div class="card-body d-flex align-items-center">
                <div
                  class="stat-icon bg-primary bg-opacity-10 text-primary rounded me-3"
                >
                  <i class="bi bi-box-seam fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">
                    {{ userProduct.getTotalProduct }}
                  </h3>
                  <p class="card-text text-muted small mb-0">Total Products</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-3">
            <div class="card stat-card border-0 shadow-sm hover-lift">
              <div class="card-body d-flex align-items-center">
                <div
                  class="stat-icon bg-success bg-opacity-10 text-success rounded me-3"
                >
                  <i class="bi bi-check-circle fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">
                    {{ userProduct.getInStockProducts }}
                  </h3>
                  <p class="card-text text-muted small mb-0">In Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-3">
            <div class="card stat-card border-0 shadow-sm hover-lift">
              <div class="card-body d-flex align-items-center">
                <div
                  class="stat-icon bg-warning bg-opacity-10 text-warning rounded me-3"
                >
                  <i class="bi bi-exclamation-triangle fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">
                    {{ userProduct.getLowStockProducts }}
                  </h3>
                  <p class="card-text text-muted small mb-0">Low Stock</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-3">
            <div class="card stat-card border-0 shadow-sm hover-lift">
              <div class="card-body d-flex align-items-center">
                <div
                  class="stat-icon bg-danger bg-opacity-10 text-danger rounded me-3"
                >
                  <i class="bi bi-x-circle fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">
                    {{ userProduct.getOutOfStockProducts }}
                  </h3>
                  <p class="card-text text-muted small mb-0">Out of Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filters and Actions -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div class="d-flex flex-wrap gap-3 align-items-center">
                  <div class="flex-grow-1 d-flex flex-wrap gap-3">
                    <select
                      v-model="selectedCategory"
                      class="form-select filter-select"
                      style="max-width: 200px"
                    >
                      <option value="">All Categories</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Gaming">Gaming</option>
                      <option value="Audio">Audio</option>
                      <option value="Cables">Cables</option>
                      <option value="Other">Other</option>
                    </select>

                    <select
                      v-model="selectedStatus"
                      class="form-select filter-select"
                      style="max-width: 200px"
                    >
                      <option value="">All Status</option>
                      <option value="in-stock">In Stock</option>
                      <option value="low-stock">Low Stock</option>
                      <option value="out-of-stock">Out of Stock</option>
                    </select>

                    <div
                      class="input-group search-group"
                      style="max-width: 300px"
                    >
                      <span class="input-group-text">
                        <i class="bi bi-search"></i>
                      </span>
                      <input
                        v-model="searchTerm"
                        type="text"
                        class="form-control"
                        placeholder="Search products..."
                      />
                    </div>
                  </div>

                  <div class="d-flex gap-2">
                    <button
                      class="btn btn-primary hover-lift"
                      data-bs-toggle="modal"
                      data-bs-target="#ProductModal"
                      @click="selectedProductId = null"
                    >
                      <i class="bi bi-plus me-1"></i>
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bootstrap Spinner -->
        <div
          v-if="userProduct.loading"
          class="loading-container d-flex flex-column align-items-center justify-content-center py-5"
        >
          <div
            class="spinner-border text-primary"
            role="status"
            style="width: 3rem; height: 3rem"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 text-muted">Loading products...</p>
        </div>

        <!-- Products Grid -->
        <div v-else class="row">
          <!-- Product Card  -->
          <div v-if="paginatedProducts.length > 0" class="row">
            <div
              v-for="(product, index) in paginatedProducts"
              :key="product.id || index"
              class="col-xl-4 col-lg-6 col-md-6 mb-4"
            >
              <div
                class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
              >
                <div class="card-body p-4">
                  <div
                    class="d-flex justify-content-between align-items-start mb-3"
                  >
                    <div class="product-image-placeholder">
                      <!-- Dynamic icon based on product category -->
                      <i
                        :class="getCategoryIcon(product.category)"
                        class="fs-1 text-muted"
                      ></i>
                    </div>
                    <div class="dropdown">
                      <button
                        class="btn btn-sm btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        <i class="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#ProductModal"
                            class="dropdown-item"
                            @click="selectedProductId = product.id"
                          >
                            <i class="bi bi-pencil me-2"></i>Edit
                          </button>
                        </li>

                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <button
                            type="button"
                            @click="userProduct.deleteProduct(product.id)"
                            class="dropdown-item text-danger"
                          >
                            <i class="bi bi-trash me-2"></i>Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h5 class="card-title fw-bold mb-2">{{ product.name }}</h5>
                  <p class="text-muted small mb-3">{{ product.category }}</p>

                  <div class="row mb-3">
                    <div class="col-6">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-box me-2 text-muted"></i>
                        <span class="small text-muted">Quantity</span>
                      </div>
                      <div class="fw-bold">{{ product.quantity }}</div>
                    </div>
                    <div class="col-6">
                      <div class="d-flex align-items-center">
                        <span class="me-2 text-muted fw-bold">₦</span>
                        <span class="small text-muted">Price</span>
                      </div>
                      <div class="fw-bold">
                        {{ product.price.toLocaleString() }}
                      </div>
                    </div>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <small class="text-muted">{{ product.supplier }}</small>
                    <span class="badge" :class="getStockBadgeClass(product)">{{
                      getStockText(product)
                    }}</span>
                  </div>

                  <div class="progress mb-3" style="height: 6px">
                    <div
                      class="progress-bar"
                      :class="getProgressBarClass(product)"
                      :style="{ width: getStockPercentage(product) + '%' }"
                    ></div>
                  </div>

                  <div class="d-grid gap-2">
                    <button
                      data-bs-target="#ViewProductModal"
                      data-bs-toggle="modal"
                      @click="selectedProductId = product.id"
                      class="btn btn-sm hover-scale"
                      :class="[
                        product.status === 'inactive' ||
                        product.status === 'discontinued'
                          ? 'btn-outline-secondary text-muted'
                          : 'btn-outline-primary',
                      ]"
                      :disabled="
                        product.status === 'inactive' ||
                        product.status === 'discontinued'
                      "
                    >
                      <i
                        :class="[
                          product.status === 'inactive' ||
                          product.status === 'discontinued'
                            ? 'bi bi-eye-slash me-1'
                            : 'bi bi-eye me-1',
                        ]"
                      ></i>
                      {{
                        product.status === "inactive" ||
                        product.status === "discontinued"
                          ? "Unavailable"
                          : "View Details"
                      }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-5 text-muted">
            <i class="bi bi-box-seam fs-1 mb-3"></i>
            <div>No products found for your filter.</div>
          </div>
        </div>

        <!-- Pagination -->
        <nav class="mt-4" v-if="totalPages > 1">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                @click.prevent="goToPage(currentPage - 1)"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              v-for="page in totalPages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
                page
              }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                @click.prevent="goToPage(currentPage + 1)"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- <ProductModal /> -->

    <div
      class="modal fade"
      id="ProductModal"
      tabindex="-1"
      aria-labelledby="addProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">
              {{ selectedProductId ? "Edit Product" : "Add New Product" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <InventoryForm
              :editProductId="selectedProductId"
              :closeModal="closeModal"
            />
          </div>
          <div class="modal-footer">
            <button
              ref="cancelButtonRef"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal to view product -->
    <div
      class="modal fade"
      id="ViewProductModal"
      tabindex="-1"
      aria-labelledby="viewProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="viewProductModalLabel">
              Product Details
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div v-if="viewProduct">
              <div class="row mb-3">
                <div class="col-md-4 text-center mb-3 mb-md-0">
                  <i
                    :class="getCategoryIcon(viewProduct.category)"
                    class="fs-1 text-muted"
                  ></i>
                  <div class="fw-bold mt-2">{{ viewProduct.name }}</div>
                  <div class="text-muted small">
                    {{ viewProduct.category }}
                  </div>
                </div>
                <div class="col-md-8">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <strong>Supplier:</strong> {{ viewProduct.supplier }}
                    </li>
                    <li class="list-group-item">
                      <strong>Location:</strong> {{ viewProduct.location }}
                    </li>
                    <li class="list-group-item">
                      <strong>Quantity:</strong> {{ viewProduct.quantity }}
                    </li>
                    <li class="list-group-item">
                      <strong>Price:</strong> ₦{{
                        viewProduct.price?.toLocaleString()
                      }}
                    </li>
                    <li class="list-group-item">
                      <strong>Status:</strong> {{ viewProduct.status }}
                    </li>
                    <li class="list-group-item">
                      <strong>Description:</strong>
                      {{ viewProduct.description }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="text-center text-muted py-5">
                <i class="bi bi-box-seam fs-1 mb-3"></i>
                <div>No product selected.</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef, computed } from "vue";
import InventoryForm from "../components/InventoryForm.vue";
import { useDarkMode } from "../composables/useDarkMode";

import { userProductStore } from "../stores/UserProductStore";
import { useRouter } from "vue-router";
useDarkMode();

const selectedProductId = ref<string | null>(null);
const cancelButtonRef = useTemplateRef<HTMLButtonElement>("cancelButtonRef");
const userProduct = userProductStore();
const router = useRouter();
const selectedCategory = ref<string>("");
const selectedStatus = ref<string>("");
const searchTerm = ref<string>("");

const closeModal = () => {
  if (cancelButtonRef.value) {
    cancelButtonRef.value.click();
  }
  // Reset selected product ID
  selectedProductId.value = null;
};

const viewProduct = computed(() => {
  return userProduct.products.find((p) => p.id === selectedProductId.value);
});

onMounted(async () => {
  const success = await userProduct.loadUserProduct();
  if (!success) {
    router.push("/");
  }
});

const displayedProducts = computed(() => {
  return userProduct.filteredProducts(
    selectedCategory.value,
    selectedStatus.value,
    searchTerm.value
  );
});

// pagination

const currentPage = ref(1);
const pageSize = 6; // Number of products per page

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return displayedProducts.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(displayedProducts.value.length / pageSize);
});

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

const getStockText = (product: any) => {
  if (product.quantity === 0) {
    return "Out of Stock";
  } else if (product.quantity > 0 && product.quantity <= product.lowstock) {
    return "Low Stock";
  } else if (product.status === "inactive") {
    return "Inactive";
  } else if (product.status === "discontinued") {
    return "Discontinued";
  } else {
    return "In Stock";
  }
};

const getStockBadgeClass = (product: any) => {
  if (product.quantity === 0) return "bg-danger";
  if (product.quantity > 0 && product.quantity <= product.lowstock)
    return "bg-warning";
  if (product.status === "inactive" || product.status === "discontinued")
    return "bg-secondary";
  return "bg-success";
};

const getProgressBarClass = (product: any) => {
  if (product.quantity === 0) return "bg-danger";
  if (product.quantity > 0 && product.quantity <= product.lowstock)
    return "bg-warning";
  return "bg-success";
};

const getStockPercentage = (product: any) => {
  if (product.quantity === 0) return 0;
  if (product.lowstock === 0) return 100;

  const percentage = Math.min(
    (product.quantity / (product.lowstock * 2)) * 100,
    100
  );
  return Math.max(percentage, 10);
};

const getCategoryIcon = (category: string) => {
  // Convert to lowercase and trim for consistent matching
  const cat = category?.toLowerCase().trim() || "";

  switch (cat) {
    case "electronics":
      return "bi bi-laptop";
    case "phones":
    case "mobile":
      return "bi bi-phone";
    case "clothing":
    case "apparel":
      return "bi bi-tags";
    case "books":
      return "bi bi-book";
    case "food":
    case "groceries":
      return "bi bi-cart";
    case "furniture":
      return "bi bi-chair";
    case "tools":
      return "bi bi-tools";
    case "sports":
      return "bi bi-trophy";
    default:
      return "bi bi-box";
  }
};
</script>

<style scoped>
/* Base Layout */
.dashboard-container {
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
}

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

.sidebar .nav-link.active {
  background-color: #e7f1ff;
  color: #0d6efd;
  border-right: 3px solid #0d6efd;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  display: flex;
  flex-direction: column;
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

/* Enhanced Animations */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.hover-scale {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift-scale {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform-origin: center;
  transform-style: preserve-3d;
}

.hover-lift-scale:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Stat Cards */
.stat-card {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  border-radius: 12px;
}

.stat-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Product Cards */
.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.product-image-placeholder {
  width: 60px;
  height: 60px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Form Controls */
.filter-select,
.search-group .form-control {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.filter-select:focus,
.search-group .form-control:focus {
  transform: scale(1.02);
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.15);
}

.search-group .input-group-text {
  background: #f8f9fa;
  border-color: #dee2e6;
}

/* Progress Bars */
.progress {
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  transition: width 0.8s ease;
}

/* this removes the padding at the iphone 14 pro max and others */
element.style {
  padding-right: 0px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .sidebar {
    margin-left: -250px;
  }

  .product-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .d-flex.flex-wrap.gap-3 {
    flex-direction: column;
  }

  .filter-select,
  .search-group {
    max-width: 100% !important;
  }
}

@media (max-width: 767px) {
  .main-content {
    margin-left: 0;
  }
}

/* Custom Scrollbar */
.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.content::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
