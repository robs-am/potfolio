import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(120 3% 6%)", // Corrigido para um valor HSL
        foreground: "hsl(0 0% 98%)", // Corrigido para um valor HSL
      },
    },
  },
  plugins: [],
};

export default config;
