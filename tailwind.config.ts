import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          50:  '#E8F5EE',
          100: '#C3E6D2',
          200: '#9DD6B6',
          300: '#77C79A',
          400: '#51B87E',
          500: '#2BA962',
          600: '#228A4F',
          700: '#1B4332',
          800: '#122E22',
          900: '#091911',
        },
        teal: {
          DEFAULT: '#0EA5E9',
          50:  '#E0F5FD',
          100: '#B8E8FA',
          200: '#7BD4F7',
          300: '#38BFF4',
          400: '#0EA5E9',
          500: '#0284C7',
          600: '#0268A0',
        },
        cream: '#F8F5F0',
        urgent: '#DC2626',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
