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

  if (!token && to.path !== "/login") {
    return navigateTo("/login");
  }
});
