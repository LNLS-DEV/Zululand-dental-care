/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBFDFF',
        ice: {
          50: '#F5FAFD',
          100: '#E7F2F9',
          200: '#D3E9F4',
          300: '#B4D9EA',
        },
        ink: {
          DEFAULT: '#122B33',
          soft: '#3E5A63',
          faint: '#7C939A',
        },
        duma: {
          50: '#EFF6F9',
          100: '#D7E9F0',
          300: '#7FB3C7',
          500: '#2E7A97',
          600: '#236076',
          700: '#1B4C5D',
          900: '#0E2C36',
        },
        champagne: {
          100: '#F3E9D8',
          300: '#DEC28C',
          500: '#B08D57',
          700: '#8A6D40',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        arch: '2rem 2rem 0.5rem 0.5rem',
        'arch-lg': '4rem 4rem 1rem 1rem',
      },
      boxShadow: {
        glass: '0 1px 1px rgba(18,43,51,0.04), 0 8px 24px -8px rgba(18,43,51,0.12), 0 24px 48px -24px rgba(46,122,151,0.18)',
        'glass-sm': '0 1px 2px rgba(18,43,51,0.05), 0 4px 12px -4px rgba(18,43,51,0.10)',
      },
      backgroundImage: {
        'ice-wash': 'radial-gradient(120% 120% at 15% 0%, #EFF8FC 0%, #FBFDFF 45%, #FBFDFF 100%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(231,242,249,0.4) 100%)',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
