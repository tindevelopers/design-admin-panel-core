import React from 'react'
import { cn } from '../../utils/cn'

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  helperText,
  errorMessage,
  required,
  options = [],
  className,
  children,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <select
        className={cn(
          'block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none',
          errorMessage && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {children}
      </select>
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      {helperText && !errorMessage && <p className="text-sm text-gray-500">{helperText}</p>}
    </div>
  )
}

FormSelect.displayName = 'FormSelect'
