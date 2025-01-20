<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 my-[16px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>Checkout</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">Checkout</div>
      </div>
    </div>
  </section>
  <!--Shipping Address & Order-->
  <section class="w-full">
    <div
      class="container mx-auto pt-[72px] mb-[220px] flex flex-1 justify-between"
    >
      <!--Shipping Address-->
      <div class="w-[534px]">
        <div class="prose text-neutral-b-900 mb-[64px]">
          <h5>Shipping Address</h5>
        </div>
        <!--Address Form-->
        <form id="checkout" @submit.prevent="checkout">
          <div class="w-full flex flex-col gap-[40px]">
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Street Address</label>
              <input
                v-model="street"
                required
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
            <div class="flex flex-1 gap-05">
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">City</label>
                <input
                  v-model="city"
                  required
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">State</label>
                <input
                  v-model="state"
                  required
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
            </div>
            <div class="flex flex-1 gap-05">
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">Zip Code</label>
                <input
                  v-model="zip"
                  required
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">Country</label>
                <input
                  v-model="country"
                  required
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
            </div>
            <div class="flex flex-1 gap-05">
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">Email</label>
                <input
                  v-model="email"
                  required
                  type="email"
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
              <div class="flex flex-col basis-[50%]">
                <label class="text-neutral-b-600">Full name</label>
                <input
                  v-model="name"
                  required
                  class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <!--Order Detail-->
      <div
        class="border-solid border-neutral-b-100 border-l-[1px] rounded-[4px] pr-[24px] pl-[64px] pt-[32px] pb-[40px] prose"
      >
        <h5 class="mb-[40px]">Your Order</h5>
        <div class="flex flex-1 justify-between items-center mb-[66px]">
          <div class="flex gap-04">
            <div
              class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"
            >
              <img
                class="w-[25px] h-[35px]"
                src="/Cover-4.png"
                alt="product image"
              />
            </div>
            <div
              class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"
            >
              <img
                class="w-[25px] h-[35px]"
                src="/Cover-2.png"
                alt="product image"
              />
            </div>
            <div
              class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"
            >
              <img
                class="w-[25px] h-[35px]"
                src="/Cover-3.png"
                alt="product image"
              />
            </div>
          </div>
          <div>
            <button
              class="px-06 py-04 border-[1px] border-solid rounded-[4px] border-neutral-b-200 text-neutral-b-500"
            >
              Edit Cart
            </button>
          </div>
        </div>
        <div
          class="w-[293px] pb-[24px] flex flex-col gap-04 border-b-[1px] border-solid border-neutral-b-100"
        >
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Subtotal</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 90.00</p>
          </div>
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Shipping</p>
            <p class="my-0 text-neutral-b-900 font-bold">Free</p>
          </div>
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500">Tax</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 3.00</p>
          </div>
        </div>

        <div class="mt-06 mb-07">
          <div class="flex flex-1 justify-between">
            <p class="my-0 text-neutral-b-500 font-bold">Total</p>
            <p class="my-0 text-neutral-b-900 font-bold">$ 100.00</p>
          </div>
        </div>
        <button
          type="submit"
          form="checkout"
          class="w-full h-[44px] px-06 py-04 mb-[32px] bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
        >
          Place Order
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const street = ref("");
const city = ref("");
const state = ref("");
const zip = ref("");
const country = ref("");
const email = ref("");
const name = ref("");

const checkout = async () => {
  try {
    const response = await $fetch("/api/checkout", {
      method: "POST",
      body: {
        street: street.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        country: country.value,
        email: email.value,
        name: name.value,
      },
    });

    const form = document.createElement("form");
    form.method = "POST";
    form.action = response.action;

    for (const key in response.params) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = response.params[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error("Checkout error", error);
  }
};
</script>
