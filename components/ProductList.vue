<template>
  <div class="w-full">
    <div class="container mx-auto mt-[152px] mb-[192px]">
      <div class="flex justify-center items-center gap-06 mb-[48px]">
        <div
          class="uppercase border-solid border-[1px] border-neutral-b-100 rounded-[100px] w-fit h-fit font-medium text-[14px] leading-[24px] px-05 py-[2px] cursor-pointer text-neutral-b-800"
        >
          Featured
        </div>
        <p class="prose text-[14px] text-neutral-b-500 cursor-pointer">
          Latest
        </p>
      </div>
      <div class="flex flex-1">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Elegant Ebony Sweatshirts",
    status: "IN STOCK",
    price: 35.0,
    image: "/Cover-5.png",
  },
  {
    id: 2,
    name: "Sleek and Cozy Black",
    status: "IN STOCK",
    price: 27.0,
    image: "/Cover-6.png",
  },
  {
    id: 3,
    name: "Raw Black Tees",
    status: "IN STOCK",
    price: 22.0,
    image: "/Cover-7.png",
  },
  {
    id: 4,
    name: "MOCKUP Black",
    status: "IN STOCK",
    price: 43.0,
    image: "/Cover-8.png",
  },
];

const handleAddToCart = (product) => {
  console.log("Added to cart:", product);
};
</script>
