import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        brandWhite: "#FFFFFF",
        brandNavy: "#01395E",
        brandGray: "#AEAEAE",
      },
      fontFamily: {
        halyard: ["var(--font-halyard)"],
      },
    },
  },
  plugins: [],
} satisfies Config;