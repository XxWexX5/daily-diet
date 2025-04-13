/** @type {import('tailwindcss').Config} */

import { platformSelect } from "nativewind/theme";

import { colors } from './src/theme';

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoLight: ["NunitoLight", "sans-serif"],
        nunitoItalic: ["NunitoItalic", "sans-serif"],
        nunitoBold: ["NunitoBold", "sans-serif"],
        system: platformSelect({
          ios: "Nunito",
          android: "Nunito",
          default: "Nunito",
        }),
      },
      colors,
      borderRadius: {
        default: '0.75rem'
      }
    }
  },
  plugins: [],
}