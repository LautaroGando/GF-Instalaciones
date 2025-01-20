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
        secondaryColor: "#222222",
        secondaryColorDark: "#E4E4E4",
        bgColor: "#FAFAFA",
        bgColorDark: "#000000",
        primaryTransparentColor: "#A7935133",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfairDisplay: ["PlayfairDisplay", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
