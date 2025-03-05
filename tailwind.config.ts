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
        redColor: "#FF8383",
        disabledButton: '#8D8D8D',
        blog: {
          letterColor: "#8e8e8e",
        },
        admin: {
          editColor: "#009DFF",
          activeColor: "#28b463",
          inactiveColor: "#E17575",
          inProccess: "#f1c40f",
          borderColor: "#BDBDBD",
        },
      },
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
        titleFont: ["PlayfairDisplay", "sans-serif"],
      },
      backgroundImage: {
        signInGradient:
          "linear-gradient(-165deg, #A79351 70%, #FAFAFA00 70.3%)",
        signInGradientDark:
          "linear-gradient(-165deg, #A7935133 70%, #00000000 70.3%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
