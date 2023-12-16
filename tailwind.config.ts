import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {},
      padding: {
        DEFAULT: '6dvw',
      },
    },
    fontFamily: {
      "display": "var(--gofteh-heavy)",
      "body": ["var(--abar-pro)", "var(--yekan-bakh)"],
    },
    extend: {
      colors: {
        'primary': { DEFAULT: '#E8443A', 50: '#FBE0DE', 100: '#F9CFCC', 200: '#F5ACA8', 300: '#F18983', 400: '#EC675F', 500: '#E8443A', 600: '#D12318', 700: '#9F1B13', 800: '#6D120D', 900: '#3B0A07', 950: '#220604' },
        'accent': { DEFAULT: '#FFF295', 50: '#FFFDF1', 100: '#FFFCE7', 200: '#FFFAD2', 300: '#FFF7BE', 400: '#FFF5A9', 500: '#FFF295', 600: '#FFEB5D', 700: '#FFE425', 800: '#ECCF00', 900: '#B49E00', 950: '#988500' },
        'secondary': { DEFAULT: '#7F1716', 50: '#E56968', 100: '#E25856', 200: '#DC3534', 300: '#C52422', 400: '#A21D1C', 500: '#7F1716', 600: '#651211', 700: '#4B0E0D', 800: '#310908', 900: '#170404', 950: '#0A0202' },
        'corn': { DEFAULT: '#DBAB00', 50: '#FFE794', 100: '#FFE37F', 200: '#FFDA56', 300: '#FFD12E', 400: '#FFC805', 500: '#DBAB00', 600: '#A37F00', 700: '#6B5300', 800: '#332800', 900: '#000000', 950: '#000000' },
      },
    },
  },
  plugins: [],
}
export default config
