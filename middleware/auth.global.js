import jwtDecode from "jwt-decode";

export default defineNuxtRouteMiddleware((to, from) => {
  let token;

  // 在伺服器端渲染時，從請求頭中讀取 Cookie
  if (process.server) {
    const cookies = useRequestHeaders(["cookie"]).cookie || "";
    token = cookies
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
  }

  // 在客戶端渲染時，使用 useCookie
  if (process.client) {
    token = useCookie("access_token").value;
  }

  // 排除不需要驗證的路由
  const publicPages = ["/login", "/payment"];
  if (!token && !publicPages.includes(to.path)) {
    return navigateTo("/login");
  }

  // 驗證 token 的有效性
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now(); // 檢查是否過期
      if (isExpired) {
        console.warn("Token expired");
        return navigateTo("/login");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return navigateTo("/login");
    }
  }
});
