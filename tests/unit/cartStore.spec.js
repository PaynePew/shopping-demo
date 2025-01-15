import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useCartStore } from "@/stores/cart";

describe("Cart Store", () => {
  let cartStore;
  // Reset Pinia every times
  beforeEach(() => {
    setActivePinia(createPinia());
    cartStore = useCartStore();
  });

  it("adds a product to the cart", () => {
    const product = { id: 1, name: "Product A", price: 100 };
    cartStore.addToCart(product);
    // Cart's array.length === 1
    expect(cartStore.cart).toHaveLength(1);
    expect(cartStore.cart[0]).toEqual(product);
  });

  it("removes a product from the cart", () => {
    const product = { id: 1, name: "Product A", price: 100 };
    cartStore.addToCart(product);
    cartStore.removeFromCart(product.id);

    expect(cartStore.cart).toHaveLength(0);
  });

  it("adds a product to the wishlist", () => {
    const product = { id: 2, name: "Product B", price: 200 };
    cartStore.addToWishlist(product);

    expect(cartStore.wishlist).toHaveLength(1);
    expect(cartStore.wishlist[0]).toEqual(product);
  });

  it("removes a product from the wishlist", () => {
    const product = { id: 2, name: "Product B", price: 200 };
    cartStore.addToWishlist(product);
    cartStore.removeFromWishlist(product.id);

    expect(cartStore.wishlist).toHaveLength(0);
  });

  it("calculates the total price of products in the cart", () => {
    const product1 = { id: 1, name: "Product A", price: 100 };
    const product2 = { id: 2, name: "Product B", price: 200 };
    cartStore.addToCart(product1);
    cartStore.addToCart(product2);

    expect(cartStore.totalPrice).toBe(300);
  });
});
