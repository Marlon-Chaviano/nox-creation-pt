import type {Config} from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [],
};

export default config;
