import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();

if (!globalThis.prisma) {
  globalThis.prisma = prisma; // 將 PrismaClient 實例存儲在 globalThis 上
}

export default prisma;
