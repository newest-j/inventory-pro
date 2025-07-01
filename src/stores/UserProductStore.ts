import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import type UserData from "@/userData/users";
import type { Product, ProductStatus } from "@/product/product";

export const userProduct = defineStore("userProduct", {
  state: () => ({
    category: "",
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    status: "active" as "active" | "inactive" | "discontinued",
    supplier: "",
    location: "",
    lowstock: 0,
    description: "",
    loading: false,
    products: [] as Product[],
  }),
  getters: {},
  actions: {
    async loadUserProduct() {
      this.loading = true;
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const currentUser = await axios.get(
          `http://localhost:3000/users${userId}`
        );
        if (!currentUser) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await currentUser.data;

        this.products = userData?.products || [];
      } catch (error) {
        console.error("Error loading tasks:", error);
        Swal.fire({
          icon: "error",
          title: "Loading Failed",
          text: "Failed to load tasks",
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
      this.id = "";
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
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const currentUser = await axios.get(
          `http://localhost:3000/users${userId}`
        );

        if (!currentUser) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await currentUser.data;
        const userProducts = await userData?.products;

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
          `http://localhost:3000/users${userId}`,
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

          this.products.push(newProduct);

          this.clearForm();

          return newProduct;
        }
      } catch (error: any) {
        console.error("Error creating task:", error);
        return error.message;
      } finally {
        this.loading = false;
      }
    },

    async editProduct(productId: string) {
      this.loading = true;
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

        const user = await axios.get(`http://localhost:3000/users${userId}`);
        const userData = await user.data;

        const productMatchIndex = userData?.products.findIndex(
          (p: Product) => p.id === productId
        );

        if (productMatchIndex === -1) {
          throw new Error("Product not found in the User data");
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
          `http://localhost:3000/users${userId}`,
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

        if (
          editProductUpdated.status === 200 ||
          editProductUpdated.status === 201
        ) {
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
        }
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
      this.loading = true;
      try {
        const userString = localStorage.getItem("currentUser");

        if (!userString) {
          throw new Error("No current user");
        }

        const userId: string = JSON.parse(userString);

        const user = await axios.get(`http://localhost:3000/users${userId}`);
        const userData = await user.data;

        const userProduct = await userData?.products;

        const productMatchIndex = userProduct.findIndex(
          (p: Product) => p.id === productId
        );

        if (productMatchIndex === -1) {
          throw new Error("Product not found in the User data");
        }

        if (productMatchIndex !== 1) {
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
          `http://localhost:3000/users${userId}`,
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
