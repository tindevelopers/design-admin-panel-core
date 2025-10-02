import React from 'react';
import { cn } from '../../utils/cn';

export interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Description: React.FC<DescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'text-sm text-gray-500',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

Description.displayName = 'Description';
