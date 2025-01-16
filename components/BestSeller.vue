<template>
  <div class="w-full mb-[161px]">
    <div class="container flex-1 justify-center items-center">
      <div class="flex flex-col justify-center items-center mb-13">
        <div
          class="text-[12px] leading-[24px] font-medium text-neutral-b-300 uppercase"
        >
          SHOP NOW
        </div>
        <div class="prose">
          <h3 class="">Best Selling</h3>
        </div>
      </div>
      <div class="flex flex-1">
        <!-----Product Card----->
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Classic Monochrome Tees",
    status: "IN STOCK",
    price: 35.0,
    image: "/Cover-1.png",
  },
  {
    id: 2,
    name: "Monochromatic Wardrobe",
    status: "IN STOCK",
    price: 27.0,
    image: "/Cover-2.png",
  },
  {
    id: 3,
    name: "Essential Neutrals",
    status: "IN STOCK",
    price: 22.0,
    image: "/Cover-3.png",
  },
  {
    id: 4,
    name: "UTRAANET Black",
    status: "IN STOCK",
    price: 43.0,
    image: "/Cover-4.png",
  },
];

const handleAddToCart = (product) => {
  console.log("Added to cart:", product);
};
</script>
