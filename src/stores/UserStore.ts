import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import type UserData from "@/userData/users";

const API_BASE_URL = "https://686790d4e3fefb261edf218d.mockapi.io/users";
export const userInfoStore = defineStore("userInfo", {
  state: () => ({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    companySize: "",
    agreeTerm: false,
    isSubmitting: false,
    isLogging: false,
    isAuthenticated: false,
    currentUser: null as any,
    error: {
      userName: "",
      email: "",
      companyName: "",
      password: "",
      phoneNumber: "",
      companySize: "",
      terms: "",
    },
  }),
  getters: {
    isPasswordMatching(state): boolean {
      return state.confirmPassword === state.password;
    },
  },
  actions: {
    validateFirstName() {
      const firstNameReg: RegExp =
        /^[A-Z][a-z]{1,29}(?:[-' ][A-Z][a-zA-Z]{1,29})?$/;
      if (!this.firstName.trim()) {
        this.error.userName = "First Name is required";
      } else if (!firstNameReg.test(this.firstName.trim())) {
        this.error.userName =
          "FirstName Must Start with a capital Letter follow by only lowercase and optional(-,',space) follow by uppercase";
      } else {
        this.error.userName = "";
      }
    },

    validateLastName() {
      const lastNameReg: RegExp =
        /^[A-Z][a-zA-Z]{1,29}(?:[-' ][A-Z][a-zA-Z]{1,29})?$/;
      if (!this.lastName.trim()) {
        this.error.userName = "Last name is required";
      } else if (!lastNameReg.test(this.lastName.trim())) {
        this.error.userName =
          "LastName Must starts with a capital letter an optional(-,',space) follow by a uppercase";
      } else {
        this.error.userName = "";
      }
    },

    validateEmail() {
      const emailReg: RegExp =
        /^((\+?[0-9\s\-().]{7,})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/;
      if (!this.email.trim()) {
        this.error.email = "Email is required";
      } else if (!emailReg.test(this.email.trim())) {
        this.error.email = "Please enter a valid email address";
      } else {
        this.error.email = "";
      }
    },

    validateCompanyName() {
      const companyReg: RegExp = /^[A-Z0-9][A-Za-z0-9&.,'’\-() ]{1,99}$/;
      if (!this.companyName.trim()) {
        this.error.companyName = "Company is required";
      } else if (!companyReg.test(this.companyName.trim())) {
        this.error.companyName = "Must task with uppercase";
      } else {
        this.error.companyName = "";
      }
    },

    validatePassword() {
      const passwordReg: RegExp =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

      if (!this.password.trim()) {
        this.error.password = "Password is required";
      } else if (!passwordReg.test(this.password.trim())) {
        this.error.password =
          "Password min 8 and max 20 character at least one uppercase,lowercase,digit,and special character";
      } else {
        this.error.password = "";
      }
    },

    validateConfirmPassword() {
      if (!this.confirmPassword.trim()) {
        this.error.password = "Please confirm your password";
      } else if (!this.isPasswordMatching) {
        this.error.password = "The passwords do not match";
      } else {
        this.error.password = "";
      }
    },

    validatephoneNumner() {
      const phoneNumberReg: RegExp = /^\+\d{1,4}[\s\-]?\d{7,12}$/;

      if (!this.phoneNumber.trim()) {
        this.error.phoneNumber = "Phone Number Required";
      } else if (!phoneNumberReg.test(this.phoneNumber.trim())) {
        this.error.phoneNumber = "Write the number with the country code";
      } else {
        this.error.phoneNumber = "";
      }
    },

    validateTerms() {
      if (!this.agreeTerm) {
        this.error.terms = "Must agree to term to continue";
      } else {
        this.error.terms = "";
      }
    },

    validateCompanySize() {
      if (!this.companySize) {
        this.error.companySize = "Selection required";
      } else {
        this.error.companySize = "";
      }
    },

    // to protect the route
    setAuthenticated(user: UserData) {
      this.isAuthenticated = true;
      this.currentUser = user.id;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(user.id));
    },

    async logout(router: any) {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        this.isAuthenticated = false;
        this.currentUser = null;
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("currentUser");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1000,
          toast: true,
        });

        setTimeout(() => {
          if (router) router.push("/login");
        }, 1000);

        return true;
      }
    },

    checkAuth() {
      const isAuth = localStorage.getItem("isAuthenticated");
      const user = localStorage.getItem("currentUser");

      if (isAuth === "true" && user) {
        this.isAuthenticated = true;
        this.currentUser = JSON.parse(user);
        return true;
      }
      return false;
    },

    // to create the user

    async createUser(userData: UserData, router: any) {
      try {
        const response = await axios.get(API_BASE_URL);
        const users = await response.data;

        const emailExists = users.some(
          (user: UserData) =>
            user.email.toLowerCase() === userData.email.toLowerCase()
        );
        if (emailExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email already exists. Please use a different email.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }

        const passwordExists = users.some(
          (user: UserData) => user.password === userData.password
        );
        if (passwordExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title:
              "Password already in use. Please choose a different password.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }

        let maxId = 0;
        users.forEach((user: UserData) => {
          const numericId = parseInt(user.id as string, 10);
          if (numericId > maxId) {
            maxId = numericId;
          }
        });
        const nextId = (maxId + 1).toString();

        const newUser = {
          id: nextId,
          ...userData,
          products: [],
        };

        const postResponse = await axios.post(API_BASE_URL, newUser);

        if (postResponse.status !== 200 && postResponse.status !== 201) {
          throw new Error("Failed to create user");
        }

        if (postResponse.status === 200 || postResponse.status === 201) {
          const createdUser = postResponse.data;

          // Set user as authenticated after successful signup
          this.setAuthenticated(createdUser);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account created successfully!",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
          });

          // Reset form fields
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.companyName = "";
          this.password = "";
          this.confirmPassword = "";
          this.phoneNumber = "";
          this.companySize = "";
          this.agreeTerm = false;

          // Reset all error messages
          Object.keys(this.error).forEach((key) => {
            (this.error as any)[key] = "";
          });

          // Redirect to dashboard
          setTimeout(() => {
            this.isSubmitting = false;
            if (router) router.push("/dashboard");
          }, 1000);

          return createdUser;
        }
      } catch (error: any) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to create user",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
        return false;
      }
    },

    async handleSubmit(router: any) {
      this.isSubmitting = true;

      try {
        // Validate all fields
        this.validateEmail();
        this.validateCompanyName();
        this.validateFirstName();
        this.validateLastName();
        this.validatePassword();
        this.validatephoneNumner();
        this.validateTerms();
        this.validateCompanySize();
        this.validateConfirmPassword();

        // Check if there are any validation errors
        if (
          !this.error.companyName &&
          !this.error.email &&
          !this.error.password &&
          !this.error.phoneNumber &&
          !this.error.terms &&
          !this.error.userName &&
          !this.error.companySize
        ) {
          // If validation passes, create user
          const result = await this.createUser(
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              companyName: this.companyName,
              password: this.password,
              phoneNumber: this.phoneNumber,
              companySize: this.companySize,
            },
            router
          );
          return result ? true : false;
        } else {
          // If validation fails, show error
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please fix the validation errors",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }
      } catch (error: any) {
        console.error("Handle submit error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          text: error.message || "Please try again",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
        return false;
      } finally {
        if (!this.isAuthenticated) {
          this.isSubmitting = false;
        }
      }
    },

    // login
    async loginUser(router: any) {
      try {
        const response = await axios.get(API_BASE_URL);
        const users = await response.data;

        const matchedUser = users.find((user: UserData) => {
          return (
            user.email.toLowerCase() === this.email.toLowerCase() &&
            user.password === this.password
          );
        });

        if (matchedUser) {
          this.setAuthenticated(matchedUser);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
          });

          this.email = "";
          this.password = "";

          setTimeout(() => {
            this.isLogging = false; // Stop spinner before redirect

            if (router) router.push("/dashboard");
          }, 1000);

          return matchedUser;
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Invalid email or password",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }
      } catch (error: any) {
        console.error("Error logging in:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login failed",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
        return false;
      }
    },

    async handleLogin(router: any) {
      this.isLogging = true;

      try {
        // Validate all fields
        this.validateEmail();
        this.validatePassword();

        // Check if there are any validation errors
        if (!this.error.email && !this.error.password) {
          // If validation passes, create user
          const result = await this.loginUser(router);
          return result ? true : false;
        } else {
          // If validation fails, show error
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please fix the validation errors",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return false;
        }
      } catch (error: any) {
        console.error("Handle login error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          text: error.message || "Please try again",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
        return false;
      } finally {
        if (!this.isAuthenticated) {
          this.isLogging = false;
        }
      }
    },

    async loadCurrentUser() {
      try {
        const currentUserData = localStorage.getItem("currentUser");
        const currentUser = currentUserData
          ? JSON.parse(currentUserData)
          : null;
        if (!currentUser) {
          return false;
        }

        this.firstName = currentUser.firstName;
        this.lastName = currentUser.lastName;
        return true;
      } catch (error) {
        console.error("Error loading user data:", error);
        return false;
      }
    },
  },
});
