import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#701A75",
        secondary: "#0284C7",
        foreground: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;
