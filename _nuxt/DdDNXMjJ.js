import{p as y,r as s,c as g,m as v,a as t,n as h,q as o,v as n,u as r,s as i,F as _,o as k}from"./CUVYVQ4n.js";import{_ as C}from"./Dbig60aG.js";import{_ as j}from"./DmuPlxCw.js";const S=y("/Cover-2.png"),V=y("/Cover-3.png"),q={class:"w-full"},U={class:"container mx-auto pt-[72px] mb-[220px] flex flex-1 justify-between"},E={class:"w-[534px]"},T={class:"w-full flex flex-col gap-[40px]"},F={class:"flex flex-col"},O={class:"flex flex-1 gap-05"},$={class:"flex flex-col basis-[50%]"},A={class:"flex flex-col basis-[50%]"},B={class:"flex flex-1 gap-05"},P={class:"flex flex-col basis-[50%]"},z={class:"flex flex-col basis-[50%]"},M={class:"flex flex-1 gap-05"},N={class:"flex flex-col basis-[50%]"},R={class:"flex flex-col basis-[50%]"},G={__name:"checkout",setup(D){const d=s(""),p=s(""),u=s(""),x=s(""),c=s(""),b=s(""),f=s(""),w=async()=>{try{const a=await $fetch("/api/checkout",{method:"POST",body:{street:d.value,city:p.value,state:u.value,zip:x.value,country:c.value,email:b.value,name:f.value}}),e=document.createElement("form");e.method="POST",e.action=a.action;for(const l in a.params){const m=document.createElement("input");m.type="hidden",m.name=l,m.value=a.params[l],e.appendChild(m)}document.body.appendChild(e),e.submit()}catch(a){console.error("Checkout error",a)}};return(a,e)=>(k(),g(_,null,[e[16]||(e[16]=v('<section class="w-full bg-neutral-w-100"><div class="container pl-04 my-[16px] flex flex-1 flex-col text-[14px] font-medium"><div class="prose mb-03"><h3>Checkout</h3></div><div class="flex flex-1 items-center"><div class="text-neutral-b-500">Ecommerce</div><div><img src="'+C+'" alt="chevron right"></div><div class="text-neutral-b-900">Checkout</div></div></div></section>',1)),t("section",q,[t("div",U,[t("div",E,[e[14]||(e[14]=t("div",{class:"prose text-neutral-b-900 mb-[64px]"},[t("h5",null,"Shipping Address")],-1)),t("form",{id:"checkout",onSubmit:h(w,["prevent"])},[t("div",T,[t("div",F,[e[7]||(e[7]=t("label",{class:"text-neutral-b-600"},"Street Address",-1)),o(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>i(d)?d.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(d)]])]),t("div",O,[t("div",$,[e[8]||(e[8]=t("label",{class:"text-neutral-b-600"},"City",-1)),o(t("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>i(p)?p.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(p)]])]),t("div",A,[e[9]||(e[9]=t("label",{class:"text-neutral-b-600"},"State",-1)),o(t("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>i(u)?u.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(u)]])])]),t("div",B,[t("div",P,[e[10]||(e[10]=t("label",{class:"text-neutral-b-600"},"Zip Code",-1)),o(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>i(x)?x.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(x)]])]),t("div",z,[e[11]||(e[11]=t("label",{class:"text-neutral-b-600"},"Country",-1)),o(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>i(c)?c.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(c)]])])]),t("div",M,[t("div",N,[e[12]||(e[12]=t("label",{class:"text-neutral-b-600"},"Email",-1)),o(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>i(b)?b.value=l:null),required:"",type:"email",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(b)]])]),t("div",R,[e[13]||(e[13]=t("label",{class:"text-neutral-b-600"},"Full name",-1)),o(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>i(f)?f.value=l:null),required:"",class:"h-fit border-[1px] border-neutral-b-100 px-[15px] py-[10px] rounded-[6px] focus:outline-none"},null,512),[[n,r(f)]])])])])],32)]),e[15]||(e[15]=v('<div class="border-solid border-neutral-b-100 border-l-[1px] rounded-[4px] pr-[24px] pl-[64px] pt-[32px] pb-[40px] prose"><h5 class="mb-[40px]">Your Order</h5><div class="flex flex-1 justify-between items-center mb-[66px]"><div class="flex gap-04"><div class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"><img class="w-[25px] h-[35px]" src="'+j+'" alt="product image"></div><div class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"><img class="w-[25px] h-[35px]" src="'+S+'" alt="product image"></div><div class="w-[40px] h-[40px] rounded-[100px] bg-neutral-w-100 flex justify-center items-center"><img class="w-[25px] h-[35px]" src="'+V+'" alt="product image"></div></div><div><button class="px-06 py-04 border-[1px] border-solid rounded-[4px] border-neutral-b-200 text-neutral-b-500"> Edit Cart </button></div></div><div class="w-[293px] pb-[24px] flex flex-col gap-04 border-b-[1px] border-solid border-neutral-b-100"><div class="flex flex-1 justify-between"><p class="my-0 text-neutral-b-500">Subtotal</p><p class="my-0 text-neutral-b-900 font-bold">$ 90.00</p></div><div class="flex flex-1 justify-between"><p class="my-0 text-neutral-b-500">Shipping</p><p class="my-0 text-neutral-b-900 font-bold">Free</p></div><div class="flex flex-1 justify-between"><p class="my-0 text-neutral-b-500">Tax</p><p class="my-0 text-neutral-b-900 font-bold">$ 3.00</p></div></div><div class="mt-06 mb-07"><div class="flex flex-1 justify-between"><p class="my-0 text-neutral-b-500 font-bold">Total</p><p class="my-0 text-neutral-b-900 font-bold">$ 100.00</p></div></div><button type="submit" form="checkout" class="w-full h-[44px] px-06 py-04 mb-[32px] bg-neutral-b-900 text-neutral-w-900 rounded-[4px] text-[14px] flex flex-1 justify-center items-center"> Place Order </button></div>',1))])])],64))}};export{G as default};
