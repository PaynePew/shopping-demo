<template>
  <div class="w-full bg-neutral-w-100">
    <div class="container mx-auto relative mt-[52px] mb-[73px]">
      <div class="flex flex-col">
        <div class="prose">
          <h3 class="mb-06">Browse Our Fashion Paradise!</h3>
          <p class="max-w-[420px] mb-07 text-neutral-b-500">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
        </div>
        <NuxtLink to="/listing" class="">
          <div
            class="w-fit h-[44px] px-06 flex justify-center items-center bg-neutral-b-900 text-neutral-w-900 rounded-[4px]"
          >
            <div class="flex justify-center items-center text-[14px] gap-[6px]">
              Start Browsing
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z"
                  fill="#FFFFFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="absolute top-[-52px] left-[75%] w-[225px] h-[311px]">
        <img src="/Category-Image.png" alt="category image" />
      </div>
    </div>
  </div>
</template>
