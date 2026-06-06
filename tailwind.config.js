/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Luxora Holidays brand palette ──────────────────────────
        canvas: '#F8FAFC', // page background
        primary: {
          DEFAULT: '#14532D', // deep forest green
          50: '#ECFDF3',
          100: '#D1FADF',
          600: '#1A6B3C',
          700: '#14532D',
          800: '#0F4023',
          900: '#0A2E19',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E7CA6B',
          dark: '#B8932B',
        },
        emerald: {
          DEFAULT: '#10B981',
          soft: '#34D399',
        },
        ink: '#0B1F16', // near-black green for headings
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 83, 45, 0.18)',
        glass: '0 8px 32px rgba(20, 83, 45, 0.12)',
        'glass-lg': '0 24px 60px -20px rgba(20, 83, 45, 0.28)',
        gold: '0 8px 30px -8px rgba(212, 175, 55, 0.45)',
        lift: '0 28px 70px -24px rgba(11, 31, 22, 0.35)',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(135deg, #E7CA6B 0%, #D4AF37 45%, #B8932B 100%)',
        'green-deep':
          'linear-gradient(135deg, #1A6B3C 0%, #14532D 55%, #0A2E19 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-26px) rotate(-4deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
