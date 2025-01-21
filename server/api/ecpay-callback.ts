// server/api/ecpay-callback.js
import { defineEventHandler, getQuery } from "h3";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log("SUCESSFUL!!!!!!!!!!!!!!!!!!!!!!!!");

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
  } = query;

  // 2. 驗證 CheckMacValue
  const checkMacValueString = Object.keys(query)
    .filter((key) => key !== "CheckMacValue")
    .sort()
    .map((key) => `${key}=${query[key]}`)
    .join("&");

  // 加入 HashKey 和 HashIV，並進行 URL 編碼
  const checkMacValueCheck = `HashKey=${hashKey}&${checkMacValueString}&HashIV=${hashIV}`;
  const urlEncodedString = encodeURIComponent(checkMacValueCheck).toLowerCase();

  // 使用 SHA256 加密並轉為大寫
  const sha256 = crypto.createHash("sha256");
  sha256.update(urlEncodedString);
  const checkMac = sha256.digest("hex").toUpperCase();

  if (checkMac !== CheckMacValue) {
    console.error("CheckMacValue verification failed.");
    return `|0|CheckMacValue verification failed`;
  }

  // 3. 處理付款結果
  if (RtnCode === "1") {
    console.log("Payment successful:", MerchantTradeNo);

    // 更新訂單狀態
    try {
      await prisma.order.update({
        where: { id: parseInt(MerchantTradeNo) }, // 假設 MerchantTradeNo 是訂單的 ID
        data: {
          status: "completed", // 更新狀態為已完成
          tradeNo: TradeNo, // 記錄綠界交易編號
          paymentDate: new Date(PaymentDate), // 記錄付款日期
          paymentType: PaymentType, // 記錄付款方式
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
