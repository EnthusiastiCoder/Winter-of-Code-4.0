import { Chakra_Petch } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      brand:"#E2AA06",
      blite:"#FBBC0440",
      black:"#000000",
      white:"#FFFFFF",
      timeline:'#C23B30',
      grey:"#CCCCCC",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kleemax: ["var(--font-kleemax)"],
        chakra: ["var(--font-chakra)"],
      },
      dropShadow: {
        gold: [
          "0 0 20px rgba(220,170, 6, 1)",
        ],
        green: [
          "0 0px 20px rgba(0,255,132, 1)",
        ],
        red: [
          "0 0 20px rgba(248,57,63, 1)",
        ],
        
      },
      maxWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       }
    },
  },
  plugins: [],
};
export default config;
