<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 py-[35px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>Forgot Password</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">Forgot Password</div>
      </div>
    </div>
  </section>

  <!--Login Form-->
  <section class="w-full">
    <div class="container mx-auto pt-[128px] pb-[148px] flex justify-center">
      <div class="w-[320px] flex flex-col justify-center items-center">
        <div class="prose mb-06">
          <p>
            Please enter the email address associated with your account. We'll
            promptly send you a link to reset your password.
          </p>
        </div>
        <div class="w-full flex flex-col gap-[15px] mb-[24px]">
          <div class="flex flex-col">
            <label class="text-neutral-b-600">Email</label>
            <input
              class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
            />
          </div>
        </div>
        <div class="w-full mb-06">
          <button
            class="w-full h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
          >
            Send reset link
          </button>
        </div>
        <div class="flex">
          <div class="font-medium text-[14px] text-neutral-b-500">
            Don't have an account? Sign up
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
