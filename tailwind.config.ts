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
        primaryColorHover: "#8D773D",
        secondaryColor: "#000000",
        letterColorLight: "#FAFAFA",
        bgColor: "#FAFAFA",
        bgColorDark: "#000000",
        error: "#CE1818",
        errorDark: "#FF8383",
        primaryTransparentColor: "#A7935133",
      },
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
        titleFont: ["PlayfairDisplay", "sans-serif"],
      },
      backgroundImage: {
        signInGradient: "linear-gradient(-165deg, #A79351 70%, #FAFAFA 70.3%)",
        signInGradientDark: "linear-gradient(-165deg, #A7935133 70%, #000 70.3%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
