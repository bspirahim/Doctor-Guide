/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff8b42",
          "secondary": "#6e27e0",
          "accent": "#0089ba",
          "neutral": "#273240",
          "base-100": "#ffffff",
        },
      },
    
    ],
  },

  plugins: [require("daisyui")],
}

