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
        labai: {
          purple: "#5B36D6", // O roxo vibrante da marca
          green: "#00C853",  // O verde tecnológico para destaques
          dark: "#1A1A24",   // Para textos em fundos claros
          light: "#F8F9FA",  // Para fundos de seções secundárias
        }
      },
    },
  },
  plugins: [],
};
export default config;