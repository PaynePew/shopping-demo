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

  const checkMacValueCheck = `HashKey=${hashKey}&${checkMacValueString}&HashIV=${hashIV}`;

  const sha256 = crypto.createHash("sha256");
  sha256.update(checkMacValueCheck);
  const checkMac = sha256.digest("hex").toUpperCase();

  if (checkMac !== CheckMacValue) {
    console.error("CheckMacValue verification failed.");
    return {
      status: "error",
      message: "CheckMacValue verification failed.",
    };
  }

  // 3. 處理付款結果
  if (RtnCode === "1") {
    console.log("Payment successful:", MerchantTradeNo);
    // 在這裡更新你的訂單狀態
    return {
      status: "success",
      message: "Payment successful.",
      orderId: MerchantTradeNo,
      tradeNo: TradeNo,
      amount: TradeAmt,
      paymentDate: PaymentDate,
      paymentType: PaymentType,
    };
  } else {
    console.error("Payment failed:", RtnMsg);
    return {
      status: "error",
      message: `Payment failed: ${RtnMsg}`,
    };
  }
});
