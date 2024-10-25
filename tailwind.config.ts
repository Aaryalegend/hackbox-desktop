import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: 'class', // Enables dark mode using a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        // Light theme colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Dark theme specific colors
        darkBackground: "#1f2937", // Example dark background color (gray-900)
        darkForeground: "#d1d5db", // Example dark foreground color (gray-300)
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add support for dark mode variables
  let darkModeVars = Object.fromEntries(
    Object.entries({
      background: theme("colors.darkBackground"),
      foreground: theme("colors.darkForeground"),
    }).map(([key, val]) => [`--dark-${key}`, val])
  );

  addBase({
    ":root": newVars,
    ".dark": darkModeVars, // Applies dark mode color variables
  });
}

export default config;
