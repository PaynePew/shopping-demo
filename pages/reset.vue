<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 my-[16px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>Reset Password</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">Reset Password</div>
      </div>
    </div>
  </section>

  <!--Login Form-->
  <section class="w-full">
    <div class="container mx-auto pt-[128px] pb-[148px] flex justify-center">
      <div class="w-[320px] flex flex-col justify-center items-center">
        <div class="w-full flex flex-col gap-[15px] mb-[40px]">
          <div class="flex flex-col">
            <label class="text-neutral-b-600">New password</label>
            <input
              class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-neutral-b-600">Confirm Password</label>
            <input
              class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
            />
          </div>
        </div>
        <div class="w-full mb-06">
          <button
            class="w-full h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
          >
            Reset password
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
