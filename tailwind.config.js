/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Enable dark mode support
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        pBg: "var(--bg-color)",
        pText: "var(--text-color)",
        sBg: "var(--secondaryBg-color)",
        sText: "var(--secondaryText-color)",
        menuBg: "var(--menuBg-color)",
        globalBg: "var(--globalBg-color)",
        pBorder: "var(--border-color)",
        pHov: "var(--hov-color)",
        // Add other colors using CSS variables
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
  plugins: [],
};
