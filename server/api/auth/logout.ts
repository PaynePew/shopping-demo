import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const baseUrl = process.env.BASE_URL;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase is not defined in environment variables.");
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // 從請求中獲取 Supabase 的認證 Cookie
    const { access_token } = parseCookies(event);

    if (!access_token) {
      return {
        status: 401,
        body: { error: "User is not logged in" },
      };
    }

    // 使用 Supabase 的 signOut 方法來清除 session
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    // 清除客戶端的 Cookie
    setCookie(event, "access_token", "", { maxAge: -1 });
    setCookie(event, "refresh_token", "", { maxAge: -1 });

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
