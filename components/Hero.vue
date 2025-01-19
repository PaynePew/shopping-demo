<template>
  <div class="w-full h-[440px] bg-neutral-w-100 shadow-medium">
    <div class="container mx-auto flex justify-center items-center">
      <div class="flex flex-1 justify-between relative">
        <div class="flex flex-col mt-[136px]">
          <div class="prose mb-[48px]">
            <h2 class="mb-04 text-neutral-b-800">Fresh Arrivals Online</h2>
            <p class="text-neutral-b-600">
              Discover Our Newest Collection Today.
            </p>
          </div>
          <NuxtLink to="/listing" class="">
            <div
              class="w-fit h-[44px] px-06 flex justify-center items-center bg-neutral-b-900 text-neutral-w-900 rounded-[4px]"
            >
              <div
                class="flex text-[14px] justify-center items-center gap-[6px]"
              >
                View Collection
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
        <div class="relative">
          <img
            class="w-[38px] h-[38px]"
            src="public/Burst-pucker.svg"
            alt="burst-pucker"
          />
          <img
            class="w-[340px] h-[340px]"
            src="public/Ellipse.svg"
            alt="ellipse"
          />
          <img
            class="absolute bottom-0 w-[255px] h-[382px]"
            src="public/Hero.png"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
