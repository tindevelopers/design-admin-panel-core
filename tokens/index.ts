/**
 * Design Tokens Index
 * Central export for all design tokens
 */

// Export all color tokens
export { colors, semanticColors } from './colors';
export type { ColorToken, SemanticColor } from './colors';

// Export all typography tokens
export { typography, textStyles } from './typography';
export type { TypographyToken, TextStyle } from './typography';

// Export all spacing tokens
export { spacing, semanticSpacing } from './spacing';
export type { SpacingToken, SemanticSpacingToken } from './spacing';

// Export all shadow tokens
export { shadows, semanticShadows } from './shadows';
export type { ShadowToken, SemanticShadowToken } from './shadows';

// Export all border radius tokens
export { borderRadius, semanticBorderRadius } from './border-radius';
export type { BorderRadiusToken, SemanticBorderRadiusToken } from './border-radius';

// Consolidated design tokens object
export const designTokens = {
  colors,
  semanticColors,
  typography,
  textStyles,
  spacing,
  semanticSpacing,
  shadows,
  semanticShadows,
  borderRadius,
  semanticBorderRadius,
} as const;

// Component size and variant types
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type ComponentState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';