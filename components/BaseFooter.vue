<template>
  <div class="w-full bg-neutral-w-100">
    <div class="container mx-auto my-[59px] flex justify-center">
      <div class="flex justify-between flex-1">
        <div class="prose flex flex-col mb-06">
          <h3>Join Our Newsletter</h3>
          <p class="text-neutral-b-500">
            We love to surprise our subscribers with occasional gifts
          </p>
        </div>
        <div class="flex justify-center items-center gap-05">
          <input
            class="w-[324px] h-[44px] py-[10px] pl-[15px]"
            placeholder="Your email address"
          />
          <button
            class="w-fit h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="container mx-auto flex flex-1 justify-center items-center">
      <div class="mt-[74px] mb-[102px] flex flex-1 justify-between">
        <div class="flex flex-col max-w-[174px]">
          <div class="mb-04">
            <img src="public/Logo-Footer.svg" />
          </div>
          <p class="prose text-neutral-b-500">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
        </div>
        <div class="flex gap-12">
          <div class="flex flex-col">
            <div class="mb-[40px] uppercase text-neutral-b-300">SUPPORT</div>
            <div class="prose flex flex-col gap-05">
              <NuxtLink to="/" class="no-underline">
                <p class="uppercase my-0">FAQ</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Terms of use</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Privacy Policy</p>
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="mb-[40px] uppercase text-neutral-b-300">COMPANY</div>
            <div class="prose flex flex-col gap-05">
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">About us</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Contact</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Careers</p>
              </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="mb-[40px] uppercase text-neutral-b-300">SHOP</div>
            <div class="prose flex flex-col gap-05">
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">My Account</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Checkout</p>
              </NuxtLink>
              <NuxtLink to="/" class="no-underline">
                <p class="my-0">Cart</p>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="mb-[40px] uppercase text-neutral-b-300">
            ACCEPTED PAYMENTS
          </div>
          <div class="flex">
            <div>
              <img src="public/Visa.svg" alt="visa icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
