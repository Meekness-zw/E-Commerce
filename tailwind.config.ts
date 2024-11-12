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
       brown:'#4F4631',
       green:'#314F4A',
       blue:'#31344F',
       grey:'#F0F0F0',
       lightgreen:'#01AB31',
       red:'#FF3333'
      },
    },
  },
  plugins: [],
};
export default config;
