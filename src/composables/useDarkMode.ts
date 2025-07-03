import { ref, watch, onMounted } from "vue";

const darkMode = ref(false);

export function useDarkMode() {
  onMounted(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === null) {
      darkMode.value = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
    } else {
      darkMode.value = saved === "true";
    }
    updateBodyClass();
  });

  watch(darkMode, (val) => {
    localStorage.setItem("darkMode", val ? "true" : "false");
    updateBodyClass();
  });

  function updateBodyClass() {
    if (darkMode.value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  return { darkMode };
}
