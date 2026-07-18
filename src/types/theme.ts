export type ColorToken =
  | 'primary'
  | 'background'
  | 'card'
  | 'text'
  | 'secondary'
  | 'border'

export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ThemeTokens {
  colors: Record<ColorToken, string>
  spacing: Record<SpacingToken, string>
  radii: Record<'sm' | 'md' | 'lg' | 'full', string>
  fontSizes: Record<'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl', string>
  shadows: Record<'sm' | 'md' | 'lg', string>
  transition: string
}
