<template>
  <div class="w-full">
    <div class="container mx-auto flex items-center justify-center">
      <!--Advertisement-->
      <div
        class="w-full absolute top-0 h-[40px] flex justify-center items-center bg-neutral-b-900 text-neutral-w-900 text-[14px] font-normal"
      >
        Get 25% OFF on your first order. Order Now
      </div>
      <!--Header-->
      <header
        class="flex flex-1 justify-between max-w-[1116px] h-[84px] mt-[40px]"
      >
        <div class="flex flex-1 justify-center items-center">
          <!--Logo Header-->
          <div
            class="flex justify-center items-center min-w-[163px] min-h-[40px]"
          >
            <img src="/public/Logo-Header.svg" alt="logo" />
          </div>
          <!--Navigation-->
          <nav
            class="w-full flex justify-center items-center gap-07 text-neutral-b-500 drop-shadow-nav font-medium"
          >
            <NuxtLink to="/">
              <span>Home</span>
            </NuxtLink>
            <NuxtLink to="/listing">
              <span>Category</span>
            </NuxtLink>
            <NuxtLink to="/">
              <span>About</span>
            </NuxtLink>
            <NuxtLink to="/">
              <span>Contact</span>
            </NuxtLink>
          </nav>
          <!--User & Cart & Searching-->
          <div class="flex flex-1 gap-07">
            <input
              class="min-w-[264px] h-[45px] border-2 border-neutral-b-100 rounded-[4px] focus:border-neutral-b-300 focus:outline-none"
            />
            <div class="w-full flex flex-1 gap-07 justify-center items-center">
              <button @click="toggleCart" class="w-[18px] h-[18px]">
                <img
                  data-test="toggle-cart"
                  src="/public/Cart.svg"
                  alt="cart"
                />
              </button>
              <NuxtLink to="/user/orders" class="w-[18px] h-[18px]">
                <img src="/public/User-Account.svg" alt="user" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </header>
    </div>
    <CartModal v-if="isCartOpen" @close="toggleCart" />
  </div>
</template>
<script setup>
const isCartOpen = ref(false);

function toggleCart() {
  isCartOpen.value = !isCartOpen.value;
}
</script>
