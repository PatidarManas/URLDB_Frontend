/** @type {import('tailwindcss').Config} */
module.exports = ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ziggle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        ziggle: 'ziggle 0.5s infinite',
      },
    },
  },
  plugins: [],
  
});
