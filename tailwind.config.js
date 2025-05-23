import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#8d806d",
            foreground: "#383128",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
        },
        dark: {
          colors: {
            background: "#383128",
            foreground: "#8d806d",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
        },
      },
    }),
  ],
}
