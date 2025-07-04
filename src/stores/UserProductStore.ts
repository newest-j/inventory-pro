import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import type { Product } from "@/product/product";

const API_BASE_URL = "https://686790d4e3fefb261edf218d.mockapi.io/users";

export const userProductStore = defineStore("userProduct", {
  state: () => ({
    category: "",
    name: "",
    price: 0,
    quantity: 0,
    status: "active" as "active" | "inactive" | "discontinued",
    supplier: "",
    location: "",
    lowstock: 0,
    description: "",
    stock: "",
    loading: false,
    products: [] as Product[],
    editingId: "",
  }),
  getters: {
    isFormValid(state) {
      const errors: string[] = [];

      if (!state.name) errors.push("Product name is required");
      if (!state.category) errors.push("Category is required");
      if (!state.supplier) errors.push("Supplier is required");
      if (!state.location) errors.push("Location is required");
      if (state.price <= 0) errors.push("Price must be greater than 0");
      if (state.quantity < 0) errors.push("Quantity cannot be negative");
      if (state.lowstock < 0)
        errors.push("Low stock threshold cannot be negative");

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
      } else {
        Swal.fire({
          icon: "success",
          title: "Form Valid!",
          text: "All fields are correctly filled",
          toast: true,
          position: "top-end",
          timer: 2000,
          showConfirmButton: false,
        });
        return true;
      }
    },

    getTotalProduct(state) {
      return state.products.length;
    },

    getInStockProducts(state) {
      return state.products.filter(
        (product) => product.quantity > product.lowstock
      ).length;
    },

    getLowStockProducts(state) {
      return state.products.filter(
        (product) =>
          product.quantity > 0 && product.quantity <= product.lowstock
      ).length;
    },

    getLowStockProductsData(state) {
      return state.products.filter(
        (product) =>
          product.quantity > 0 && product.quantity <= product.lowstock
      );
    },

    getOutOfStockProducts(state) {
      return state.products.filter((product) => product.quantity === 0).length;
    },

    getActiveProducts(state) {
      return state.products.filter((product) => product.status === "active")
        .length;
    },

    getTotalInventoryValue(state) {
      return state.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },

    getTotalCategory(state) {
      return (category: string) =>
        state.products.filter((product) => product.category === category)
          .length;
    },

    getAllCategory(state) {
      return (category: string) => {
        return state.products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      };
    },

    filteredProducts(state) {
      return (category: string, status: string, searchTerm: string) => {
        let products = state.products;

        // Filter by category if provided
        if (category && category !== "") {
          products = products.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase()
          );
        }

        // Filter by status if provided
        if (status && status !== "") {
          products = products.filter((product) => {
            switch (status.toLowerCase()) {
              case "in-stock":
                return product.quantity > product.lowstock;
              case "low-stock":
                return (
                  product.quantity > 0 && product.quantity <= product.lowstock
                );
              case "out-of-stock":
                return product.quantity === 0;
              default:
                return true;
            }
          });
        }

        // Filter by search term if provided
        if (searchTerm && searchTerm !== "") {
          const term = searchTerm.toLowerCase().trim();
          products = products.filter((product) => {
            return (
              product.name.toLowerCase().includes(term) ||
              product.category.toLowerCase().includes(term) ||
              product.supplier.toLowerCase().includes(term) ||
              product.description.toLowerCase().includes(term) ||
              product.location.toLowerCase().includes(term)
            );
          });
        }

        return products;
      };
    },
  },

  actions: {
    async loadUserProduct() {
      this.loading = true;
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const currentUser = await axios.get(`${API_BASE_URL}/${userId}`);
        if (!currentUser) {
          throw new Error("Failed to fetch user data");
        }
        const userData = currentUser.data;

        this.products = userData?.products || [];
        return true;
      } catch (error: any) {
        console.error("Error loading products:", error);
        Swal.fire({
          icon: "error",
          title: "Loading Failed",
          text: "Failed to load products",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        });
      } finally {
        this.loading = false;
      }
    },

    clearForm() {
      this.category = "";
      this.name = "";
      this.price = 0;
      this.quantity = 0;
      this.status = "active";
      this.supplier = "";
      this.location = "";
      this.lowstock = 0;
      this.description = "";
    },

    async createProduct() {
      this.loading = true;

      if (!this.isFormValid) {
        this.loading = false;
        return;
      }
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const currentUser = await axios.get(`${API_BASE_URL}/${userId}`);

        if (!currentUser) {
          throw new Error("Failed to fetch user data");
        }

        const userData = currentUser.data;
        const userProducts = userData?.products;

        const productExists = userProducts.some(
          (p: Product) => p.name.toLowerCase() === this.name.toLowerCase()
        );

        if (productExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Product already exists.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }

        let maxId = 0;
        userProducts.forEach((product: Product) => {
          const numericId = parseInt(product.id as string, 10);
          if (numericId > maxId) {
            maxId = numericId;
          }
        });

        const nextId = (maxId + 1).toString();

        // create new product
        const newProduct: Product = {
          category: this.category,
          id: nextId,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          status: this.status,
          supplier: this.supplier,
          location: this.location,
          lowstock: this.lowstock,
          description: this.description,
        };

        userProducts.push(newProduct);

        const updatedUserProduct = await axios.put(
          `${API_BASE_URL}/${userId}`,
          userData
        );

        if (
          updatedUserProduct.status !== 200 &&
          updatedUserProduct.status !== 201
        ) {
          throw new Error("Failed to update user");
        }

        if (
          updatedUserProduct.status === 200 ||
          updatedUserProduct.status === 201
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "product added successfully!",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
          });

          const localProductExist = this.products.some(
            (p) => p.name === this.name
          );
          if (!localProductExist) {
            this.products.push(newProduct);
          }

          this.clearForm();

          return newProduct;
        }
      } catch (error: any) {
        console.error("Error creating product:", error);
        Swal.fire({
          icon: "error",
          title: "Loading Failed",
          text: "Failed to create product",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        });
      } finally {
        this.loading = false;
      }
    },

    async editProduct(productId: string) {
      this.editingId = productId;
      this.loading = true;

      // Add form validation
      if (!this.isFormValid) {
        this.loading = false;
        return;
      }

      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const product = this.products.find((p) => p.id === productId);

        if (!product) {
          throw new Error("Product not found");
        }

        const user = await axios.get(`${API_BASE_URL}/${userId}`);
        const userData = await user.data;

        const productMatchIndex = userData?.products.findIndex(
          (p: Product) => p.id === productId
        );

        if (productMatchIndex === -1) {
          throw new Error("Product not found in the User data");
        }

        // Check for duplicate product names (excluding current product)
        const productExists = userData.products.some(
          (p: Product) =>
            p.name.toLowerCase() === this.name.toLowerCase() &&
            p.id !== productId
        );

        if (productExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Product name already exists.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }

        const updatedProduct: Product = {
          category: this.category,
          id: productId,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          status: this.status,
          supplier: this.supplier,
          location: this.location,
          lowstock: this.lowstock,
          description: this.description,
        };

        userData.products[productMatchIndex] = updatedProduct;

        const editProductUpdated = await axios.put(
          `${API_BASE_URL}/${userId}`,
          userData
        );

        if (
          editProductUpdated.status !== 200 &&
          editProductUpdated.status !== 201
        ) {
          throw new Error("Failed to update product");
        }

        // Update local state
        const localProductIndex = this.products.findIndex(
          (p) => p.id === productId
        );
        if (localProductIndex !== -1) {
          this.products[localProductIndex] = updatedProduct;
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product updated successfully!",
          showConfirmButton: false,
          timer: 1000,
          toast: true,
        });

        this.clearForm();
        return updatedProduct;
      } catch (error: any) {
        console.error("Error updating product:", error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message || "Failed to update product",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        });
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteProduct(productId: string) {
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

      // If user cancels, exit the function
      if (!result.isConfirmed) {
        return false;
      }
      this.loading = true;
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const user = await axios.get(`${API_BASE_URL}/${userId}`);
        const userData = await user.data;

        const userProduct = await userData?.products;

        const productMatchIndex = userProduct.findIndex(
          (p: Product) => p.id === productId
        );

        if (productMatchIndex === -1) {
          throw new Error("Product not found in the User data");
        }

        if (productMatchIndex !== -1) {
          userProduct.splice(productMatchIndex, 1);
        }

        // Update local state
        const localProductIndex = this.products.findIndex(
          (p) => p.id === productId
        );

        if (localProductIndex === -1) {
          throw new Error("Product not found");
        }

        if (localProductIndex !== -1) {
          this.products.splice(localProductIndex, 1);
        }

        const updatedUser = await axios.put(
          `${API_BASE_URL}/${userId}`,
          userData
        );

        if (updatedUser.status !== 200 && updatedUser.status !== 201) {
          throw new Error("Failed to delete product");
        }

        if (updatedUser.status === 200 || updatedUser.status === 201) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product deleted successfully!",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
          });

          return updatedUser;
        }
      } catch (error: any) {
        console.error("Error deleting product:", error);
        Swal.fire({
          icon: "error",
          title: "Delete Failed",
          text: error.message || "Failed to delete product",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        });
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
