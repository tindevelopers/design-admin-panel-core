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

// Import the actual values for the consolidated object
import { colors as colorsTokens, semanticColors as semanticColorsTokens } from './colors';
import { typography as typographyTokens, textStyles as textStylesTokens } from './typography';
import { spacing as spacingTokens, semanticSpacing as semanticSpacingTokens } from './spacing';
import { shadows as shadowsTokens, semanticShadows as semanticShadowsTokens } from './shadows';
import { borderRadius as borderRadiusTokens, semanticBorderRadius as semanticBorderRadiusTokens } from './border-radius';

// Consolidated design tokens object
export const designTokens = {
  colors: colorsTokens,
  semanticColors: semanticColorsTokens,
  typography: typographyTokens,
  textStyles: textStylesTokens,
  spacing: spacingTokens,
  semanticSpacing: semanticSpacingTokens,
  shadows: shadowsTokens,
  semanticShadows: semanticShadowsTokens,
  borderRadius: borderRadiusTokens,
  semanticBorderRadius: semanticBorderRadiusTokens,
} as const;

// Component size and variant types
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type ComponentState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';