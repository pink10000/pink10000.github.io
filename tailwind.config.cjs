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
          background: '#121212',
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
