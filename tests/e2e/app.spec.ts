import { test, expect } from "@playwright/test";

test.describe("Shopping Cart E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // goto root
    await page.goto("/");
  });

  test("adds a product to the cart", async ({ page }) => {
    await page.locator('[data-test="product-add-to-cart"]').first().click();

    const cartCount = await page
      .locator('[data-test="cart-count"]')
      .textContent();
    expect(cartCount).toBe(1);
  });
});
