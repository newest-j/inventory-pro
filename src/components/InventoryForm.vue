<template>
  <div class="col-xl-9 col-lg-8">
    <div
      v-for="(form, index) in forms"
      :key="index"
      class="card border-0 shadow-sm mb-4"
    >
      <div class="card-header bg-white border-0 pb-0">
        <h5 class="card-title mb-0">
          Add New Inventory Item {{ index > 0 ? `#${index + 1}` : "" }}
        </h5>
      </div>
      <div class="card-body">
        <form class="row g-3">
          <!-- Product Name -->
          <div class="col-md-6">
            <label for="productName" class="form-label fw-medium"
              >Product Name</label
            >
            <input
              type="text"
              class="form-control"
              id="productName"
              placeholder="Enter product name"
              required
            />
          </div>

          <!-- Category -->
          <div class="col-md-6">
            <label for="category" class="form-label fw-medium">Category</label>
            <select class="form-select" id="category" required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Gaming">Gaming</option>
              <option value="Audio">Audio</option>
              <option value="Cables">Cables</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Quantity -->
          <div class="col-md-4">
            <label for="quantity" class="form-label fw-medium">Quantity</label>
            <input
              type="number"
              class="form-control"
              id="quantity"
              placeholder="Enter quantity"
              min="0"
              required
            />
          </div>

          <!-- Low Stock Threshold -->
          <div class="col-md-4">
            <label for="lowStockThreshold" class="form-label fw-medium"
              >Low Stock Alert</label
            >
            <input
              type="number"
              class="form-control"
              id="lowStockThreshold"
              placeholder="Alert when below"
              min="1"
              required
            />
          </div>

          <!-- Price -->
          <div class="col-md-6">
            <label for="price" class="form-label fw-medium">Price (₦)</label>
            <input
              type="number"
              class="form-control"
              id="price"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>

          <!-- Supplier -->
          <div class="col-md-6">
            <label for="supplier" class="form-label fw-medium">Supplier</label>
            <input
              type="text"
              class="form-control"
              id="supplier"
              placeholder="Enter supplier name"
            />
          </div>

          <!-- Description -->
          <div class="col-12">
            <label for="description" class="form-label fw-medium"
              >Description</label
            >
            <textarea
              class="form-control"
              id="description"
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <!-- Location -->
          <div class="col-md-6">
            <label for="location" class="form-label fw-medium"
              >Storage Location</label
            >
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="e.g., Warehouse A, Shelf 3"
            />
          </div>

          <!-- Status -->
          <div class="col-md-6">
            <label for="status" class="form-label fw-medium">Status</label>
            <select class="form-select" id="status" required>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="discontinued">Discontinued</option>
            </select>
          </div>

          <!-- Submit Button -->
          <div class="col-12">
            <div class="d-flex gap-2">
              <button
                v-if="index === 0 && forms.length === 1"
                type="submit"
                class="btn btn-primary"
              >
                <i class="fas fa-plus me-2"></i>Add Item
              </button>

              <!-- Only show "Add another Form" on the last form -->
              <button
                v-if="index === forms.length - 1"
                type="button"
                class="btn btn-outline-info"
                @click="addForm"
              >
                <i class="fas fa-plus me-2"></i>Add another Form
              </button>

              <button
                v-if="index > 0 ? true : false"
                type="button"
                class="btn btn-outline-danger"
                @click="removeForm(index)"
              >
                <i class="fas fa-trash me-2"></i>Remove Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <button
      v-if="forms.length > 1 ? true : false"
      type="submit"
      class="btn btn-success"
    >
      <i class="fas fa-check-circle me-2"></i>Add all Item
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const forms = ref([{}]);

const addForm = () => {
  forms.value.push({});
};

const removeForm = (index: number) => {
  forms.value.splice(index, 1);
};
</script>

<style scoped>
/* Form specific styles */
.form-label {
  color: #495057;
  margin-bottom: 0.5rem;
}

.form-control,
.form-select {
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
</style>
