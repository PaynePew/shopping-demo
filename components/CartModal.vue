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
        <div class="flex gap-07 pb-07 border-b-[1px] border-neutral-w-200">
          <div
            class="relative w-[80px] h-[80px] rounded-[4px] bg-neutral-w-100 flex justify-center items-center overflow-clip"
          >
            <img src="/Cover-1.png" alt="product image" />
            <img
              class="absolute top-0 right-0 cursor-pointer"
              src="/X.svg"
              alt="close icon"
            />
          </div>
          <div>
            <div class="prose flex flex-1 gap-05 items-center mb-03">
              <p class="font-medium mb-0 text-neutral-b-900">
                Raw Black T-Shirt Lineup
              </p>
              <div class="flex items-center gap-[6px]">
                <div
                  class="w-[12px] h-[12px] bg-semantic-g-300 rounded-[100px]"
                ></div>
                <div class="text-[12px] text-neutral-b-500">- M</div>
              </div>
            </div>
            <div class="flex flex-1 items-center gap-05">
              <div
                class="flex justify-between items-center border-[1px] border-neutral-b-100 rounded-[4px] px-05 w-[107px] h-[40px]"
              >
                <button>-</button>
                <span data-test="product-quantity">1</span>
                <button>+</button>
              </div>
              <div>$75.00</div>
            </div>
          </div>
        </div>

        <!--Shopping Cart Card-->
        <div class="flex gap-07">
          <div
            class="relative w-[80px] h-[80px] rounded-[4px] bg-neutral-w-100 flex justify-center items-center overflow-clip"
          >
            <img src="/Cover-1.png" alt="product image" />
            <img
              class="absolute top-0 right-0 cursor-pointer"
              src="/X.svg"
              alt="close icon"
            />
          </div>
          <div>
            <div class="prose flex flex-1 gap-05 items-center mb-03">
              <p class="font-medium mb-0 text-neutral-b-900">
                Raw Black T-Shirt Lineup
              </p>
              <div class="flex items-center gap-[6px]">
                <div
                  class="w-[12px] h-[12px] bg-semantic-g-300 rounded-[100px]"
                ></div>
                <div class="text-[12px] text-neutral-b-500">- M</div>
              </div>
            </div>
            <div class="flex flex-1 items-center gap-05">
              <div
                class="flex justify-between items-center border-[1px] border-neutral-b-100 rounded-[4px] px-05 w-[107px] h-[40px]"
              >
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div>$75.00</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="prose mb-06 px-01 pt-05 flex flex-1 justify-between border-t-[1px] border-neutral-w-200"
        >
          <h6 class="">Total</h6>
          <h6 class="">$ 97.00</h6>
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
</script>
