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
          <h2 class="mb-0 text-dark me-3">Categories</h2>
          <span class="badge bg-primary fs-6">12 categories</span>
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
                  <i class="bi bi-tags fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">12</h3>
                  <p class="card-text text-muted small mb-0">
                    Total Categories
                  </p>
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
                  <i class="bi bi-graph-up fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">8</h3>
                  <p class="card-text text-muted small mb-0">
                    Active Categories
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-3">
            <div class="card stat-card border-0 shadow-sm hover-lift">
              <div class="card-body d-flex align-items-center">
                <div
                  class="stat-icon bg-info bg-opacity-10 text-info rounded me-3"
                >
                  <i class="bi bi-box-seam fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">156</h3>
                  <p class="card-text text-muted small mb-0">Total Products</p>
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
                  <i class="bi bi-star fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">Electronics</h3>
                  <p class="card-text text-muted small mb-0">Top Category</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions Bar -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <div
                  class="d-flex flex-wrap gap-3 align-items-center justify-content-between"
                >
                  <div class="d-flex flex-wrap gap-3 align-items-center">
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
                        placeholder="Search categories..."
                      />
                    </div>

                    <select
                      class="form-select filter-select"
                      style="max-width: 200px"
                    >
                      <option value="">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary hover-scale">
                      <i class="bi bi-download me-1"></i>
                      Export
                    </button>
                    <button class="btn btn-primary hover-lift">
                      <i class="bi bi-plus me-1"></i>
                      Add Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Categories Grid -->
        <div class="row">
          <!-- Category Card 1 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon bg-primary bg-opacity-10 text-primary"
                    >
                      <i class="bi bi-laptop fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Electronics</h5>
                <p class="text-muted small mb-3">
                  Computers, phones, and digital devices
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">45</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$45,230</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Jan 15, 2024</small>
                  <span class="badge bg-success">Active</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-primary" style="width: 85%"></div>
                </div>
                <small class="text-muted">85% of inventory value</small>
              </div>
            </div>
          </div>

          <!-- Category Card 2 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon bg-success bg-opacity-10 text-success"
                    >
                      <i class="bi bi-basket fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Home & Garden</h5>
                <p class="text-muted small mb-3">
                  Furniture, decorations, and garden tools
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">28</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$12,450</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Feb 8, 2024</small>
                  <span class="badge bg-success">Active</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-success" style="width: 35%"></div>
                </div>
                <small class="text-muted">35% of inventory value</small>
              </div>
            </div>
          </div>

          <!-- Category Card 3 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div class="category-icon bg-info bg-opacity-10 text-info">
                      <i class="bi bi-book fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Books & Media</h5>
                <p class="text-muted small mb-3">
                  Books, magazines, and educational materials
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">67</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$3,280</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Jan 22, 2024</small>
                  <span class="badge bg-success">Active</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-info" style="width: 15%"></div>
                </div>
                <small class="text-muted">15% of inventory value</small>
              </div>
            </div>
          </div>

          <!-- Category Card 4 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon bg-warning bg-opacity-10 text-warning"
                    >
                      <i class="bi bi-palette fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Arts & Crafts</h5>
                <p class="text-muted small mb-3">
                  Art supplies, crafting materials, and tools
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">12</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$890</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Mar 5, 2024</small>
                  <span class="badge bg-warning text-dark">Low Stock</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-warning" style="width: 5%"></div>
                </div>
                <small class="text-muted">5% of inventory value</small>
              </div>
            </div>
          </div>

          <!-- Category Card 5 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon bg-purple bg-opacity-10 text-purple"
                    >
                      <i class="bi bi-heart-pulse fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Health & Beauty</h5>
                <p class="text-muted small mb-3">
                  Skincare, cosmetics, and wellness products
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">34</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$5,670</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Feb 14, 2024</small>
                  <span class="badge bg-success">Active</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-purple" style="width: 25%"></div>
                </div>
                <small class="text-muted">25% of inventory value</small>
              </div>
            </div>
          </div>

          <!-- Category Card 6 -->
          <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon bg-danger bg-opacity-10 text-danger"
                    >
                      <i class="bi bi-trophy fs-2"></i>
                    </div>
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
                          ><i class="bi bi-eye me-2"></i>View Products</a
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

                <h5 class="card-title fw-bold mb-2">Sports & Fitness</h5>
                <p class="text-muted small mb-3">
                  Exercise equipment, sportswear, and gear
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">0</div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-dollar me-2 text-muted"></i>
                      <span class="small text-muted">Total Value</span>
                    </div>
                    <div class="fw-bold">$0</div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted">Created: Mar 10, 2024</small>
                  <span class="badge bg-secondary">Inactive</span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div class="progress-bar bg-danger" style="width: 0%"></div>
                </div>
                <small class="text-muted">0% of inventory value</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Category Performance Chart -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-white border-bottom">
                <h5 class="card-title mb-0">Category Performance</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <canvas id="categoryChart" height="300"></canvas>
                  </div>
                  <div class="col-md-4">
                    <div class="chart-legend">
                      <div class="legend-item d-flex align-items-center mb-3">
                        <div class="legend-color bg-primary me-3"></div>
                        <div>
                          <div class="fw-bold">Electronics</div>
                          <small class="text-muted"
                            >45 products - $45,230</small
                          >
                        </div>
                      </div>
                      <div class="legend-item d-flex align-items-center mb-3">
                        <div class="legend-color bg-success me-3"></div>
                        <div>
                          <div class="fw-bold">Home & Garden</div>
                          <small class="text-muted"
                            >28 products - $12,450</small
                          >
                        </div>
                      </div>
                      <div class="legend-item d-flex align-items-center mb-3">
                        <div class="legend-color bg-info me-3"></div>
                        <div>
                          <div class="fw-bold">Books & Media</div>
                          <small class="text-muted">67 products - $3,280</small>
                        </div>
                      </div>
                      <div class="legend-item d-flex align-items-center mb-3">
                        <div class="legend-color bg-warning me-3"></div>
                        <div>
                          <div class="fw-bold">Arts & Crafts</div>
                          <small class="text-muted">12 products - $890</small>
                        </div>
                      </div>
                      <div class="legend-item d-flex align-items-center mb-3">
                        <div class="legend-color bg-purple me-3"></div>
                        <div>
                          <div class="fw-bold">Health & Beauty</div>
                          <small class="text-muted">34 products - $5,670</small>
                        </div>
                      </div>
                    </div>
                  </div>
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

/* Category Cards */
.category-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.category-icon-wrapper {
  display: flex;
  align-items: center;
}

.category-icon {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Custom Colors */
.bg-purple {
  background-color: #8b5cf6 !important;
}

.text-purple {
  color: #8b5cf6 !important;
}

.bg-purple.bg-opacity-10 {
  background-color: rgba(139, 92, 246, 0.1) !important;
}

.progress-bar.bg-purple {
  background-color: #8b5cf6 !important;
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

/* Chart Legend */
.chart-legend {
  padding: 1rem 0;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  flex-shrink: 0;
}

.legend-item {
  padding: 0.5rem 0;
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

  .category-card {
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

  .chart-legend {
    margin-top: 2rem;
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

/* Card Header */
.card-header {
  border-bottom: 1px solid #f1f3f4;
  padding: 1rem 1.5rem;
}
</style>
