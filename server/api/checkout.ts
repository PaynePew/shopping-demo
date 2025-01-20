import { defineEventHandler, readBody } from "h3";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { street, city, state, zip, country, email, name } = body;

  const merchantID = process.env.ECPAY_MERCHANT_ID;
  const hashKey = process.env.ECPAY_HASH_KEY;
  const hashIV = process.env.ECPAY_HASH_IV;
  const returnURL = "http://localhost:3000/api/ecpay-callback";

  console.log(merchantID);

  if (!merchantID || !hashKey || !hashIV) {
    throw createError({
      statusCode: 500,
      message: "missing ECPay credentials in environment variables.",
    });
  }

  const orderId = String(Date.now());
  const totalAmount = 100; // 總金額
  const itemName = "Example Product"; // 商品名稱

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const orderDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

  console.log(orderDate);

  const tradeParams = {
    MerchantID: merchantID,
    MerchantTradeNo: orderId,
    MerchantTradeDate: orderDate,
    PaymentType: "aio",
    TotalAmount: totalAmount,
    TradeDesc: "Test Order",
    ItemName: itemName,
    ReturnURL: returnURL,
    ChoosePayment: "Credit", // 付款方式，這裡使用信用卡
    EncryptType: 1,
  };

  const paramsString = Object.keys(tradeParams)
    .sort()
    .map((key) => `${key}=${tradeParams[key]}`)
    .join("&");

  const checkMacValue = `HashKey=${hashKey}&${paramsString}&HashIV=${hashIV}`;

  // 6. 使用 SHA256 加密
  const sha256 = crypto.createHash("sha256");
  sha256.update(checkMacValue);
  const checkMac = sha256.digest("hex").toUpperCase();

  return {
    action: "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5", // 測試環境網址
    params: {
      ...tradeParams,
      CheckMacValue: checkMac,
    },
  };
});
