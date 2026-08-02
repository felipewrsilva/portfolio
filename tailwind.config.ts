import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          muted: '#243041',
        },
        paper: {
          DEFAULT: '#F3F5F7',
          deep: '#E4E8EE',
        },
        accent: {
          DEFAULT: '#2C4A36',
          soft: '#C5D6CB',
        },
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
}

export default config
