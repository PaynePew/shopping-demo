<template>
  <div class="w-full">
    <div class="container mx-auto flex items-center justify-center">
      <header class="flex flex-1 justify-between max-w-[1116px] h-[84px]">
        <div class="flex flex-1 justify-center items-center">
          <div
            class="flex justify-center items-center min-w-[163px] min-h-[40px]"
          >
            <img src="/public/Logo-Header.svg" alt="logo" />
          </div>
          <nav
            class="w-full flex justify-center items-center gap-07 text-neutral-b-500 drop-shadow-nav font-medium"
          >
            <NuxtLink to="/">
              <span>Home</span>
            </NuxtLink>
            <NuxtLink to="/">
              <span>Category</span>
            </NuxtLink>
            <NuxtLink to="/">
              <span>About</span>
            </NuxtLink>
            <NuxtLink to="/">
              <span>Contact</span>
            </NuxtLink>
          </nav>
          <div class="flex">
            <input
              class="border-2 border-neutral-b-100 rounded-6 focus:border-neutral-b-300 focus:outline-none"
            />
            <img src="/public/Cart.svg" alt="cart" />
            <img src="/public/User.svg" alt="user" />
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
