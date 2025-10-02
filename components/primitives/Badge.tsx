import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from '../../utils/cn'

// Badge variants
const badgeVariants = cva(
  // Base styles
  'inline-flex items-center rounded-badge px-2 py-1 text-label-sm font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-primary-800 border border-primary-200',
        secondary: 'bg-secondary-100 text-secondary-800 border border-secondary-200',
        success: 'bg-success-100 text-success-800 border border-success-200',
        warning: 'bg-warning-100 text-warning-800 border border-warning-200',
        error: 'bg-error-100 text-error-800 border border-error-200',
        danger: 'bg-red-100 text-red-800 border border-red-200',
        info: 'bg-info-100 text-info-800 border border-info-200',
        neutral: 'bg-neutral-100 text-neutral-800 border border-neutral-200',
        outline: 'border border-border-primary text-text-secondary bg-transparent',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
      dot: {
        true: 'pl-1.5',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      dot: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  removable?: boolean
  onRemove?: () => void
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant, size, dot, icon, removable = false, onRemove, children, ...props },
    ref
  ) => {
    return (
      <span className={cn(badgeVariants({ variant, size, dot, className }))} ref={ref} {...props}>
        {dot && (
          <span
            className={cn(
              'mr-1.5 inline-block h-1.5 w-1.5 rounded-full',
              variant === 'primary' && 'bg-primary-500',
              variant === 'secondary' && 'bg-secondary-500',
              variant === 'success' && 'bg-success-500',
              variant === 'warning' && 'bg-warning-500',
              variant === 'error' && 'bg-error-500',
              variant === 'danger' && 'bg-red-500',
              variant === 'info' && 'bg-info-500',
              variant === 'neutral' && 'bg-neutral-500',
              variant === 'outline' && 'bg-text-secondary'
            )}
          />
        )}

        {icon && !dot && <span className="mr-1">{icon}</span>}

        {children}

        {removable && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 inline-flex h-3 w-3 items-center justify-center rounded-full hover:bg-black/10 focus:bg-black/10 focus:outline-none"
            aria-label="Remove badge"
            title="Remove badge"
          >
            <svg
              className="h-2 w-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
