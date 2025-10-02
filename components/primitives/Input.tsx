import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// Input variants
const inputVariants = cva(
  // Base styles
  'input block w-full rounded-md border bg-background-primary px-3 py-2 text-text-primary placeholder-text-muted transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border-border-primary focus:border-primary-500',
        error: 'border-error-500 focus:border-error-500 focus-ring-error',
        success: 'border-success-500 focus:border-success-500 focus-ring-success',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    label,
    helperText,
    errorMessage,
    leftIcon,
    rightIcon,
    fullWidth = true,
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || !!errorMessage;
    const actualVariant = hasError ? 'error' : variant;

    return (
      <div className={cn('space-y-1', fullWidth ? 'w-full' : 'w-auto')}>
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-label-lg text-text-secondary"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-text-muted">{leftIcon}</span>
            </div>
          )}
          
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: actualVariant, size }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-text-muted">{rightIcon}</span>
            </div>
          )}
        </div>
        
        {(helperText || errorMessage) && (
          <p className={cn(
            'text-label-sm',
            hasError ? 'text-error-500' : 'text-text-muted'
          )}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };