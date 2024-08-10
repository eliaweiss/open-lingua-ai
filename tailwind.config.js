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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        pBg: "var(--bg-color)",
        pText: "var(--text-color)",
        sBg: "var(--secondaryBg-color)",
        sText: "var(--secondaryText-color)",
        menuBg: "var(--menuBg-color)",
        globalBg: "var(--globalBg-color)",
        pBorder: "var(--border-color)",
        pHov: "var(--hov-color)",
        // Add other colors using CSS variables

        // Light and Dark shades calculated relative to base colors
        pBgLight: "calc(var(--bg-color) + 10%)",
        pBgDark: "calc(var(--bg-color) - 10%)",
        pTextLight: "calc(var(--text-color) + 10%)",
        pTextDark: "calc(var(--text-color) - 10%)",

        sBgLight: "calc(var(--secondaryBg-color) + 10%)",
        sBgDark: "calc(var(--secondaryBg-color) - 10%)",
        sTextLight: "calc(var(--secondaryText-color) + 10%)",
        sTextDark: "calc(var(--secondaryText-color) - 10%)",

        menuBgLight: "calc(var(--menuBg-color) + 10%)",
        menuBgDark: "calc(var(--menuBg-color) - 10%)",
        globalBgLight: "calc(var(--globalBg-color) + 10%)",
        globalBgDark: "calc(var(--globalBg-color) - 10%)",
        pBorderLight: "calc(var(--border-color) + 10%)",
        pBorderDark: "calc(var(--border-color) - 10%)",
        pHovLight: "calc(var(--hov-color) + 10%)",
        pHovDark: "calc(var(--hov-color) - 10%)",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
  plugins: [require("tailwindcss-rtl")],
};
