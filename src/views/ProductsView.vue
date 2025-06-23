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
          <span class="badge bg-primary fs-6">24 items</span>
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
                  <h3 class="card-title mb-1 fw-bold">24</h3>
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
                  <h3 class="card-title mb-1 fw-bold">18</h3>
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
                  <h3 class="card-title mb-1 fw-bold">4</h3>
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
                  <h3 class="card-title mb-1 fw-bold">2</h3>
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
                      class="form-select filter-select"
                      style="max-width: 200px"
                    >
                      <option value="">All Categories</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                    </select>

                    <select
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
                        type="text"
                        class="form-control"
                        placeholder="Search products..."
                      />
                    </div>
                  </div>

                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary hover-scale">
                      <i class="bi bi-download me-1"></i>
                      Export
                    </button>
                    <button class="btn btn-primary hover-lift">
                      <i class="bi bi-plus me-1"></i>
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="row">
          <!-- Product Card 1 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-phone fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">iPhone 14 Pro</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">45</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$999.00</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Apple Inc.</small>
                  <span class="badge bg-success">In Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-success" style="width: 75%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Card 2 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-laptop fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">MacBook Air M2</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">8</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$1,199.00</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Apple Inc.</small>
                  <span class="badge bg-warning text-dark">Low Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-warning" style="width: 25%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Card 3 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-headphones fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">Wireless Headphones</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">0</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$199.99</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Sony</small>
                  <span class="badge bg-danger">Out of Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-danger" style="width: 0%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Card 4 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-smartwatch fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">Apple Watch Series 8</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">22</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$399.00</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Apple Inc.</small>
                  <span class="badge bg-success">In Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-success" style="width: 60%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Card 5 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-tablet fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">iPad Pro 12.9"</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">15</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$1,099.00</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Apple Inc.</small>
                  <span class="badge bg-success">In Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-success" style="width: 50%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Card 6 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card product-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="product-image-placeholder">
                    <i class="bi bi-mouse fs-1 text-muted"></i>
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
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-pencil me-2"></i>Edit</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><i class="bi bi-files me-2"></i>Duplicate</a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item text-danger" href="#"
                          ><i class="bi bi-trash me-2"></i>Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">Gaming Mouse Pro</h5>
                <p class="text-muted small mb-3">Electronics</p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Quantity</span>
                    </div>
                    <div class="fw-bold">5</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Price</span>
                    </div>
                    <div class="fw-bold">$79.99</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Logitech</small>
                  <span class="badge bg-warning text-dark">Low Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-warning" style="width: 15%"></div>
                </div>

                <div class="d-grid gap-2">
                  <button class="btn btn-outline-primary btn-sm hover-scale">
                    <i class="bi bi-eye me-1"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <nav class="mt-4">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
