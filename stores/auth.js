import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(null);

  const setToken = (userToken) => {
    token.value = userToken;
    if (process.client) {
      localStorage.setItem("token", userToken); // 僅在客戶端儲存到 localStorage
    }
  };

  const setUser = (userData) => {
    user.value = userData;
    if (process.client) {
      localStorage.setItem("user", JSON.stringify(userData)); // 僅在客戶端儲存到 localStorage
    }
  };

  const clearAuth = () => {
    user.value = null;
    token.value = null;
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };
  return {
    token,
    user,
    setToken,
    setUser,
    clearAuth,
  };
});
