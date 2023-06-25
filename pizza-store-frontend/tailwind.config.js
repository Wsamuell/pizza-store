/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'grey-20': '#e5e5e5',
        'grey-50': '#faedcd',
        'grey-100': '#d5bdaf',
        'grey-500': '#000000',
        'primary-100': '#FFCF2D',
        'primary-300': '#e3d5ca',
        'primary-500': '#f9dcc4',
        'secondary-100': '#6c757d',
        'secondary-400': '#495057',
        'secondary-500': '#343a40',
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
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
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
