import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// Card variants
const cardVariants = cva(
  // Base styles
  'admin-card bg-background-primary border border-border-primary rounded-card shadow-card transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-background-primary border-border-primary',
        elevated: 'shadow-md hover:shadow-lg',
        outlined: 'border-2 border-border-secondary shadow-none',
        ghost: 'border-none shadow-none bg-transparent',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'admin-card-hover cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, asChild: _asChild = false, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, hover, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// Card Header component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, action, children, ...props }, ref) => {
    return (
      <div
        className={cn('flex items-start justify-between space-y-1.5 pb-4', className)}
        ref={ref}
        {...props}
      >
        <div className="space-y-1">
          {title && (
            <h3 className="text-heading-3 text-text-primary font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-body-sm text-text-secondary">
              {subtitle}
            </p>
          )}
          {children}
        </div>
        {action && (
          <div className="flex items-center space-x-2">
            {action}
          </div>
        )}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

// Card Content component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('space-y-4', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardContent.displayName = 'CardContent';

// Card Footer component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('flex items-center justify-between pt-4 border-t border-border-primary', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardFooter.displayName = 'CardFooter';

// Card Body component (alias for CardContent for compatibility)
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('space-y-4', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardBody.displayName = 'CardBody';

export { Card, CardHeader, CardContent, CardFooter, CardBody, cardVariants };