/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          yellow: '#F5A623',
          red: '#E8402A',
          teal: '#5CC8C8',
        },
        bg: '#F2F2F2',
        text: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
