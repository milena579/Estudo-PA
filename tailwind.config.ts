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
        branco: "var(--white)",
        preto: "var(--black)",
      },
      fontFamily: {
        roboto: "var(--roboto)"
      },
      fontSize: {
        large: "36px",
        medium: "24px",
        small: "16px"
      },
      screens:{
        "2lg": "1920px"
      }
    },
  },
  plugins: [],
};
export default config;
