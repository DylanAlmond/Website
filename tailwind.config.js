/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      primary: '#FF0061',
      background: '#FFFFFF',
      surface: '#FAFAFA',
      onPrimary: '#000000',
      onSecondary: '#565656',
      'primary-dark': '#FB2576',
      'background-dark': '#121212',
      'surface-dark': '#161616',
      'onPrimary-dark': '#FFFFFF',
      'onSecondary-dark': '#AAAAAA',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '100% 0%',
          },
          '100%': {
            backgroundPosition: '15% 100%',
          },
        },
      },
      animation: {
        gradient: 'gradient 5s linear infinite',
      },
    },
  },
  plugins: [],
};
