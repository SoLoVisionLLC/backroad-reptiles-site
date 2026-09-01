/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0b100d',
          900: '#111914',
          850: '#17221c',
          800: '#1e2c24',
          700: '#2b3f34',
          600: '#3c5849',
        },
        copper: {
          300: '#f5aa7d',
          400: '#ec8750',
          500: '#d96b32',
          600: '#b8511e',
          700: '#943f16',
          900: '#4d1e08',
          950: '#2c1003',
        },
        moss: {
          300: '#a3c29d',
          400: '#7fa877',
          500: '#5c8a54',
          600: '#466d3f',
          800: '#263d22',
          950: '#101a0e',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#f7f2e7',
          200: '#ede2ce',
          300: '#dfceb0',
          400: '#c8af88',
          800: '#4a3d29',
          900: '#2a2216',
        },
        reptile: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'botanical': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(217, 107, 50, 0.15)',
        'copper-glow': '0 0 35px -5px rgba(217, 107, 50, 0.35)',
        'moss-glow': '0 0 35px -5px rgba(92, 138, 84, 0.35)',
      },
      backgroundImage: {
        'botanical-mesh': 'radial-gradient(at 15% 15%, rgba(217, 107, 50, 0.08) 0px, transparent 50%), radial-gradient(at 85% 20%, rgba(92, 138, 84, 0.12) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(184, 81, 30, 0.06) 0px, transparent 60%)',
      }
    },
  },
  plugins: [],
}
