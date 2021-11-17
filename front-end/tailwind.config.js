// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'yellow-color': '#FBC117',
        'dark-color': '#100F0D',
      },
      gradientColorStops: {
        'yellow-color': '#FBC117',
        'dark-color': '#100F0D',
      },
      borderColor: {
        'yellow-color': '#FBC117',
        'dark-color': '#100F0D',
      },
      textColor: {
        'yellow-color': '#FBC117',
        'dark-color': '#100F0D',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
