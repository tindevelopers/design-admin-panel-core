/**
 * Border Radius Design Tokens
 * Consistent border radius scale
 */

export const borderRadius = {
  none: '0px',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const

// Semantic border radius tokens
export const semanticBorderRadius = {
  // Component radius
  component: {
    button: borderRadius.md,
    input: borderRadius.md,
    card: borderRadius.lg,
    badge: borderRadius.full,
    avatar: borderRadius.full,
    modal: borderRadius.xl,
    dropdown: borderRadius.lg,
  },

  // Admin-specific radius
  admin: {
    sidebar: borderRadius.none,
    card: borderRadius.lg,
    button: borderRadius.md,
    input: borderRadius.md,
    badge: borderRadius.full,
  },
} as const

export type BorderRadiusToken = keyof typeof borderRadius
export type SemanticBorderRadiusToken = keyof typeof semanticBorderRadius
