<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <side-bar />

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header
        class="header bg-white border-bottom d-flex flex-wrap justify-content-between align-items-center px-4 py-3"
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
        <div class="d-flex flex-wrap align-items-center">
          <offcanvas class="me-3" />
          <h2 class="mb-0 text-dark me-3">Categories</h2>
          <span class="badge bg-primary fs-6"
            >{{ getTotalCategories }} categories</span
          >
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
                  <h3 class="card-title mb-1 fw-bold">
                    {{ getTotalCategories }}
                  </h3>
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
                  <h3 class="card-title mb-1 fw-bold">
                    {{ getActiveCategories }}
                  </h3>
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
                  <h3 class="card-title mb-1 fw-bold">
                    {{ productStore.getTotalProduct }}
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
                  class="stat-icon bg-warning bg-opacity-10 text-warning rounded me-3"
                >
                  <i class="bi bi-star fs-3"></i>
                </div>
                <div>
                  <h3 class="card-title mb-1 fw-bold">{{ topCategory }}</h3>
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
                        v-model="searchTerm"
                      />
                    </div>

                    <select
                      class="form-select filter-select"
                      style="max-width: 200px"
                      v-model="statusFilter"
                    >
                      <option value="">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>

                  <div class="d-flex gap-2">
                    <button
                      class="btn btn-outline-secondary hover-scale"
                      @click="exportCategories"
                    >
                      <i class="bi bi-download me-1"></i>
                      Export
                    </button>
                    <button
                      class="btn btn-primary hover-lift"
                      @click="openCreateModal"
                    >
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
          <div
            v-for="category in paginatedCategories"
            :key="category.id"
            class="col-xl-4 col-lg-6 col-md-6 mb-4"
          >
            <div
              class="card category-card border-0 shadow-sm h-100 hover-lift-scale"
            >
              <div class="card-body p-4">
                <div
                  class="d-flex justify-content-between align-items-start mb-3"
                >
                  <div class="category-icon-wrapper">
                    <div
                      class="category-icon"
                      :style="{
                        backgroundColor: category.color + '20',
                        color: category.color,
                      }"
                    >
                      <i :class="category.icon + ' fs-2'"></i>
                    </div>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-outline-secondary dropdown-toggle"
                      type="button"
                      :id="`dropdownMenuButton${category.id}`"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul
                      class="dropdown-menu"
                      :aria-labelledby="`dropdownMenuButton${category.id}`"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openEditModal(category)"
                        >
                          <i class="bi bi-pencil me-2"></i>Edit
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="viewProducts(category.name)"
                        >
                          <i class="bi bi-eye me-2"></i>View Products
                        </a>
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a
                          class="dropdown-item text-danger"
                          href="#"
                          @click.prevent="handleDeleteCategory(category.id)"
                        >
                          <i class="bi bi-trash me-2"></i>Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 class="card-title fw-bold mb-2">{{ category.name }}</h5>
                <p class="text-muted small mb-3">
                  {{ category.description }}
                </p>

                <div class="row mb-3">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-box me-2 text-muted"></i>
                      <span class="small text-muted">Products</span>
                    </div>
                    <div class="fw-bold">
                      {{ getCategoryProductCount(category.name) }}
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <i class="bi bi-currency-naira me-2 text-muted"></i>
                      <span class="small text-muted">₦ Total Value</span>
                    </div>
                    <div class="fw-bold">
                      ₦{{
                        formatCurrency(getCategoryTotalValue(category.name))
                      }}
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <small class="text-muted"
                    >Created: {{ formatDate(category.createdAt) }}</small
                  >
                  <span class="badge" :class="getBadgeClass(category)">
                    {{ getBadgeText(category) }}
                  </span>
                </div>

                <div class="progress mb-3" style="height: 6px">
                  <div
                    class="progress-bar"
                    :style="{
                      width: getCategoryPercentage(category.name) + '%',
                      backgroundColor: category.color,
                    }"
                  ></div>
                </div>
                <small class="text-muted"
                  >{{ getCategoryPercentage(category.name).toFixed(1) }}% of
                  inventory value</small
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredCategories.length === 0" class="text-center py-5">
          <i class="bi bi-tags display-1 text-muted"></i>
          <h4 class="mt-3 text-muted">No categories found</h4>
          <p class="text-muted">
            {{
              searchTerm || statusFilter
                ? "Try adjusting your search or filter criteria"
                : "Create your first category to get started"
            }}
          </p>
          <button
            v-if="!searchTerm && !statusFilter"
            class="btn btn-primary"
            @click="openCreateModal"
          >
            <i class="bi bi-plus-circle me-2"></i>Add Category
          </button>
        </div>

        <!-- Category Performance Chart -->
        <div class="row mt-5" v-if="categoryPerformanceData.length > 0">
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-white border-bottom">
                <h5 class="card-title mb-0">Category Performance</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-8">
                    <canvas ref="chartCanvas" height="300"></canvas>
                  </div>
                  <div class="col-md-4">
                    <div class="chart-legend">
                      <div
                        v-for="item in categoryPerformanceData"
                        :key="item.categoryName"
                        class="legend-item d-flex align-items-center mb-3"
                      >
                        <div
                          class="legend-color me-3"
                          :style="{ backgroundColor: item.color }"
                        ></div>
                        <div>
                          <div class="fw-bold">{{ item.categoryName }}</div>
                          <small class="text-muted">
                            {{ item.productCount }} products - ₦{{
                              formatCurrency(item.totalValue)
                            }}
                          </small>
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
        <nav class="mt-4" v-if="totalPages > 1">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a
                class="page-link"
                href="#"
                @click.prevent="changePage(currentPage - 1)"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              v-for="page in visiblePages"
              :key="page"
              class="page-item"
              :class="{ active: page === currentPage }"
            >
              <a class="page-link" href="#" @click.prevent="changePage(page)">{{
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
                @click.prevent="changePage(currentPage + 1)"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div
      class="modal fade"
      :class="{ show: showModal }"
      :style="{ display: showModal ? 'block' : 'none' }"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ isEditing ? "Edit Category" : "Add New Category" }}
            </h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveCategory">
              <div class="mb-3">
                <label for="categoryName" class="form-label"
                  >Category Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="categoryName"
                  v-model="name"
                  required
                  placeholder="Enter category name"
                />
              </div>

              <div class="mb-3">
                <label for="categoryDescription" class="form-label"
                  >Description</label
                >
                <textarea
                  class="form-control"
                  id="categoryDescription"
                  rows="3"
                  v-model="description"
                  required
                  placeholder="Enter category description"
                ></textarea>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="categoryIcon" class="form-label"
                      >Icon (Bootstrap Icon)</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="categoryIcon"
                      v-model="icon"
                      placeholder="bi-tag"
                      required
                    />
                    <small class="form-text text-muted">
                      Example: bi-laptop, bi-book, bi-heart-pulse
                    </small>
                    <div class="mt-2" v-if="icon">
                      <small class="text-muted">Preview: </small>
                      <i
                        :class="icon"
                        class="fs-5 ms-2"
                        :style="{ color: color }"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="categoryColor" class="form-label">Color</label>
                    <input
                      type="color"
                      class="form-control form-control-color"
                      id="categoryColor"
                      v-model="color"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="categoryStatus" class="form-label">Status</label>
                <select
                  class="form-select"
                  id="categoryStatus"
                  v-model="status"
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="saveCategory"
              :disabled="loading"
            >
              <span
                v-if="loading"
                class="spinner-border spinner-border-sm me-2"
              ></span>
              {{ isEditing ? "Update" : "Create" }} Category
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <div
      v-if="showModal"
      class="modal-backdrop fade show"
      @click="closeModal"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from "vue";
import { useRouter } from "vue-router";
import { useDarkMode } from "../composables/useDarkMode";

import { userProductStore } from "../stores/UserProductStore";
import axios from "axios";
import Swal from "sweetalert2";

const router = useRouter();
const productStore = userProductStore();

useDarkMode();

// Category interface following UserProductStore pattern
interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

// Reactive data - following UserProductStore pattern
const name = ref("");
const description = ref("");
const icon = ref("bi-tag");
const color = ref("#0d6efd");
const status = ref<"active" | "inactive">("active");
const loading = ref(false);
const categories = ref<Category[]>([]);
const editingId = ref("");

// UI state
const searchTerm = ref("");
const statusFilter = ref("");
const showModal = ref(false);
const isEditing = ref(false);
const currentPage = ref(1);
const itemsPerPage = ref(6);
const chartCanvas = ref<HTMLCanvasElement | null>(null);

// Form validation getter - following UserProductStore pattern
const isFormValid = computed(() => {
  const errors: string[] = [];

  if (!name.value.trim()) errors.push("Category name is required");
  if (!description.value.trim()) errors.push("Description is required");
  if (!icon.value.trim()) errors.push("Icon is required");
  if (!color.value.trim()) errors.push("Color is required");

  if (errors.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: errors.join(", "),
      toast: true,
      position: "top-end",
      timer: 4000,
      showConfirmButton: false,
    });
    return false;
  }
  return true;
});

// Computed properties
const filteredCategories = computed(() => {
  let filtered = categories.value;

  // Filter by search term
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    filtered = filtered.filter(
      (category) =>
        category.name.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term)
    );
  }

  // Filter by status
  if (statusFilter.value) {
    filtered = filtered.filter(
      (category) => category.status === statusFilter.value
    );
  }

  return filtered;
});

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCategories.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredCategories.value.length / itemsPerPage.value);
});

const visiblePages = computed(() => {
  const pages = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(totalPages.value, currentPage.value + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const getTotalCategories = computed(() => categories.value.length);

const getActiveCategories = computed(() => {
  return categories.value.filter((cat) => cat.status === "active").length;
});

const topCategory = computed(() => {
  if (productStore.products.length === 0) return "None";

  const categoryCount = productStore.products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCat = Object.entries(categoryCount).sort(
    ([, a]: any, [, b]: any) => b - a
  )[0];
  return topCat ? topCat[0] : "None";
});

const categoryPerformanceData = computed(() => {
  // Explicitly type the accumulator object for TypeScript
  type CategoryStats = { productCount: number; totalValue: number };
  const categoryData: Record<string, CategoryStats> =
    productStore.products.reduce((acc, product) => {
      const categoryName = product.category;
      if (!acc[categoryName]) {
        acc[categoryName] = {
          productCount: 0,
          totalValue: 0,
        };
      }
      acc[categoryName].productCount += 1;
      acc[categoryName].totalValue += product.price * product.quantity;
      return acc;
    }, {} as Record<string, CategoryStats>);

  const colors = [
    "#0d6efd",
    "#198754",
    "#dc3545",
    "#ffc107",
    "#6f42c1",
    "#20c997",
  ];

  return Object.entries(categoryData)
    .map(([categoryName, data], index) => {
      const category = categories.value.find(
        (cat) => cat.name === categoryName
      );

      return {
        categoryName,
        productCount: data.productCount,
        totalValue: data.totalValue,
        color: category?.color || colors[index % colors.length],
      };
    })
    .sort((a, b) => b.totalValue - a.totalValue);
});

// Methods - following UserProductStore pattern
const loadCategories = async () => {
  loading.value = true;
  try {
    const userString = localStorage.getItem("currentUser");

    if (!userString) {
      throw new Error("No current user");
    }

    const userId: string = JSON.parse(userString);

    const currentUser = await axios.get(
      `http://localhost:3000/users/${userId}`
    );
    if (!currentUser) {
      throw new Error("Failed to fetch user data");
    }
    const userData = currentUser.data;

    categories.value = userData?.categories || [];
    return true;
  } catch (error: any) {
    console.error("Error loading categories:", error);
    Swal.fire({
      icon: "error",
      title: "Loading Failed",
      text: "Failed to load categories",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
  } finally {
    loading.value = false;
  }
};

const clearForm = () => {
  name.value = "";
  description.value = "";
  icon.value = "bi-tag";
  color.value = "#0d6efd";
  status.value = "active";
  editingId.value = "";
};

const createCategory = async () => {
  loading.value = true;

  if (!isFormValid.value) {
    loading.value = false;
    return;
  }

  try {
    const userString = localStorage.getItem("currentUser");

    if (!userString) {
      throw new Error("No current user");
    }

    const userId: string = JSON.parse(userString);

    const currentUser = await axios.get(
      `http://localhost:3000/users/${userId}`
    );

    if (!currentUser) {
      throw new Error("Failed to fetch user data");
    }

    const userData = currentUser.data;
    const userCategories = userData?.categories || [];

    const categoryExists = userCategories.some(
      (cat: Category) => cat.name.toLowerCase() === name.value.toLowerCase()
    );

    if (categoryExists) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Category already exists.",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
      });
      return false;
    }

    let maxId = 0;
    userCategories.forEach((cat: Category) => {
      const numericId = parseInt(cat.id, 10);
      if (numericId > maxId) {
        maxId = numericId;
      }
    });

    const nextId = (maxId + 1).toString();

    const newCategory: Category = {
      id: nextId,
      name: name.value,
      description: description.value,
      icon: icon.value,
      color: color.value,
      status: status.value,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    userCategories.push(newCategory);
    userData.categories = userCategories;

    const updatedUserCategory = await axios.put(
      `http://localhost:3000/users/${userId}`,
      userData
    );

    if (
      updatedUserCategory.status !== 200 &&
      updatedUserCategory.status !== 201
    ) {
      throw new Error("Failed to update user");
    }

    if (
      updatedUserCategory.status === 200 ||
      updatedUserCategory.status === 201
    ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category added successfully!",
        showConfirmButton: false,
        timer: 1000,
        toast: true,
      });

      const localCategoryExist = categories.value.some(
        (c) => c.name === name.value
      );
      if (!localCategoryExist) {
        categories.value.push(newCategory);
      }

      clearForm();
      return newCategory;
    }
  } catch (error: any) {
    console.error("Error creating category:", error);
    Swal.fire({
      icon: "error",
      title: "Creation Failed",
      text: "Failed to create category",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
  } finally {
    loading.value = false;
  }
};

const editCategory = async (categoryId: string) => {
  editingId.value = categoryId;
  loading.value = true;

  if (!isFormValid.value) {
    loading.value = false;
    return;
  }

  try {
    const userString = localStorage.getItem("currentUser");

    if (!userString) {
      throw new Error("No current user");
    }

    const userId: string = JSON.parse(userString);

    const category = categories.value.find((c) => c.id === categoryId);

    if (!category) {
      throw new Error("Category not found");
    }

    const user = await axios.get(`http://localhost:3000/users/${userId}`);
    const userData = await user.data;

    const categoryMatchIndex = userData?.categories.findIndex(
      (c: Category) => c.id === categoryId
    );

    if (categoryMatchIndex === -1) {
      throw new Error("Category not found in the User data");
    }

    // Check for duplicate category names (excluding current category)
    const categoryExists = userData.categories.some(
      (c: Category) =>
        c.name.toLowerCase() === name.value.toLowerCase() && c.id !== categoryId
    );

    if (categoryExists) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Category name already exists.",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
      });
      return false;
    }

    const updatedCategory: Category = {
      id: categoryId,
      name: name.value,
      description: description.value,
      icon: icon.value,
      color: color.value,
      status: status.value,
      createdAt: category.createdAt,
      updatedAt: new Date().toISOString(),
    };

    userData.categories[categoryMatchIndex] = updatedCategory;

    const editCategoryUpdated = await axios.put(
      `http://localhost:3000/users/${userId}`,
      userData
    );

    if (
      editCategoryUpdated.status !== 200 &&
      editCategoryUpdated.status !== 201
    ) {
      throw new Error("Failed to update category");
    }

    // Update local state
    const localCategoryIndex = categories.value.findIndex(
      (c) => c.id === categoryId
    );
    if (localCategoryIndex !== -1) {
      categories.value[localCategoryIndex] = updatedCategory;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Category updated successfully!",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
    });

    clearForm();
    return updatedCategory;
  } catch (error: any) {
    console.error("Error updating category:", error);
    Swal.fire({
      icon: "error",
      title: "Update Failed",
      text: error.message || "Failed to update category",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
    throw error;
  } finally {
    loading.value = false;
  }
};

const deleteCategory = async (categoryId: string) => {
  // Check if category has products
  const category = categories.value.find((cat) => cat.id === categoryId);
  if (category && getCategoryProductCount(category.name) > 0) {
    Swal.fire({
      icon: "warning",
      title: "Cannot Delete Category",
      text: `This category has ${getCategoryProductCount(
        category.name
      )} products. Please remove all products first.`,
      confirmButtonText: "OK",
    });
    return false;
  }

  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (!result.isConfirmed) {
    return false;
  }

  loading.value = true;
  try {
    const userString = localStorage.getItem("currentUser");

    if (!userString) {
      throw new Error("No current user");
    }

    const userId: string = JSON.parse(userString);

    const user = await axios.get(`http://localhost:3000/users/${userId}`);
    const userData = await user.data;

    const userCategories = await userData?.categories;

    const categoryMatchIndex = userCategories.findIndex(
      (c: Category) => c.id === categoryId
    );

    if (categoryMatchIndex === -1) {
      throw new Error("Category not found in the User data");
    }

    if (categoryMatchIndex !== -1) {
      userCategories.splice(categoryMatchIndex, 1);
    }

    // Update local state
    const localCategoryIndex = categories.value.findIndex(
      (c) => c.id === categoryId
    );

    if (localCategoryIndex === -1) {
      throw new Error("Category not found");
    }

    if (localCategoryIndex !== -1) {
      categories.value.splice(localCategoryIndex, 1);
    }

    const updatedUser = await axios.put(
      `http://localhost:3000/users/${userId}`,
      userData
    );

    if (updatedUser.status !== 200 && updatedUser.status !== 201) {
      throw new Error("Failed to delete category");
    }

    if (updatedUser.status === 200 || updatedUser.status === 201) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Category deleted successfully!",
        showConfirmButton: false,
        timer: 1000,
        toast: true,
      });

      return true;
    }
  } catch (error: any) {
    console.error("Error deleting category:", error);
    Swal.fire({
      icon: "error",
      title: "Delete Failed",
      text: error.message || "Failed to delete category",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
    throw error;
  } finally {
    loading.value = false;
  }
};

// Utility methods
const formatCurrency = (value: number): string => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getCategoryProductCount = (categoryName: string): number => {
  return productStore.getTotalCategory(categoryName);
};

const getCategoryTotalValue = (categoryName: string): number => {
  return productStore.getAllCategory(categoryName).reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
};

const getCategoryPercentage = (categoryName: string): number => {
  const totalValue = productStore.getTotalInventoryValue;
  const categoryValue = getCategoryTotalValue(categoryName);
  return totalValue > 0 ? (categoryValue / totalValue) * 100 : 0;
};

const getBadgeClass = (category: Category): string => {
  if (category.status === "inactive") return "bg-secondary";
  const productCount = getCategoryProductCount(category.name);
  if (productCount === 0) return "bg-warning text-dark";
  return "bg-success";
};

const getBadgeText = (category: Category): string => {
  if (category.status === "inactive") return "Inactive";
  const productCount = getCategoryProductCount(category.name);
  if (productCount === 0) return "No Products";
  return "Active";
};

// Modal methods
const openCreateModal = () => {
  clearForm();
  isEditing.value = false;
  showModal.value = true;
};

const openEditModal = (category: Category) => {
  name.value = category.name;
  description.value = category.description;
  icon.value = category.icon;
  color.value = category.color;
  status.value = category.status;
  editingId.value = category.id;
  isEditing.value = true;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  isEditing.value = false;
  clearForm();
};

const saveCategory = async () => {
  loading.value = true;
  try {
    let success: any = false;

    if (isEditing.value) {
      success = await editCategory(editingId.value);
    } else {
      success = await createCategory();
    }

    // Only close modal and reload if the operation was successful (not false or undefined)
    if (success) {
      closeModal();
      await loadData();
    }
  } catch (error) {
    console.error("Error saving category:", error);
  } finally {
    loading.value = false;
  }
};

const handleDeleteCategory = async (categoryId: string) => {
  const success = await deleteCategory(categoryId);
  if (success) {
    await loadData();
    // Adjust current page if necessary
    if (paginatedCategories.value.length === 0 && currentPage.value > 1) {
      currentPage.value--;
    }
  }
};

const viewProducts = (categoryName: string) => {
  router.push({ name: "products", query: { category: categoryName } });
};

const exportCategories = () => {
  if (filteredCategories.value.length === 0) {
    alert("No categories to export");
    return;
  }

  const data = filteredCategories.value.map((cat) => ({
    Name: cat.name,
    Description: cat.description,
    Status: cat.status,
    Products: getCategoryProductCount(cat.name),
    "Total Value": getCategoryTotalValue(cat.name),
    Created: formatDate(cat.createdAt),
  }));

  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((header) => `"${row[header as keyof typeof row]}"`).join(",")
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `categories-${new Date().toISOString().split("T")[0]}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const loadData = async () => {
  try {
    await Promise.all([loadCategories(), productStore.loadUserProduct()]);

    // Initialize chart
    nextTick(() => {
      initializeChart();
    });
  } catch (error) {
    console.error("Error loading data:", error);
  }
};

const initializeChart = () => {
  if (!chartCanvas.value || categoryPerformanceData.value.length === 0) return;

  const canvas = chartCanvas.value;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Set canvas size
  canvas.width = canvas.offsetWidth;
  canvas.height = 300;

  // Simple pie chart implementation
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 20;

  let currentAngle = 0;
  const total = categoryPerformanceData.value.reduce(
    (sum, item) => sum + item.totalValue,
    0
  );

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  categoryPerformanceData.value.forEach((item) => {
    const sliceAngle = (item.totalValue / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = item.color;
    ctx.fill();

    // Add border
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    currentAngle += sliceAngle;
  });
};

// Watch for changes
watch([searchTerm, statusFilter], () => {
  currentPage.value = 1;
});

// Lifecycle
onMounted(async () => {
  await loadData();
});
</script>

<style scoped>
/* Base Layout */
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
  margin-left: 250px; /* Sidebar width */
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

/* Modal Styles */
.modal {
  backdrop-filter: blur(4px);
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  border-radius: 12px;
  border: none;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.modal-header {
  border-bottom: 1px solid #f1f3f4;
  padding: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  border-top: 1px solid #f1f3f4;
  padding: 1.5rem;
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

  .header {
    padding: 0.75rem 1rem !important;
  }

  .content {
    padding: 1rem !important;
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

/* Loading spinner */
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

/* Form improvements */
.form-control:focus,
.form-select:focus,
.form-control-color:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Preview icon styling */
.modal-body .form-text + div {
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 0.375rem;
  border: 1px solid #dee2e6;
  margin-top: 0.5rem;
}
</style>
