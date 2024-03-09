/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include paths to your React components for content scanning
  ],

  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(75px, 1fr)',
      }
    },
  },
  plugins: [],
}

