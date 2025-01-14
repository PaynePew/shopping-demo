<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 py-[35px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>My Account</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">My Account</div>
      </div>
    </div>
  </section>
  <!--Account List & Orders-->
  <section class="w-full">
    <div class="container mx-auto flex flex-1">
      <!--Account List-->
      <div
        class="w-[212px] pt-[60px] pb-[118px] pr-[36px] mb-[131px] mt-[60px] flex flex-col gap-05 justify-center items-center border-r-[1px] border-neutral-w-200"
      >
        <div
          class="w-full flex gap-[10px] items-center bg-neutral-w-100 rounded-[8px] pl-06 py-03"
        >
          <div class="w-06 h-06"><img src="/Cart.svg" alt="cart icon" /></div>
          <div class="text-[14px] text-neutral-b-900">Orders</div>
        </div>
        <div class="w-full flex self-start gap-[10px] items-center pl-06">
          <div class="w-06 h-06">
            <img src="/Heart.svg" alt="wishlist icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Wishlist</div>
        </div>
        <div class="w-full flex self-start gap-[10px] items-center pl-06 py-03">
          <div class="w-06 h-06">
            <img src="/Delivery.svg" alt="delivery icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Address</div>
        </div>
        <div class="w-full flex self-start gap-[10px] items-center pl-06 py-03">
          <div class="w-06 h-06">
            <img src="/Key.svg" alt="key icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Password</div>
        </div>
        <div class="w-full flex self-start gap-[10px] items-center pl-06 py-03">
          <div class="w-06 h-06">
            <img src="/User.svg" alt="user icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Account Detail</div>
        </div>
        <div class="w-full flex self-start gap-[10px] items-center pl-06 py-03">
          <div class="w-06 h-06">
            <img src="/Logout.svg" alt="logout icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Logout</div>
        </div>
      </div>
      <!--Orders-->
      <div class="prose mt-11 ml-09">
        <h5 class="mb-10">Orders</h5>
        <div class="flex flex-col gap-[32px]">
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
              <div class="">Raw Black T-Shirt Lineup</div>
              <div class="text-neutral-b-500 text-[12px]">
                Ordered On: 27 July 2023
              </div>

              <div class="text-neutral-b-900 text-[12px]">$70.00</div>
            </div>
            <!--Status-->
            <div class="text-neutral-b-900 font-bold mr-[32px]">Processing</div>
            <div class="text-neutral-b-900 text-[14px]">
              <button
                class="px-06 py-04 border border-neutral-b-900 rounded-[4px]"
              >
                View item
              </button>
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
              <div class="">Raw Black T-Shirt Lineup</div>
              <div class="text-neutral-b-500 text-[12px]">
                Ordered On: 27 July 2023
              </div>

              <div class="text-neutral-b-900 text-[12px]">$70.00</div>
            </div>
            <!--Status-->
            <div class="text-neutral-b-900 font-bold mr-[32px]">Completed</div>
            <div class="text-neutral-b-900 text-[14px]">
              <button
                class="px-06 py-04 border border-neutral-b-900 rounded-[4px]"
              >
                View item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
