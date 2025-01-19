import { useAuthStore } from "@/stores/auth";

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();

  // 僅在瀏覽器端執行
  if (process.client) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) {
      authStore.setToken(token);
      authStore.setUser(user);
    }
  }
});
