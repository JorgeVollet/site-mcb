/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Cinza da logo MCB — cor de quebra principal
        mcb: {
          gray: '#989898',
          'gray-50': '#f6f6f5',
          'gray-100': '#ececeb',
          'gray-200': '#d8d8d6',
          'gray-300': '#bcbcb9',
          'gray-400': '#989898',
          'gray-500': '#74746f',
          'gray-600': '#54544f',
          'gray-700': '#3a3a36',
          'gray-800': '#272725',
          'gray-900': '#1a1a18',
        },
        // Madeira / cobre — acento da marca
        wood: {
          50: '#faf3ec',
          100: '#f0ddc9',
          200: '#e2c19e',
          300: '#d0a273',
          400: '#c08a55',
          500: '#b47b53', // cor principal do site antigo
          600: '#9a6038',
          700: '#7a4d2e',
          800: '#5c3b24',
          900: '#3f291a',
        },
        cream: '#f6f3ee',
        ink: '#252019',
      },
      fontFamily: {
        sans: ['Bw Modelica', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Juicy Pro', 'Bw Modelica', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.08)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(90, 60, 30, 0.25)',
        glow: '0 0 40px -8px rgba(180, 123, 83, 0.45)',
        card: '0 10px 40px -12px rgba(38, 39, 37, 0.18)',
      },
    },
  },
  plugins: [],
}
