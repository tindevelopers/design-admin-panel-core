import React from 'react'
import { cn } from '../../utils/cn'

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  destructive?: boolean
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  icon,
  destructive = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
        destructive && 'text-red-700 hover:bg-red-50 focus:bg-red-50',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-3 h-4 w-4">{icon}</span>}
      {children}
    </button>
  )
}

DropdownItem.displayName = 'DropdownItem'
