/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          /* Hide scrollbar for modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],

}