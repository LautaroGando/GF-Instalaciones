import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class" ],
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
        disabledButton: "#8D8D8D",
        blog: {
          letterColor: "#8e8e8e",
        },
        admin: {
          editColor: "#009DFF",
          activeColor: "#28b463",
          inactiveColor: "#E17575",
          deleteColor: "#CE1818",
          inProccess: "#f1c40f",
          borderColor: "#BDBDBD",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        installer: {
          backButton: "#FF8383",
          backButtonHover: "#CE1818",
          inProccess: "#D1C18A",
          toReview: "#009DFF",
          postponed: "#FF8383",
          cancelled: "#CE1818",
          finalized: "#28b463",
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
        dashboardBanner: 'url("/assets/images/dashboard/banner.svg")',
      },
      boxShadow: {
        'admin-active': '0px 1px 4px rgba(40, 180, 99, 0.67)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
