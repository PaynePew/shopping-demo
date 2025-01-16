import { test, expect } from "@playwright/test";

test.describe("Shopping Cart E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // 打開產品頁面
    await page.goto("/products/1", { waitUntil: "networkidle" });
  });

  test("adds a product to the cart", async ({ page }) => {
    // 點擊加入購物車按鈕
    await page.locator('[data-test="product-add-to-cart"]').first().click();

    // 點擊購物車按鈕
    const cartIcon = page.locator('[data-test="toggle-cart"]');
    await expect(cartIcon).toBeVisible();
    await cartIcon.click();
    // 等待購物車模態框渲染並顯示
    const cartModal = page.locator('[data-test="cart-modal"]');
    await cartModal.waitFor(); // 等待模態框被插入 DOM
    await expect(cartModal).toBeVisible(); // 確認模態框可見

    // 驗證購物車內的商品數量
    const productQuantity = cartModal.locator('[data-test="product-quantity"]');
    await expect(productQuantity).toHaveText("1");
  });
});
