import type {Config} from "tailwindcss";

import animations from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#701A75",
        secondary: "#0284C7",
        foreground: "#0F172A",
        active: "#f7cf49",
        cyan_blue: "#3982c1",
      },
      screens: {
        xs: "320px",
        xl: "1220px",
        "2xl": "1670px",
        "4xl": "2020px",
        "2lg": "1096px",
        xxl: "1440px",
        "4k": "2560px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animations],
};

export default config;
