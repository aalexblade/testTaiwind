/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '375px',
      md: '992px',
      lg: '1366px',
      xl: '1920px',
    },
  },
  plugins: [],
};
