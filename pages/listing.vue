<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container my-[16px] flex flex-1 justify-start items-center gap-01 text-[14px] font-medium"
    >
      <div class="ml-04 text-neutral-b-500">Ecommerce</div>
      <div>
        <img src="/Chevron-Right.svg" alt="chevron right" />
      </div>
      <div class="text-neutral-b-900">Search</div>
    </div>
  </section>
  <!--Product Filters-->
  <section class="w-full bg-neutral-w-100">
    <div class="container mx-auto flex flex-1 justify-between">
      <!--Filter Sidebar-->
      <section
        class="w-[248px] h-fit pl-[16px] pr-[12px] pt-[24px] pb-[32px] mr-[21px] border-2 rounded-[6px] border-solid border-neutral-b-100 flex flex-col gap-[40px]"
      >
        <div class="">
          <div class="mb-05 text-neutral-b-900 font-medium text-[14px]">
            Categories
          </div>
          <div class="flex flex-col text-[14px]">
            <div
              v-for="category in categories"
              :key="category.name"
              class="px-01 py-04 border-solid border-b-2 border-neutral-b-100 pb-04 text-neutral-b-600"
            >
              <input
                type="checkbox"
                :id="category.name"
                v-model="isChecked"
                class="mr-[10px] bg-neutral-w-100 border border-neutral-b-100"
              /><label :for="category.name">{{ category.name }}</label>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-04 text-neutral-b-900 font-medium text-[14px]">
            Color
          </div>
          <div class="flex gap-[10px]">
            <button
              class="w-[24px] h-[24px] rounded-[100px] bg-semantic-b-400"
            ></button>
            <button
              class="w-[24px] h-[24px] rounded-[100px] bg-semantic-y-400"
            ></button>
            <button
              class="w-[24px] h-[24px] rounded-[100px] bg-semantic-g-400"
            ></button>
            <button
              class="w-[24px] h-[24px] rounded-[100px] bg-primary-b-900"
            ></button>
          </div>
        </div>
        <div>
          <div class="mb-04 text-neutral-b-900 font-medium text-[14px]">
            Size
          </div>
          <div class="flex gap-[8px]">
            <button
              class="text-neutral-b-500 text-[12px] font-medium border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
            >
              S
            </button>
            <button
              class="text-neutral-b-500 text-[12px] font-medium border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
            >
              M
            </button>
            <button
              class="text-neutral-b-500 text-[12px] font-medium border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
            >
              X
            </button>
            <button
              class="text-neutral-b-500 text-[12px] font-medium border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
            >
              XL
            </button>
            <button
              class="text-neutral-b-500 text-[12px] font-medium border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
            >
              XXL
            </button>
          </div>
        </div>
        <div>
          <div class="mb-04 text-neutral-b-900 font-medium text-[14px]">
            Price
          </div>
        </div>
      </section>
      <!--Applied Filters-->
      <section class="w-full">
        <div class="mb-[28px]">
          <div class="mb-04">Applied Filters:</div>
          <div class="flex flex-1 gap-04">
            <div
              class="border-solid border-[1px] border-neutral-b-100 rounded-[100px] w-fit h-fit font-medium text-neutral-b-900 text-[12px] leading-[24px] px-05 py-[2px] flex justify-center items-center gap-03"
            >
              Purfume
              <img class="w-[22px] h-[32px]" src="/X.svg" alt="x icon" />
            </div>
            <div
              class="border-solid border-[1px] border-neutral-b-100 rounded-[100px] w-fit h-fit font-medium text-neutral-b-900 text-[12px] leading-[24px] px-05 py-[2px] flex justify-center items-center gap-03"
            >
              Size: M
              <img class="w-[22px] h-[32px]" src="/X.svg" alt="x icon" />
            </div>
          </div>
        </div>
        <div class="text-[12px]">Showing 1-9 Of 36 Results.</div>
        <div class="flex flex-wrap mb-[64px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <!--Page-->
        <div class="flex justify-center">
          <div
            class="w-fit flex justify-center items-center gap-03 px-03 border-solid border-[1px] rounded-[4px] border-neutral-b-200"
          >
            <img src="/Chevron-Left.svg" alt="chevron left" />
            <div class="px-[13px] text-[12px]">1</div>
            <div class="px-[13px] text-[12px]">2</div>
            <div class="px-[13px] text-[12px]">...</div>
            <div class="px-[13px] text-[12px]">23</div>
            <div class="px-[13px] text-[12px]">24</div>
            <img src="/Chevron-Right.svg" alt="chevron right" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const categories = ref([
  {
    name: "Purfume",
    checked: false,
  },
  {
    name: "Trousers",
    checked: false,
  },
  {
    name: "Shoe",
    checked: false,
  },
  {
    name: "Handbag",
    checked: false,
  },
  {
    name: "Hat",
    checked: false,
  },
  {
    name: "Thermos",
    checked: false,
  },
]);
</script>
