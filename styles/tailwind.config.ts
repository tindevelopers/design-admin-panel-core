import type { Config } from 'tailwindcss';
import { designTokens } from '../tokens';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    './docs/**/*.{js,ts,jsx,tsx,mdx}',
    // Add paths for consuming applications
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors from design tokens
      colors: {
        ...designTokens.colors,
        // Semantic color aliases
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        success: designTokens.colors.success,
        warning: designTokens.colors.warning,
        error: designTokens.colors.error,
        info: designTokens.colors.info,
        neutral: designTokens.colors.neutral,

        // Background colors
        background: designTokens.colors.background,

        // Text colors
        foreground: designTokens.colors.text,

        // Border colors
        border: designTokens.colors.border,

        // Admin-specific colors
        admin: designTokens.colors.admin,
      },

      // Typography from design tokens
      fontFamily: designTokens.typography.fontFamily,
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,

      // Spacing from design tokens
      spacing: designTokens.spacing,

      // Shadows from design tokens
      boxShadow: {
        ...designTokens.shadows,
        // Semantic shadow aliases
        'elevation-1': designTokens.semanticShadows.elevation[1],
        'elevation-2': designTokens.semanticShadows.elevation[2],
        'elevation-3': designTokens.semanticShadows.elevation[3],
        'elevation-4': designTokens.semanticShadows.elevation[4],
        'elevation-5': designTokens.semanticShadows.elevation[5],
        'elevation-6': designTokens.semanticShadows.elevation[6],

        // Component shadows
        card: designTokens.semanticShadows.component.card,
        'card-hover': designTokens.semanticShadows.component.cardHover,
        button: designTokens.semanticShadows.component.button,
        'button-hover': designTokens.semanticShadows.component.buttonHover,
        dropdown: designTokens.semanticShadows.component.dropdown,
        modal: designTokens.semanticShadows.component.modal,

        // Focus shadows
        focus: designTokens.semanticShadows.interactive.focus,
        'focus-error': designTokens.semanticShadows.interactive.focusError,
        'focus-success': designTokens.semanticShadows.interactive.focusSuccess,
      },

      // Border radius from design tokens
      borderRadius: {
        ...designTokens.borderRadius,
        // Component radius aliases
        button: designTokens.semanticBorderRadius.component.button,
        input: designTokens.semanticBorderRadius.component.input,
        card: designTokens.semanticBorderRadius.component.card,
        badge: designTokens.semanticBorderRadius.component.badge,
        modal: designTokens.semanticBorderRadius.component.modal,
      },

      // Admin-specific utilities
      width: {
        sidebar: designTokens.semanticSpacing.admin.sidebarWidth,
        'sidebar-collapsed':
          designTokens.semanticSpacing.admin.sidebarCollapsed,
      },
      height: {
        topbar: designTokens.semanticSpacing.admin.topbarHeight,
      },

      // Animation and transitions
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },

      // Custom utilities for admin layouts
      gridTemplateColumns: {
        admin: 'auto 1fr',
        'admin-collapsed': 'auto 1fr',
      },
    },
  },
  plugins: [
    // Custom plugin for component utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Admin layout utilities
        '.admin-layout': {
          display: 'grid',
          gridTemplateColumns: theme('gridTemplateColumns.admin'),
          minHeight: '100vh',
        },
        '.admin-sidebar': {
          width: theme('width.sidebar'),
          backgroundColor: theme('colors.admin.sidebar'),
          color: theme('colors.text.inverse'),
          transition: 'width 200ms ease-in-out',
        },
        '.admin-sidebar-collapsed': {
          width: theme('width.sidebar-collapsed'),
        },
        '.admin-topbar': {
          height: theme('height.topbar'),
          backgroundColor: theme('colors.admin.topbar'),
          borderBottom: `1px solid ${theme('colors.border.primary')}`,
          boxShadow: theme('boxShadow.sm'),
        },
        '.admin-content': {
          backgroundColor: theme('colors.admin.content'),
          padding: theme('spacing.6'),
          overflow: 'auto',
        },
        '.admin-card': {
          backgroundColor: theme('colors.admin.card'),
          borderRadius: theme('borderRadius.card'),
          boxShadow: theme('boxShadow.card'),
          padding: theme('spacing.6'),
          border: `1px solid ${theme('colors.border.primary')}`,
        },
        '.admin-card-hover': {
          '&:hover': {
            boxShadow: theme('boxShadow.card-hover'),
          },
        },

        // Focus utilities
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus'),
          },
        },
        '.focus-ring-error': {
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-error'),
          },
        },
        '.focus-ring-success': {
          '&:focus': {
            outline: 'none',
            boxShadow: theme('boxShadow.focus-success'),
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
