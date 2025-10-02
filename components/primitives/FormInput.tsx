import React from 'react';
import { Input, InputProps } from './Input';
import { cn } from '../../utils/cn';

export interface FormInputProps extends InputProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  errorMessage,
  required,
  className,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <Input
        className={cn(
          errorMessage && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      {helperText && !errorMessage && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

FormInput.displayName = 'FormInput';
