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
        <NuxtLink
          to="/user/orders"
          class="w-full flex gap-[10px] items-center pl-06 py-03"
        >
          <div class="w-06 h-06"><img src="/Cart.svg" alt="cart icon" /></div>
          <div class="text-[14px] text-neutral-b-500">Orders</div>
        </NuxtLink>
        <NuxtLink
          to="/user/wishlist"
          class="w-full flex self-start gap-[10px] items-center pl-06 py-03"
        >
          <div class="w-06 h-06">
            <img src="/Heart.svg" alt="wishlist icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Wishlist</div>
        </NuxtLink>
        <NuxtLink
          to="/user/address"
          class="w-full flex self-start gap-[10px] items-center pl-06 py-03"
        >
          <div class="w-06 h-06">
            <img src="/Delivery.svg" alt="delivery icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Address</div>
        </NuxtLink>
        <NuxtLink
          to="/user/password"
          class="w-full flex self-start gap-[10px] items-center pl-06 py-03"
        >
          <div class="w-06 h-06">
            <img src="/Key.svg" alt="key icon" />
          </div>
          <div class="text-[14px] text-neutral-b-500">Password</div>
        </NuxtLink>
        <NuxtLink
          to="/user/account"
          class="w-full flex self-start gap-[10px] bg-neutral-w-100 rounded-[8px] items-center pl-06 py-03"
        >
          <div class="w-06 h-06">
            <img src="/User.svg" alt="user icon" />
          </div>
          <div class="text-[14px] text-neutral-b-900">Account Detail</div>
        </NuxtLink>
        <div class="w-full flex self-start gap-[10px] items-center pl-06 py-03">
          <div class="w-06 h-06">
            <img src="/Logout.svg" alt="logout icon" />
          </div>
          <button @click="logout" class="text-[14px] text-neutral-b-500">
            Logout
          </button>
        </div>
      </div>
      <!--Shipping Address-->
      <div class="prose mt-11 ml-09">
        <h5 class="mb-[40px]">Account Details</h5>
        <div class="flex flex-col">
          <!--Shipping Detail Form-->
          <div class="w-full flex flex-col gap-[16px] mb-11">
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Full name</label>
              <input
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Email</label>
              <input
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
          </div>
          <button
            class="w-fit h-[44px] px-06 py-04 mb-[32px] bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
