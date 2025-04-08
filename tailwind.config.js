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
      }
    }
  },
  plugins: [],
}