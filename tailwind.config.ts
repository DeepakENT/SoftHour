import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#F5F2ED",
        sectionBg: "#ECE7E1",
        gold: "#B89B5E",
        goldHover: "#A98C4F",
        textMain: "#4B4B4B",
        textMuted: "#6D6D6D",
        accent: "#A3A391",
      },
      maxWidth: {
        premium: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
