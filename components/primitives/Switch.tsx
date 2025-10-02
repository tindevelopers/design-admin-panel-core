import React from 'react'
import { cn } from '../../utils/cn'

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  required?: boolean
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  helperText,
  errorMessage,
  required,
  className,
  id,
  ...props
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <div className="relative inline-flex h-6 w-11 items-center">
          <input
            id={switchId}
            type="checkbox"
            className={cn('peer sr-only', className)}
            {...props}
          />
          <label
            htmlFor={switchId}
            className={cn(
              'peer h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2',
              errorMessage && 'peer-focus:ring-red-500'
            )}
          >
            <span className="pointer-events-none block h-4 w-4 translate-x-1 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out peer-checked:translate-x-6" />
          </label>
        </div>
        {label && (
          <label htmlFor={switchId} className="text-sm font-medium text-gray-700">
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

Switch.displayName = 'Switch'
