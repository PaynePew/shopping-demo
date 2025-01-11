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
          <NuxtLink
            to="/"
            class="w-fit h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px]"
            >View Collection</NuxtLink
          >
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
