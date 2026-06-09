import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rotary: {
          blue: "#003366",
          gold: "#F7A81B",
          cranberry: "#D91B5C",
          azure: "#0050A2",
          violet: "#663399",
          turquoise: "#00B2A9",
        },
      },
    },
  },
  plugins: [],
};

export default config;
