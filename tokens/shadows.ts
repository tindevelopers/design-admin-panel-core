/**
 * Shadow Design Tokens
 * Elevation system with consistent shadows
 */

export const shadows = {
  // Base shadow scale
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',

  // Colored shadows
  primary:
    '0 4px 6px -1px rgb(59 130 246 / 0.15), 0 2px 4px -2px rgb(59 130 246 / 0.15)',
  success:
    '0 4px 6px -1px rgb(34 197 94 / 0.15), 0 2px 4px -2px rgb(34 197 94 / 0.15)',
  warning:
    '0 4px 6px -1px rgb(245 158 11 / 0.15), 0 2px 4px -2px rgb(245 158 11 / 0.15)',
  error:
    '0 4px 6px -1px rgb(239 68 68 / 0.15), 0 2px 4px -2px rgb(239 68 68 / 0.15)',
} as const;

// Semantic shadow tokens
export const semanticShadows = {
  // Elevation levels
  elevation: {
    0: shadows.none,
    1: shadows.sm,
    2: shadows.base,
    3: shadows.md,
    4: shadows.lg,
    5: shadows.xl,
    6: shadows['2xl'],
  },

  // Component shadows
  component: {
    card: shadows.base,
    cardHover: shadows.md,
    button: shadows.sm,
    buttonHover: shadows.base,
    dropdown: shadows.lg,
    modal: shadows['2xl'],
    tooltip: shadows.md,
  },

  // Interactive shadows
  interactive: {
    focus: '0 0 0 3px rgb(59 130 246 / 0.1)',
    focusError: '0 0 0 3px rgb(239 68 68 / 0.1)',
    focusSuccess: '0 0 0 3px rgb(34 197 94 / 0.1)',
  },

  // Admin-specific shadows
  admin: {
    sidebar: shadows.lg,
    topbar: shadows.sm,
    card: shadows.base,
    cardHover: shadows.md,
    floatingPanel: shadows.xl,
  },
} as const;

export type ShadowToken = keyof typeof shadows;
export type SemanticShadowToken = keyof typeof semanticShadows;
