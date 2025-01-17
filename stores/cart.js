import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    wishlist: [],
  }),
  getters: {
    totalItems: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(item) {
      const exists = this.cart.find(
        (product) =>
          product.id === item.id &&
          product.color === item.color &&
          product.size === item.size,
      );

      if (exists) {
        exists.quantity += item.quantity;
      } else {
        this.cart.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart(productId, color, size) {
      this.cart = this.cart.filter(
        (item) =>
          item.id !== productId || // ID 不匹配
          item.color !== color || // 顏色不匹配
          item.size !== size, // 尺寸不匹配
      );
    },
    addToWishlist(item) {
      const exists = this.wishlist.find((product) => product.id === item.id);
      if (!exists) {
        this.wishlist.push(item);
      }
    },
    removeFromWishlist(itemId) {
      this.wishlist = this.wishlist.filter((item) => item.id !== itemId);
    },
  },
});
