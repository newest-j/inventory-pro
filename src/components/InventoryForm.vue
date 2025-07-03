<template>
  <div class="col-xl-9 col-lg-8">
    <div
      v-for="(form, index) in forms"
      :key="index"
      class="card border-0 shadow-sm mb-4"
    >
      <div class="card-header bg-white border-0 pb-0">
        <h5 class="card-title mb-0">
          {{
            props.editProductId
              ? `Editing Inventory`
              : `Add New Inventory Item${index > 0 ? ` #${index + 1}` : ""}`
          }}
        </h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="onSubmit" class="row g-3">
          <!-- Product Name -->
          <div class="col-md-6">
            <label for="productName" class="form-label fw-medium"
              >Product Name</label
            >
            <input
              v-model="forms[index].name"
              type="text"
              class="form-control"
              id="productName"
              placeholder="Enter product name"
            />
          </div>

          <!-- Category -->
          <div class="col-md-6">
            <label for="category" class="form-label fw-medium">Category</label>
            <select
              class="form-select"
              v-model="forms[index].category"
              id="category"
            >
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
              v-model="forms[index].quantity"
              type="number"
              class="form-control"
              id="quantity"
              placeholder="Enter quantity"
              min="0"
            />
          </div>

          <!-- Low Stock Threshold -->
          <div class="col-md-4">
            <label for="lowStockThreshold" class="form-label fw-medium"
              >Low Stock Alert</label
            >
            <input
              v-model="forms[index].lowstock"
              type="number"
              class="form-control"
              id="lowStockThreshold"
              placeholder="Alert when below"
              min="1"
            />
          </div>

          <!-- Price -->
          <div class="col-md-6">
            <label for="price" class="form-label fw-medium">Price (₦)</label>
            <input
              v-model="forms[index].price"
              type="number"
              class="form-control"
              id="price"
              placeholder="0.00"
              step="0.01"
              min="0"
            />
          </div>

          <!-- Supplier -->
          <div class="col-md-6">
            <label for="supplier" class="form-label fw-medium">Supplier</label>
            <input
              v-model="forms[index].supplier"
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
              v-model="forms[index].description"
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
              v-model="forms[index].location"
              type="text"
              class="form-control"
              id="location"
              placeholder="e.g., Warehouse A, Shelf 3"
            />
          </div>

          <!-- Status -->
          <div class="col-md-6">
            <label for="status" class="form-label fw-medium">Status</label>
            <select
              class="form-select"
              v-model="forms[index].status"
              id="status"
            >
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
                :disabled="userProduct.loading"
              >
                <!-- Bootstrap Spinner -->
                <span
                  v-if="userProduct.loading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                <i v-else class="fas fa-plus me-2"></i>
                {{
                  userProduct.loading
                    ? props.editProductId
                      ? "Updating Item..."
                      : "Adding Item..."
                    : props.editProductId
                    ? "Update Item"
                    : "Add Item"
                }}
              </button>

              <!-- Only show "Add another Form" on the last form -->
              <button
                v-if="index === forms.length - 1 && !props.editProductId"
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
      @click="onSubmit"
      type="submit"
      class="btn btn-success"
      :disabled="userProduct.loading"
    >
      <!-- Bootstrap Spinner -->
      <span
        v-if="userProduct.loading"
        class="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>

      <i v-else class="fas fa-check-circle me-2"></i>
      {{ userProduct.loading ? "Adding All Item..." : "Add All Item " }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { userProductStore } from "../stores/UserProductStore";

const props = defineProps(["editProductId", "closeModal"]);

const userProduct = userProductStore();

const forms = ref([
  {
    category: "",
    name: "",
    price: 0,
    quantity: 0,
    status: "active",
    supplier: "",
    location: "",
    lowstock: 0,
    description: "",
  },
]);

const addForm = () => {
  forms.value.push({
    category: "",
    name: "",
    price: 0,
    quantity: 0,
    status: "active",
    supplier: "",
    location: "",
    lowstock: 0,
    description: "",
  });
};

const removeForm = (index: number) => {
  forms.value.splice(index, 1);
};

const resetForm = () => {
  forms.value = [
    {
      category: "",
      name: "",
      price: 0,
      quantity: 0,
      status: "active",
      supplier: "",
      location: "",
      lowstock: 0,
      description: "",
    },
  ];
};

const loadProductForEdit = (productId: any) => {
  const product = userProduct.products.find((p) => p.id === productId);
  if (product) {
    forms.value = [
      {
        category: product.category || "",
        name: product.name || "",
        price: product.price || 0,
        quantity: product.quantity || 0,
        status: product.status || "active",
        supplier: product.supplier || "",
        location: product.location || "",
        lowstock: product.lowstock || 0,
        description: product.description || "",
      },
    ];
  }
};

// Watch for changes in editProductId prop
watch(
  () => props.editProductId,
  (newId) => {
    if (newId) {
      loadProductForEdit(newId);
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

const onSubmit = async () => {
  if (forms.value.length === 1) {
    // Assign form data to store
    Object.assign(userProduct, forms.value[0]);

    if (props.editProductId) {
      // Update existing product
      await userProduct.editProduct(props.editProductId);
    } else {
      // Create new product
      await userProduct.createProduct();
    }

    // Reset form after successful submission
    resetForm();

    // Close modal using the passed function
    if (props.closeModal) {
      props.closeModal();
    }
  } else {
    // Handle multiple forms (only for adding new products)
    const names = forms.value.map((form) => form.name.trim());
    const duplicateNames = names.filter(
      (name, index) => name !== "" && names.indexOf(name) !== index
    );

    if (duplicateNames.length > 0) {
      alert(
        `Error: Duplicate product name(s) found: ${duplicateNames.join(
          ", "
        )}. Please use unique names.`
      );
      return;
    }

    userProduct.loading = true;

    try {
      for (const formData of forms.value) {
        Object.assign(userProduct, formData);
        await userProduct.createProduct();
      }
      resetForm();

      // Close modal using the passed function
      if (props.closeModal) {
        props.closeModal();
      }
    } catch (error) {
      console.error("Error adding multiple items:", error);
    } finally {
      userProduct.loading = false;
    }
  }
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
