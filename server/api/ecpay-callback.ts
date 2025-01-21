// server/api/ecpay-callback.js
import { defineEventHandler, getQuery } from "h3";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const calculateCheckMacValue = (params, hashKey, hashIV) => {
  const sortedParams = Object.keys(params)
    .filter((key) => key !== "CheckMacValue")
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  const rawString = `HashKey=${hashKey}&${sortedParams}&HashIV=${hashIV}`;
  const encodedString = encodeURIComponent(rawString)
    .toLowerCase()
    .replace(/%20/g, "+")
    .replace(/%21/g, "!")
    .replace(/%28/g, "(")
    .replace(/%29/g, ")")
    .replace(/%2a/g, "*");

  const sha256 = crypto.createHash("sha256");
  sha256.update(encodedString);
  return sha256.digest("hex").toUpperCase();
};

export default defineEventHandler(async (event) => {
  let params = {};

  // 1. 檢查請求類型並解析參數
  if (event.req.method === "GET") {
    params = getQuery(event); // 解析 GET 請求參數
  } else if (event.req.method === "POST") {
    params = await readBody(event); // 解析 POST 請求參數
  }

  const merchantID = process.env.ECPAY_MERCHANT_ID;
  const hashKey = process.env.ECPAY_HASH_KEY;
  const hashIV = process.env.ECPAY_HASH_IV;

  if (!merchantID || !hashKey || !hashIV) {
    throw createError({
      statusCode: 500,
      message: "Missing ECPay credentials in environment variables.",
    });
  }

  // 1. 取得綠界回傳的參數
  const {
    MerchantID,
    MerchantTradeNo,
    RtnCode,
    RtnMsg,
    TradeNo,
    TradeAmt,
    PaymentDate,
    PaymentType,
    CheckMacValue,
    ...otherParams
  } = params;

  // 2. 驗證 CheckMacValue
  const checkMac = calculateCheckMacValue(params, hashKey, hashIV);

  if (checkMac !== CheckMacValue) {
    console.error("CheckMacValue verification failed.");
    console.error("Calculated CheckMacValue:", checkMac);
    console.error("Received CheckMacValue:", CheckMacValue);
    return `|0|CheckMacValue verification failed`;
  }
  // 3. 處理付款結果
  const prisma = new PrismaClient();

  if (RtnCode === "1") {
    console.log("Payment successful:", MerchantTradeNo);

    // 更新訂單狀態
    try {
      await prisma.order.upsert({
        where: { id: parseInt(MerchantTradeNo) }, // 假設 MerchantTradeNo 是訂單的 ID
        create: {
          id: parseInt(MerchantTradeNo),
          status: "completed",
          tradeNo: TradeNo,
          paymentDate: new Date(PaymentDate),
          paymentType: PaymentType,
          total: TradeAmt,
        },
        update: {
          status: "completed", // 更新狀態為已完成
          tradeNo: TradeNo, // 記錄綠界交易編號
          paymentDate: new Date(PaymentDate), // 記錄付款日期
          paymentType: PaymentType, // 記錄付款方式
          total: TradeAmt,
        },
      });

      console.log("Order status updated successfully.");
    } catch (error) {
      console.error("Failed to update order status:", error);
      return `|0|Failed to update order status`;
    }

    // 回傳成功訊息給綠界
    return "|1|OK";
  } else {
    console.error("Payment failed:", RtnMsg);
    return `|0|${RtnMsg}`;
  }
});
