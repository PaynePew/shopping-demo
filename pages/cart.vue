<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 my-[16px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>Cart</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">Cart</div>
      </div>
    </div>
  </section>
  <!--Cart & Summary-->
  <section class="w-full">
    <div
      class="container mx-auto pt-[72px] mb-[220px] flex flex-1 justify-between"
    >
      <!--Cart-->
      <div class="">
        <div
          class="prose text-neutral-b-900 border-solid border-b-[1px] border-neutral-w-200 mb-[48px] pb-[18px]"
        >
          <h5>Your cart</h5>
        </div>
        <div class="flex flex-col gap-[40px]">
          <!--Products in Cart-->
          <div class="flex flex-1 items-center">
            <div
              class="bg-neutral-b-100 w-[80px] h-[80px] mr-[32px] flex justify-center items-center rounded-[4px]"
            >
              <img src="/Cover-4.png" alt="product image" />
            </div>
            <div
              class="flex flex-col text-neutral-b-900 font-medium mr-[106px]"
            >
              <div class="mb-03">Raw Black T-Shirt Lineup</div>
              <div
                class="flex justify-start items-center gap-[8px] text-[12px] text-neutral-b-500"
              >
                Color:
                <div
                  class="w-[12px] h-[12px] rounded-[100px] bg-semantic-g-300"
                />
                -Size: M
              </div>
            </div>
            <div class="text-neutral-b-900 font-bold mr-[32px]">$75.00</div>
            <div
              class="flex gap-[18px] px-[16px] mr-[16px] text-[14px] font-medium text-neutral-b-800 border border-solid border-neutral-w-100 rounded-[4px]"
            >
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div
              class="flex justify-center items-center bg-neutral-w-100 w-[40px] h-[40px] rounded-[4px]"
            >
              <img src="/X.svg" alt="x icon" />
            </div>
          </div>
          <div class="flex flex-1 items-center">
            <div
              class="bg-neutral-b-100 w-[80px] h-[80px] mr-[32px] flex justify-center items-center rounded-[4px]"
            >
              <img src="/Cover-4.png" alt="product image" />
            </div>
            <div
              class="flex flex-col text-neutral-b-900 font-medium mr-[106px]"
            >
              <div class="mb-03">Raw Black T-Shirt Lineup</div>
              <div
                class="flex justify-start items-center gap-[8px] text-[12px] text-neutral-b-500"
              >
                Color:
                <div
                  class="w-[12px] h-[12px] rounded-[100px] bg-semantic-g-300"
                />
                -Size: M
              </div>
            </div>
            <div class="text-neutral-b-900 font-bold mr-[32px]">$75.00</div>
            <div
              class="flex gap-[18px] px-[16px] mr-[16px] text-[14px] font-medium text-neutral-b-800 border border-solid border-neutral-w-100 rounded-[4px]"
            >
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div
              class="flex justify-center items-center bg-neutral-w-100 w-[40px] h-[40px] rounded-[4px]"
            >
              <img src="/X.svg" alt="x icon" />
            </div>
          </div>
        </div>
      </div>
      <!--Summary-->
      <div
        class="border-solid border-neutral-b-100 border-[1px] rounded-[4px] px-[24px] pt-[32px] pb-[40px] prose"
      >
        <h5 class="mb-[40px]">Order Summary</h5>
        <div
          class="w-[293px] pb-[24px] flex flex-col gap-04 border-b-[1px] border-solid border-neutral-b-100"
        >
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Subtotal</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 90.00</p>
          </div>
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Shipping</p>
            <p class="my-0 text-neutral-b-900 font-bold">Free</p>
          </div>
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Tax</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 3.00</p>
          </div>
        </div>

        <div class="mt-06 mb-07">
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500 font-bold">Total</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 100.00</p>
          </div>
        </div>
        <button
          class="w-full h-[44px] px-06 py-04 mb-[32px] bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
        >
          Checkout
        </button>
        <div class="flex flex-1 justify-center">
          <div class="text-[12px] font-bold w-fit border-b-[1px]">
            Continue Shopping
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
