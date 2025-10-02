/**
 * Global TypeScript type definitions for the admin design system
 */

import React from 'react'
import { ComponentSize, ComponentVariant } from '../tokens'

// Base component props that all components should extend
export interface BaseComponentProps {
  className?: string
  id?: string
  'data-testid'?: string
}

// Common component props
export interface ComponentProps extends BaseComponentProps {
  size?: ComponentSize
  variant?: ComponentVariant
  disabled?: boolean
  loading?: boolean
}

// Layout component props
export interface LayoutProps extends BaseComponentProps {
  children: React.ReactNode
}

// Interactive component props
export interface InteractiveProps extends ComponentProps {
  onClick?: (event: React.MouseEvent) => void
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => void
}

// Form component props
export interface FormComponentProps extends ComponentProps {
  name?: string
  value?: string | number | boolean
  defaultValue?: string | number | boolean
  onChange?: (value: unknown) => void
  onValidate?: (value: unknown) => string | undefined
  required?: boolean
  readOnly?: boolean
}

// Admin-specific component props
export interface AdminComponentProps extends BaseComponentProps {
  collapsed?: boolean
  expanded?: boolean
  active?: boolean
  selected?: boolean
}

// Theme configuration types
export interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  resolvedTheme: 'light' | 'dark'
}

// Component state types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
export type ValidationState = 'valid' | 'invalid' | 'pending'

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void
export type ChangeHandler<T = string> = (value: T) => void
export type KeyboardHandler = (event: React.KeyboardEvent<HTMLElement>) => void

// Utility types
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

// Component ref types
export type ButtonRef = React.ElementRef<'button'>
export type InputRef = React.ElementRef<'input'>
export type DivRef = React.ElementRef<'div'>
export type SpanRef = React.ElementRef<'span'>

// Polymorphic component types
export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode }

// Icon component types
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  color?: string
}

// Animation types
export type AnimationDuration = 'fast' | 'normal' | 'slow'
export type AnimationType = 'fade' | 'slide' | 'scale' | 'bounce'

// Responsive types
export type ResponsiveValue<T> = T | { sm?: T; md?: T; lg?: T; xl?: T }

// Admin layout types
export interface AdminLayoutConfig {
  sidebarCollapsed: boolean
  sidebarWidth: number
  topbarHeight: number
  contentPadding: number
}

// Data table types (for future admin components)
export interface TableColumn<T = unknown> {
  key: keyof T
  title: string
  width?: number | string
  sortable?: boolean
  filterable?: boolean
  render?: (value: unknown, record: T, index: number) => React.ReactNode
}

export interface DataTableProps<T = unknown> {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  pagination?: {
    current: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  selection?: {
    selectedRowKeys: React.Key[]
    onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
  }
}

// Form types (for future form components)
export interface FormFieldConfig {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox' | 'radio' | 'textarea'
  required?: boolean
  placeholder?: string
  helperText?: string
  validation?: {
    pattern?: RegExp
    min?: number
    max?: number
    minLength?: number
    maxLength?: number
    custom?: (value: unknown) => string | undefined
  }
  options?: Array<{ label: string; value: unknown }>
}

export interface FormConfig {
  fields: FormFieldConfig[]
  onSubmit: (values: Record<string, unknown>) => void | Promise<void>
  initialValues?: Record<string, unknown>
  validation?: 'onChange' | 'onBlur' | 'onSubmit'
}

// Navigation types (for future navigation components)
export interface NavigationItem {
  key: string
  label: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  children?: NavigationItem[]
  badge?: string | number
  disabled?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

// Modal and dialog types
export interface ModalProps extends BaseComponentProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  maskClosable?: boolean
  footer?: React.ReactNode
}

// Notification types
export interface NotificationConfig {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  closable?: boolean
  action?: {
    label: string
    onClick: () => void
  }
}

// Export all types for external use
export type { ComponentSize, ComponentState, ComponentVariant } from '../tokens'
