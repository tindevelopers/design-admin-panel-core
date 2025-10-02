/**
 * Design Tokens Index
 * Central export for all design tokens
 */

// Export all color tokens
export { colors, semanticColors } from './colors'
export type { ColorToken, SemanticColor } from './colors'

// Export all typography tokens
export { textStyles, typography } from './typography'
export type { TextStyle, TypographyToken } from './typography'

// Export all spacing tokens
export { semanticSpacing, spacing } from './spacing'
export type { SemanticSpacingToken, SpacingToken } from './spacing'

// Export all shadow tokens
export { semanticShadows, shadows } from './shadows'
export type { SemanticShadowToken, ShadowToken } from './shadows'

// Export all border radius tokens
export { borderRadius, semanticBorderRadius } from './border-radius'
export type { BorderRadiusToken, SemanticBorderRadiusToken } from './border-radius'

// Import the actual values for the consolidated object
import {
  borderRadius as borderRadiusTokens,
  semanticBorderRadius as semanticBorderRadiusTokens,
} from './border-radius'
import { colors as colorsTokens, semanticColors as semanticColorsTokens } from './colors'
import { semanticShadows as semanticShadowsTokens, shadows as shadowsTokens } from './shadows'
import { semanticSpacing as semanticSpacingTokens, spacing as spacingTokens } from './spacing'
import { textStyles as textStylesTokens, typography as typographyTokens } from './typography'

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
} as const

// Component size and variant types
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type ComponentState = 'default' | 'hover' | 'focus' | 'active' | 'disabled'
