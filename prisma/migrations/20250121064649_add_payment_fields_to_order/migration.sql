-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentDate" TIMESTAMP(3),
ADD COLUMN     "paymentType" TEXT,
ADD COLUMN     "tradeNo" TEXT;
