import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-header":"linear-gradient(157deg, rgba(115,239,209,1) 0%, rgba(201,248,218,1) 100%);"
      },
      colors: {
        'primary':"#F5F5F5",
        'secondary': "#EEEEEE",
        'terciary': "#76EED1",
        'font':"#464646",
        'background':"#FFFFFF",
        'border':"#D4D4D4", 
        'hoverButton':"#1DD7AA"
      },
    },
  },
  plugins: [],
};
export default config;
