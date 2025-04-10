/** @type {import('tailwindcss').Config} */

import { platformSelect } from "nativewind/theme";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoItalic: ["NunitoItalic", "sans-serif"],
        system: platformSelect({
          ios: "Nunito",
          android: "Nunito",
          default: "Nunito",
        }),
      },
      colors: {
        error: {
          900: "#BF3B44",
          600: '#F3BABD',
          500: "#F4E6E7",
        },
        success: {
          900: "#639339",
          600: '#CBE4B4',
          500: "#E5F0DB",
        },
        neutral: {
          900: "#1B1D1E",
          800: "#333638",
          700: "#5C6265",
          500: "#B9BBBC",
          300: "#DDDEDF",
          200: "#EFF0F0",
          100: "#FAFAFA",
          full: "#FFFFFF"
        }
      }
    }
  },
  plugins: [],
}