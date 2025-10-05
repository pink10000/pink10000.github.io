/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["monospace"],
      },
      colors: {
        dark: {
          background: '#161616',
        },
      },
      transitionDuration: {
        'default': '200ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
