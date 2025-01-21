import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email and password are required.",
    });
  }
  const prisma = new PrismaClient();

  // Look up user
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw createError({
      statusCode: 404,
      message: "User not found.",
    });
  }

  if (!user.password) {
    throw createError({
      statusCode: 500,
      message: "User password is missing in the database.",
    });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: "Invalid email or password.",
    });
  }

  // JWT Token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  // 設置 Cookie
  setCookie(event, "access_token", token, {
    httpOnly: false, // 防止客戶端 JavaScript 訪問 Cookie（提高安全性）
    secure: process.env.NODE_ENV === "production", // 僅在 HTTPS 下傳輸
    path: "/", // 全域可用
    sameSite: "strict", // 防止跨站請求
    maxAge: 7 * 24 * 60 * 60, // 7 天的有效期
  });

  return {
    message: "Login successful.",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
});
