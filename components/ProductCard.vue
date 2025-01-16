<template>
  <div class="w-[264px] h-fit px-03 py-05">
    <!--Image-->
    <div
      class="relative bg-neutral-w-100 flex justify-center items-center mb-06 rounded-[4px] overflow-clip group"
    >
      <img :src="product.image" :alt="product.name" />
      <div
        class="absolute w-full h-full hover:backdrop-blur-[2px] hover:bg-white"
      ></div>
      <button
        data-test="product-add-to-cart"
        @click="handleAddToCart"
        class="absolute bottom-0 opacity-0 bg-neutral-b-900 w-full h-fit flex flex-1 justify-center items-center py-03 gap-03 group-hover:opacity-100"
      >
        <div class="text-[14px] text-neutral-w-900">Add to cart</div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H6.38321L7.58853 14.9769C7.63862 15.3071 7.80643 15.608 8.06102 15.8243C8.31561 16.0406 8.63984 16.1576 8.97395 16.1538H17.7021C18.0042 16.1696 18.3032 16.0861 18.5534 15.9161C18.8035 15.7461 18.9912 15.4989 19.0875 15.2123L20.9302 9.67385C20.999 9.46564 21.0173 9.24406 20.9836 9.02739C20.9498 8.81072 20.865 8.60517 20.7362 8.42769C20.6021 8.23894 20.4227 8.08681 20.2146 7.98522C20.0065 7.88362 19.7761 7.83581 19.5447 7.84615H6.8681M11.5619 10.6154V13.3846M15.7182 10.6154V13.3846M17.4666 21C17.2829 21 17.1067 20.9271 16.9768 20.7972C16.8469 20.6674 16.7739 20.4913 16.7739 20.3077C16.7739 20.1241 16.8469 19.948 16.9768 19.8182C17.1067 19.6883 17.2829 19.6154 17.4666 19.6154C17.6503 19.6154 17.8265 19.6883 17.9564 19.8182C18.0863 19.948 18.1593 20.1241 18.1593 20.3077C18.1593 20.4913 18.0863 20.6674 17.9564 20.7972C17.8265 20.9271 17.6503 21 17.4666 21ZM8.46134 21C8.27762 21 8.10143 20.9271 7.97152 20.7972C7.84161 20.6674 7.76863 20.4913 7.76863 20.3077C7.76863 20.1241 7.84161 19.948 7.97152 19.8182C8.10143 19.6883 8.27762 19.6154 8.46134 19.6154C8.64506 19.6154 8.82126 19.6883 8.95116 19.8182C9.08107 19.948 9.15406 20.1241 9.15406 20.3077C9.15406 20.4913 9.08107 20.6674 8.95116 20.7972C8.82126 20.9271 8.64506 21 8.46134 21Z"
              stroke="#FFFFFF"
              stroke-width="1.42857"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        class="absolute top-[8px] right-[11px] opacity-0 cursor-pointer group-hover:opacity-100"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0048 27L12.791 20.5513C8.87045 16.6826 14.6333 9.25337 20.0048 15.2638C25.3763 9.25337 31.1141 16.7073 27.22 20.5513L20.0048 27Z"
            stroke="#5C5F6A"
            stroke-width="1.42857"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <!--Content-->
    <div>
      <div class="prose mb-04">
        <p class="text-neutral-b-800 font-medium">{{ product.name }}</p>
      </div>
      <div class="flex justify-start items-center gap-05">
        <div
          class="uppercase border-solid border-[1px] border-neutral-b-100 rounded-[100px] w-fit h-fit font-medium text-[12px] leading-[24px] px-05 py-[2px]"
        >
          {{ product.status }}
        </div>
        <div class="prose">
          <p class="text-neutral-b-600">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: "Default Product",
      status: "N/A",
      price: 0.0,
      image: "/Cover-1.png",
    }),
  },
});
const emit = defineEmits(["add-to-cart"]);
const handleAddToCart = () => {
  emit("add-to-cart", product); // 向父組件傳遞產品數據
};
</script>
