import React from 'react'
import { cn } from '../../utils/cn'

export interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  required?: boolean
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  helperText,
  errorMessage,
  required,
  className,
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
            errorMessage && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {label && (
          <label htmlFor={checkboxId} className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
      </div>
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      {helperText && !errorMessage && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  )
}

FormCheckbox.displayName = 'FormCheckbox'
