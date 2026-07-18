import type { ThemeTokens } from '@/types/theme'

export const themeTokens: ThemeTokens = {
  colors: {
    primary: '#FF0000',
    background: '#F7F7F7',
    card: '#FFFFFF',
    text: '#101010',
    secondary: '#555555',
    border: '#E8E8E8',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  radii: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.06)',
    md: '0 4px 8px rgba(15, 23, 42, 0.08)',
    lg: '0 8px 16px rgba(15, 23, 42, 0.12)',
  },
  transition: 'all 0.2s ease-in-out',
}
