/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js}", // Nuxt 頁面
    "./components/**/*.{vue,js}", // Nuxt 組件
    "./layouts/**/*.{vue,js}", // Nuxt 布局
    "./nuxt.config.{js,ts}", // Nuxt 配置,
  ],
  theme: {
    colors: {
      primary: {
        "b-900": "#4078FF",
        "b-800": "#5C83FF",
        "b-700": "#728FFF",
        "b-600": "#869AFF",
        "b-500": "#97A6FF",
        "b-400": "#A8B2FF",
        "b-300": "#B7BFFF",
        "b-200": "#E3E5FF",
        "b-100": "#F0F1FF",
      },
      neutral: {
        "b-900": "#0E1422",
        "b-800": "#202533",
        "b-700": "#333845",
        "b-600": "#474B57",
        "b-500": "#5C5F6A",
        "b-400": "#71747E",
        "b-300": "#878A92",
        "b-200": "#B6B7BC",
        "b-100": "#E6E7E8",
        "w-200": "#E9E9EB",
        "w-100": "#F6F6F6",
        "w-900": "#FFFFFF",
      },
      semantic: {
        "b-900": "#306CEF",
        "b-800": "#477CF1",
        "b-700": "#5E8CF3",
        "b-600": "#759DF4",
        "b-500": "#8CADF6",
        "b-400": "#A3BEF8",
        "b-300": "#BACEFA",
        "b-200": "#D1DEFB",
        "b-100": "#E8EFFD",
        "g-900": "#057234",
        "g-800": "#2C7F45",
        "g-700": "#458B56",
        "g-600": "#5A9868",
        "g-500": "#6FA479",
        "g-400": "#83B18B",
        "g-300": "#98BE9E",
        "g-200": "#C1D8C4",
        "g-100": "#D5E5D7",
        "r-900": "#BE1313",
        "r-800": "#C83727",
        "r-700": "#D14F3A",
        "r-600": "#D9644E",
        "r-500": "#E17862",
        "r-400": "#E88C77",
        "r-300": "#EE9F8D",
        "r-200": "#F8C5B9",
        "r-100": "#FBD9D0",
        "y-900": "#F3B40A",
        "y-800": "#F6BB33",
        "y-700": "#F9C14C",
        "y-600": "#FBC862",
        "y-500": "#FDCF76",
        "y-400": "#FFD58A",
        "y-300": "#FFDC9E",
        "y-200": "#FFEAC4",
        "y-100": "#FFF1D8",
      },
    },
    extend: {
      fontSize: {
        base: "14px",
      },
      fontWeight: {
        normal: "400",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "40px",
              fontWeight: "600",
              lineHeight: "1.5",
            },
            h2: {
              fontSize: "32px",
              fontWeight: "600",
            },
            h3: {
              fontSize: "24px",
              fontWeight: "700",
            },
            h4: {
              fontSize: "18px",
              fontWeight: "500",
            },
            h5: {
              fontSize: "16px",
              fontWeight: "600",
            },
            h6: {
              fontSize: "14px",
              fontWeight: "500",
            },
            p: {
              fontSize: "14px",
              lineHeight: "1.75",
            },
            label: {
              fontSize: "12px",
              lineHeight: "24px",
              fontWeight: "500",
            },
          },
        },
      },
      spacing: {
        "01": "4px",
        "02": "6px",
        "03": "8px",
        "04": "12px",
        "05": "16px",
        "06": "24px",
        "07": "32px",
        "08": "40px",
        "09": "48px",
        10: "56px",
        11: "64px",
        12: "72px",
        13: "80px",
        14: "88px",
        15: "96px",
        16: "104px",
        17: "112px",
        18: "120px",
        19: "128px",
        20: "136px",
        21: "144px",
        22: "152px",
        23: "160px",
        24: "168px",
      },
      boxShadow: {
        medium: "4px 4px 4px 0 rgba(0,0,0,5%)",
        small: "2px 2px 30px 0 rgba(0,0,0,5%)",
      },
      dropShadow: {
        nav: "0px 4px 4px rgba(0,0,0,25%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
