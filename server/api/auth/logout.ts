import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const cookies = parseCookies(event);

    if (!cookies.access_token) {
      return {
        status: 401,
        body: { error: "User is not logged in" },
      };
    }

    // 驗證 JWT Token
    const decoded = jwt.verify(cookies.access_token, process.env.JWT_SECRET);
    if (!decoded) {
      return {
        status: 401,
        body: { error: "Invalid token" },
      };
    }

    // 清除 Cookie
    setCookie(event, "access_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "Strict",
      maxAge: -1, // 設置過期時間為負數，表示立即清除
    });

    return {
      status: 200,
      body: { message: "Successfully logged out" },
    };
  } catch (err) {
    console.error("Logout error:", err);
    return {
      status: 500,
      body: { error: "Failed to log out" },
    };
  }
});
