/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #ff616a 0%, #ffc837 100%)',
        'mobile-home': "url('./assets/lagom-slice-of-pizza.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'san-serif'],
        montserrat: ['Montserrat', 'san-serif'],
      },
      // BKMRK: Might need to Nuke this
      content: {
        evolvetext: "url('./assets/')",
        chilli: "url('./assets/chilli-pepper.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [],
};
