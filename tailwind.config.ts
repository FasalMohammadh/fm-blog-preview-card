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
        yellow: "hsl(var(--yellow))",
        "gray-500": "hsl(var(--gray-500))",
        "gray-950": "hsl(var(--gray-950))",
        white: "hsl(var(--white))",
      },
      fontFamily: {
        figtree: ["var(--font-figtree)"],
      },
    },
  },
};

export default config;
