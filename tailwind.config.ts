import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#15212B',
        navy:         '#0F2E44',
        'navy-deep':  '#0A2032',
        water:        '#1F6FB2',
        'water-bright': '#2A86C9',
        'water-soft': '#7FC0EE',
        clay:         '#C0603C',
        paper:        '#FBFAF7',
        sand:         '#F3EEE4',
        muted:        '#5C6E78',
        line:         'rgba(15,33,43,0.10)',
      },
      fontFamily: {
        display: ['"Schibsted Grotesk"', 'sans-serif'],
        body:    ['"Hanken Grotesk"', 'sans-serif'],
        mono:    ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        card: '14px',
        btn:  '8px',
        chip: '22px',
      },
      maxWidth: {
        site: '1240px',
      },
      animation: {
        livePulse: 'livePulse 1.8s ease-in-out infinite',
      },
      keyframes: {
        livePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
