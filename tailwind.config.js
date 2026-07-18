import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        'primary-soft': '#FFE5E5',
        'primary-hover': '#D60000',
        background: '#F7F7F7',
        surface: '#FFFFFF',
        'surface-muted': '#F7F7F7',
        text: '#101010',
        'text-muted': '#555555',
        secondary: '#555555',
        border: '#E8E8E8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 30px 80px rgba(16, 16, 16, 0.08)',
        glow: '0 24px 90px rgba(255, 0, 0, 0.14)',
      },
      borderRadius: {
        md: '1rem',
        xl: '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '9': '2.25rem',
        '13': '3.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config
