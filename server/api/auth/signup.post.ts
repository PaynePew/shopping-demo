import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password } = body;

  if (!email || !password || !name) {
    throw createError({
      statusCode: 400,
      message: "Email and password are required.",
    });
  }
  const prisma = new PrismaClient();
  // 檢查用戶是否已存在
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw createError({ statusCode: 400, message: "User already exists." });
  }

  // 加密密碼
  const hashedPassword = await bcrypt.hash(password, 10);

  // 創建用戶
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { message: "User created successfully.", userId: user.id };
});
