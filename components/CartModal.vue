<template>
  <!--Background-->
  <div
    @click="emit('close')"
    class="fixed inset-0 bg-neutral-b-900 bg-opacity-50 z-10"
  ></div>
  <!--Cart Modal-->
  <div
    data-test="cart-modal"
    class="fixed top-0 right-0 w-[416px] flex flex-col z-20 h-full"
  >
    <!--Cart Title-->
    <div
      class="prose bg-neutral-w-100 h-[72px] flex justify-between items-center px-[32px]"
    >
      <h5>Shopping Cart</h5>
      <button @click="emit('close')">
        <img src="/X.svg" alt="close icon" />
      </button>
    </div>
    <!--Cart Body-->
    <div
      class="flex flex-col h-full justify-between px-07 pt-[48px] pb-[166px] bg-[#FFFFFF]"
    >
      <div class="flex flex-col w-full gap-07">
        <!--Shopping Cart Card-->
        <div
          v-for="(item, index) in cartStore.cart"
          :key="`${item.id}-${item.color}-${item.size}`"
          class="flex gap-07 pb-07 border-b-[1px] border-neutral-w-200"
        >
          <!--Product Image-->
          <div
            class="relative w-[80px] h-[80px] rounded-[4px] bg-neutral-w-100 flex justify-center items-center overflow-clip"
          >
            <img :src="item.image" alt="product image" />
            <img
              @click="removeItem(item.id, item.color, item.size)"
              class="absolute top-0 right-0 cursor-pointer"
              src="/X.svg"
              alt="close icon"
            />
          </div>
          <!--Product Detail-->
          <div>
            <div class="prose flex flex-1 gap-05 items-center mb-03">
              <p class="font-medium mb-0 text-neutral-b-900">
                {{ item.name }}
              </p>
              <div class="flex items-center gap-[6px]">
                <div
                  class="w-[12px] h-[12px] rounded-[100px]"
                  :style="{ backgroundColor: item.color }"
                ></div>
                <div class="text-[12px] text-neutral-b-500">
                  - {{ item.size }}
                </div>
              </div>
            </div>
            <div class="flex flex-1 items-center gap-05">
              <div
                class="flex justify-between items-center border-[1px] border-neutral-b-100 rounded-[4px] px-05 w-[107px] h-[40px]"
              >
                <button @click="decreaseQuantity(item)">-</button>
                <span data-test="product-quantity">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)">+</button>
              </div>
              <div>${{ item.price.toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>
      <!--Total Price-->
      <div>
        <div
          class="prose mb-06 px-01 pt-05 flex flex-1 justify-between border-t-[1px] border-neutral-w-200"
        >
          <h6 class="">Total</h6>
          <h6 class="">${{ cartStore.totalPrice.toFixed(2) }}</h6>
        </div>
        <div class="mb-07">
          <button
            class="w-full h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px]"
          >
            View Cart
          </button>
        </div>
        <div
          class="text-neutral-b-500 text-[12px] flex justify-center items-center underline"
        >
          Checkout
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
const cartStore = useCartStore();

const increaseQuantity = (item) => {
  cartStore.addToCart({ ...item, quantity: 1 });
};
const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.addToCart({ ...item, quantity: -1 });
  } else {
    removeItem(item.id, item.color, item.size);
  }
};

const removeItem = (id, color, size) => {
  console.log("cart items", cartStore.cart);
  console.log("removing item", { id, color, size });
  cartStore.removeFromCart(id, color, size);
};
</script>
