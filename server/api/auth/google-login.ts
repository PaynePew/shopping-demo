import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const baseUrl = process.env.BASE_URL;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase is not defined in environment variables.");
  }
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/api/auth/google-callback",
    },
  });
  console.log("data", data);
  if (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to initiate Google Login.",
    });
  }

  // Redirect to Google OAuth
  return sendRedirect(event, data.url);
});
