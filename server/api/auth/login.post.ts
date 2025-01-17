import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

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

  return {
    message: "Login successful.",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
});
