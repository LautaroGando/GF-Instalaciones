import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#A79351",
        secondaryColor: "#000000",
        letterColorLight: "#FAFAFA",
        bgColor: "#FAFAFA",
        bgColorDark: "#000000",
        error: '#CE1818',
        errorDark: '#FF8383',
        primaryTransparentColor: "#A7935133",
      },
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
        titleFont: ["PlayfairDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
