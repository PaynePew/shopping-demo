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
      <div class="text-neutral-b-900">Black man t-shirt</div>
    </div>
  </section>
  <!--Product-->
  <section class="w-full bg-neutral-w-100">
    <div class="container mx-auto flex flex-1 justify-evenly">
      <!--Product Gallery-->
      <div>
        <div class="w-[288px] h-[404px] mb-[101px] cursor-grab">
          <!--Todo Gallery-->
          <img src="/Product-Image.png" alt="product image" />
        </div>
        <div class="flex flex-1 justify-center gap-03">
          <img src="/Dot.svg" alt="dot" />
          <img src="/Dot.svg" alt="dot" />
          <img src="/Dot.svg" alt="dot" />
          <img src="/Dot.svg" alt="dot" />
        </div>
      </div>
      <!--Product Content-->
      <div class="w-[438px] h-[562px]">
        <!--Product Title-->
        <div class="flex flex-1 justify-between items-center mb-04">
          <div class="prose">
            <h3 class="text-neutral-b-900 font-bold">
              Raw Black T-Shirt Lineup
            </h3>
          </div>
          <div class="w-[16px] h-[18px]">
            <img src="/Share.svg" alt="share icon" />
          </div>
        </div>
        <!--Product Status-->
        <div class="flex flex-1 justify-start items-center mb-06">
          <img class="ml-[20px] mr-03" src="/Star.svg" alt="star" />
          <div class="text-neutral-b-500 text-[12px] mr-06">
            4.2 - 54 Reviews.
          </div>
          <div
            class="uppercase border-solid border-[1px] border-neutral-b-100 rounded-[100px] w-fit h-fit font-medium text-neutral-b-500 text-[12px] leading-[24px] px-05 py-[2px]"
          >
            IN STOCK
          </div>
        </div>
        <!--Product Price-->
        <div class="prose mb-07">
          <h4 class="text-neutral-b-900 font-semibold">$75.00</h4>
        </div>
        <!--Product Colors-->
        <div>
          <div class="uppercase text-neutral-b-500 text-[12px] mb-[10px]">
            AVAILABLE COLORS
          </div>
          <div class="flex flex-1 gap-[14px] mb-[30px]">
            <button>
              <div class="w-06 h-06 rounded-[100px] bg-semantic-b-400"></div>
            </button>
            <button>
              <div class="w-06 h-06 rounded-[100px] bg-semantic-y-400"></div>
            </button>
            <button>
              <div class="w-06 h-06 rounded-[100px] bg-semantic-g-400"></div>
            </button>
          </div>
        </div>
        <!--Product Size-->
        <div class="mb-[32px]">
          <div class="uppercase text-neutral-b-500 text-[12px] mb-[10px]">
            SELECT SIZE
          </div>
          <div class="flex flex-1 gap-[8px]">
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
        <!--Product Quantity-->
        <div class="mb-[40px]">
          <div class="uppercase text-neutral-b-500 text-[12px] mb-[10px]">
            QUANTITY
          </div>
          <input type="number" />
        </div>
        <!--Add To Cart-->
        <div class="flex flex-1 items-center gap-05 mb-04">
          <button
            class="w-[284px] h-[44px] px-06 py-04 bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px]"
          >
            Add to cart
          </button>
          <div
            class="border-solid w-[40px] h-[40px] rounded-[4px] border-2 border-neutral-b-100"
          >
            <img src="/Wishlist.svg" />
          </div>
        </div>
        <!--Adertise Footer-->
        <div class="text-[12px] font-medium text-neutral-b-500 leading-[24px]">
          -FREE SHIPPING ON ORDERS $100+
        </div>
      </div>
    </div>
  </section>
  <!--Product Details-->
  <section class="w-full bg-neutral-w-100">
    <div class="container mx-auto my-[176px] flex flex-1 justify-between">
      <!--Tabs-->
      <div class="flex flex-col gap-05 mt-[72px]">
        <div class="flex items-center gap-[10px]">
          <img src="/More.svg" alt="more icon" />
          <div class="text-[14px] text-neutral-b-900 font-medium">Details</div>
        </div>
        <div class="flex items-center gap-[10px]">
          <img src="/Empty-Star.svg" alt="empty star" />
          <div class="text-[14px] text-neutral-b-500 font-medium">Reviews</div>
        </div>
      </div>
      <!--Details & Reviews-->
      <div>
        <div class="mb-06">Detail</div>
        <div class="prose text-neutral-b-500 mb-[56px]">
          <p>
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection.<br />
            The classic black color never goes out of style. Whether you're
            dressing up for a special occasion or keeping it casual, these black
            t-shirts are the perfect choice, effortlessly complementing any
            outfit.
          </p>
        </div>
        <div class="text-[14px] text-neutral-b-500 leading-[1.75]">
          <p>Premium Quality</p>
          <p>Versatile Wardrobe Staple</p>
          <p>Available in Various Sizes</p>
          <p>Tailored Fit</p>
        </div>
      </div>
    </div>
  </section>
  <!--Similar Products-->
  <section class="w-full bg-neutral-w-100">
    <div class="container mx-auto mb-[144px]">
      <div class="mb-10">
        <div class="text-[24px] font-bold mb-03">You might also like</div>
        <div class="uppercase text-[12px] text-neutral-b-300">
          SIMILAR PRODUCTS
        </div>
      </div>
      <div class="flex flex-1">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
</template>

<script setup></script>
