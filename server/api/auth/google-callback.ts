import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase is not defined in environment variables.");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const prisma = new PrismaClient();

  // Get User data
  const { data, error } = await supabase.auth.getUser(); // 修正返回值結構
  console.log("response", data, error);

  if (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to retrieve user data from Google!",
    });
  }

  const user = data?.user; // 從 data 中提取 user

  if (!user) {
    throw createError({
      statusCode: 404,
      message: "User not found.",
    });
  }

  // 檢查用戶是否已存在於資料庫
  let existingUser = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!existingUser) {
    if (!user.email) {
      throw new Error("User email is missing.");
    }
    // Create new account
    existingUser = await prisma.user.create({
      data: {
        name: user.user_metadata.full_name || "Unknown",
        email: user.email,
        password: null,
      },
    });
  }

  // 返回用戶信息
  return {
    message: "Google Login successful.",
    user: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    },
  };
});
