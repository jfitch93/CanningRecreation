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
        // Earthy sage green — warm, natural, small-town feel
        forest: {
          DEFAULT: '#4A6741',
          50:  '#EDF2EB',
          100: '#D1DFCE',
          200: '#A8C0A3',
          300: '#7FA178',
          400: '#5C8255',
          500: '#4A6741',
          600: '#3C5535',
          700: '#2E4228',
          800: '#20301C',
          900: '#121D10',
        },
        // Warm honey/amber — replaces the sporty bright teal
        teal: {
          DEFAULT: '#C4873A',
          50:  '#FAF0E4',
          100: '#F2DCBC',
          200: '#E6C388',
          300: '#D9A856',
          400: '#C4873A',
          500: '#A86C27',
          600: '#8B5219',
        },
        // Warm backgrounds
        cream:   '#FAF7F0',
        linen:   '#EDE8DD',
        // Soft coastal blue for occasional accents
        coastal: '#6B8FA8',
        // Warm near-black for body text
        charcoal: '#2A2018',
        // Alert red — unchanged
        urgent: '#DC2626',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
