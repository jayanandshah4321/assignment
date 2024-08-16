/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#0F182A',
        componentBg: '#1E293B',
        textcolor:"#E2E9EF",
        tabletop:"#6366F1",
      },
    },
  },
  plugins: [],
}