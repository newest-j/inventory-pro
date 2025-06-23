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
          <div class="col-xl-9 col-lg-8">
            <!-- Stats Row -->
            <div class="row mb-4">
              <div class="col-xl-3 col-md-6 mb-3">
                <div class="card stat-card border-0 shadow-sm">
                  <div class="card-body d-flex align-items-center">
                    <div
                      class="stat-icon bg-primary bg-opacity-10 text-primary rounded me-3"
                    >
                      <i class="bi bi-box-seam fs-3"></i>
                    </div>
                    <div>
                      <h3 class="card-title mb-1 fw-bold">1,247</h3>
                      <p class="card-text text-muted small mb-0">
                        Total Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-3">
                <div class="card stat-card border-0 shadow-sm">
                  <div class="card-body d-flex align-items-center">
                    <div
                      class="stat-icon bg-success bg-opacity-10 text-success rounded me-3"
                    >
                      <i class="bi bi-currency-dollar fs-3"></i>
                    </div>
                    <div>
                      <h3 class="card-title mb-1 fw-bold">$89,420</h3>
                      <p class="card-text text-muted small mb-0">
                        Total Stock Value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-3">
                <div class="card stat-card border-0 shadow-sm">
                  <div class="card-body d-flex align-items-center">
                    <div
                      class="stat-icon bg-warning bg-opacity-10 text-warning rounded me-3"
                    >
                      <i class="bi bi-exclamation-triangle fs-3"></i>
                    </div>
                    <div>
                      <h3 class="card-title mb-1 fw-bold">23</h3>
                      <p class="card-text text-muted small mb-0">
                        Low-Stock Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-3">
                <div class="card stat-card border-0 shadow-sm">
                  <div class="card-body d-flex align-items-center">
                    <div
                      class="stat-icon bg-danger bg-opacity-10 text-danger rounded me-3"
                    >
                      <i class="bi bi-x-circle fs-3"></i>
                    </div>
                    <div>
                      <h3 class="card-title mb-1 fw-bold">7</h3>
                      <p class="card-text text-muted small mb-0">
                        Out-of-Stock Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Filters and Search -->
            <div class="row mb-4">
              <div class="col-12">
                <div class="card border-0 shadow-sm">
                  <div class="card-body">
                    <div class="d-flex flex-wrap gap-3 align-items-center">
                      <div class="flex-grow-1 d-flex gap-3">
                        <select class="form-select" style="max-width: 200px">
                          <option value="">All Categories</option>
                          <option value="electronics">Electronics</option>
                          <option value="clothing">Clothing</option>
                          <option value="books">Books</option>
                          <option value="home">Home & Garden</option>
                        </select>
                        <div class="input-group" style="max-width: 300px">
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
                      <button class="btn btn-primary">
                        <i class="bi bi-plus me-1"></i>
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Data Table -->
            <div class="card border-0 shadow-sm">
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th class="border-0 px-4 py-3">Name</th>
                        <th class="border-0 px-4 py-3">Category</th>
                        <th class="border-0 px-4 py-3">Quantity</th>
                        <th class="border-0 px-4 py-3">Price</th>
                        <th class="border-0 px-4 py-3">Supplier</th>
                        <th class="border-0 px-4 py-3">Status</th>
                        <th class="border-0 px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-4 py-3">iPhone 14 Pro</td>
                        <td class="px-4 py-3">Electronics</td>
                        <td class="px-4 py-3">45</td>
                        <td class="px-4 py-3">$999.00</td>
                        <td class="px-4 py-3">Apple Inc.</td>
                        <td class="px-4 py-3">
                          <span class="badge bg-success">In Stock</span>
                        </td>
                        <td class="px-4 py-3">
                          <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Samsung Galaxy S23</td>
                        <td class="px-4 py-3">Electronics</td>
                        <td class="px-4 py-3">8</td>
                        <td class="px-4 py-3">$799.00</td>
                        <td class="px-4 py-3">Samsung</td>
                        <td class="px-4 py-3">
                          <span class="badge bg-warning text-dark"
                            >Low Stock</span
                          >
                        </td>
                        <td class="px-4 py-3">
                          <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">MacBook Air M2</td>
                        <td class="px-4 py-3">Electronics</td>
                        <td class="px-4 py-3">0</td>
                        <td class="px-4 py-3">$1,199.00</td>
                        <td class="px-4 py-3">Apple Inc.</td>
                        <td class="px-4 py-3">
                          <span class="badge bg-danger">Out of Stock</span>
                        </td>
                        <td class="px-4 py-3">
                          <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Nike Air Max 270</td>
                        <td class="px-4 py-3">Clothing</td>
                        <td class="px-4 py-3">32</td>
                        <td class="px-4 py-3">$150.00</td>
                        <td class="px-4 py-3">Nike</td>
                        <td class="px-4 py-3">
                          <span class="badge bg-success">In Stock</span>
                        </td>
                        <td class="px-4 py-3">
                          <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3">Wireless Earbuds</td>
                        <td class="px-4 py-3">Electronics</td>
                        <td class="px-4 py-3">5</td>
                        <td class="px-4 py-3">$79.99</td>
                        <td class="px-4 py-3">Sony</td>
                        <td class="px-4 py-3">
                          <span class="badge bg-warning text-dark"
                            >Low Stock</span
                          >
                        </td>
                        <td class="px-4 py-3">
                          <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary">
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger">
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

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

<script setup lang="ts"></script>

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
element.style {
  padding-right: 0px;
}

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
