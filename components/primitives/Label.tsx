import React from 'react';
import { cn } from '../../utils/cn';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  className,
  ...props
}) => {
  return (
    <label
      className={cn('block text-sm font-medium text-gray-700', className)}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

Label.displayName = 'Label';
