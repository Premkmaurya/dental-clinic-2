/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          hover: '#0B3A63',
          light: '#E8F4FF',
        },
        secondary: {
          DEFAULT: '#4FB3BF',
          hover: '#3ea2ae',
        },
        neutral: {
          dark: '#202A36',
          light: '#F8FAFC',
        },
        accent: '#E8F4FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
