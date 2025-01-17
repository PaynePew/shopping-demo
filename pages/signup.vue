<template>
  <!--Breadcrumb-->
  <section class="w-full bg-neutral-w-100">
    <div
      class="container pl-04 my-[16px] flex flex-1 flex-col text-[14px] font-medium"
    >
      <div class="prose mb-03"><h3>Sign up</h3></div>
      <div class="flex flex-1 items-center">
        <div class="text-neutral-b-500">Ecommerce</div>
        <div>
          <img src="/Chevron-Right.svg" alt="chevron right" />
        </div>
        <div class="text-neutral-b-900">Sign up</div>
      </div>
    </div>
  </section>

  <!--Login Form-->
  <section class="w-full">
    <div class="container mx-auto pt-[128px] pb-[148px] flex justify-center">
      <div class="w-[320px] flex flex-col justify-center items-center">
        <div
          class="w-full px-06 py-04 flex flex-1 justify-center items-center gap-03 border-solid border-[1px] border-neutral-b-200 rounded-[4px] mb-07"
        >
          <div><img src="/Google.svg" alt="google icon" /></div>
          <div class="text-neutral-b-500 text-[14px] font-medium">
            Continue with Google
          </div>
        </div>
        <div class="w-full flex flex-1 justify-center items-center mb-[34px]">
          <div class="h-[1px] w-full bg-neutral-b-100"></div>
          <div class="mx-05 text-neutral-b-500 text-[12px]">OR</div>
          <div class="h-[1px] w-full bg-neutral-b-100"></div>
        </div>
        <form @submit.prevent="signup">
          <div class="w-full flex flex-col gap-[15px] mb-[16px]">
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Name</label>
              <input
                v-model="name"
                required
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
            <div class="flex flex-col">
              <label class="text-neutral-b-600">Password</label>
              <input
                v-model="password"
                type="password"
                required
                class="h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"
              />
            </div>
          </div>
          <div class="flex mb-[24px]">
            <div class="font-medium text-[12px] text-neutral-b-600">
              By Creating An Account You Agree With Our Terms Of Service,
              Privacy Policy.
            </div>
          </div>
          <div class="w-full mb-06">
            <button
              type="submit"
              class="w-full h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"
            >
              Create account
            </button>
          </div>
        </form>
        <div class="flex">
          <div class="font-medium text-[14px] text-neutral-b-500">
            Already have an account? Log in
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");

const signup = async () => {
  try {
    await $fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
      },
    });
    router.push("/login");
  } catch (error) {
    console.error("Signup failed:", error);
    alert("Signup failed. Please try again.");
  }
};
</script>
