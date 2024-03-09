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
        lightBg: 'hsl(214, 7%, 19%)',
        darkBg: '#393B41',
        component: 'hsl(206 9% 15%)',
        lightTxt: 'hsl(200, 15%, 8%)',
        darkTxt: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
