import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    wishlist: [],
  }),
  getters: {
    totalItems: (state) => state.cart.length,
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    addToCart(item) {
      this.cart.push(item);
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
    },
    addToWishlist(item) {
      this.wishlist.push(item);
    },
    removeFromWishlist(itemId) {
      this.wishlist = this.wishlist.filter((item) => item.id !== itemId);
    },
  },
});
