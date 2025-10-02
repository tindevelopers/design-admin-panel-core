/**
 * Typography Design Tokens
 * Font families, sizes, weights, and line heights
 */

export const typography = {
  // Font families
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
    display: [
      'Cal Sans',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'sans-serif',
    ],
  },

  // Font sizes with corresponding line heights
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
    base: ['1rem', { lineHeight: '1.5rem' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }], // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
    '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
    '8xl': ['6rem', { lineHeight: '1' }], // 96px
    '9xl': ['8rem', { lineHeight: '1' }], // 128px
  },

  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Semantic typography scales
export const textStyles = {
  // Display text (hero sections, large headings)
  display: {
    '2xl': {
      fontSize: typography.fontSize['7xl'],
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
      fontFamily: typography.fontFamily.display,
    },
    xl: {
      fontSize: typography.fontSize['6xl'],
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
      fontFamily: typography.fontFamily.display,
    },
    lg: {
      fontSize: typography.fontSize['5xl'],
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
      fontFamily: typography.fontFamily.display,
    },
    md: {
      fontSize: typography.fontSize['4xl'],
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
      fontFamily: typography.fontFamily.display,
    },
    sm: {
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.bold,
      letterSpacing: typography.letterSpacing.tight,
      fontFamily: typography.fontFamily.display,
    },
  },

  // Headings
  heading: {
    h1: {
      fontSize: typography.fontSize['4xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
    },
    h2: {
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
    },
    h3: {
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.snug,
    },
    h4: {
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.snug,
    },
    h5: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.normal,
    },
    h6: {
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.normal,
    },
  },

  // Body text
  body: {
    lg: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.relaxed,
    },
    md: {
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
    },
    sm: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
    },
  },

  // Labels and captions
  label: {
    lg: {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
    },
    md: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
    },
    sm: {
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
    },
  },

  // Code and monospace
  code: {
    lg: {
      fontSize: typography.fontSize.base,
      fontFamily: typography.fontFamily.mono,
      fontWeight: typography.fontWeight.normal,
    },
    md: {
      fontSize: typography.fontSize.sm,
      fontFamily: typography.fontFamily.mono,
      fontWeight: typography.fontWeight.normal,
    },
    sm: {
      fontSize: typography.fontSize.xs,
      fontFamily: typography.fontFamily.mono,
      fontWeight: typography.fontWeight.normal,
    },
  },
} as const;

export type TypographyToken = keyof typeof typography;
export type TextStyle = keyof typeof textStyles;
