import React from 'react'
import { Switch, SwitchProps } from './Switch'

export interface SwitchFieldProps extends SwitchProps {
  name: string
  description?: string
}

export const SwitchField: React.FC<SwitchFieldProps> = ({ name, description, ...props }) => {
  return (
    <div className="space-y-2">
      <Switch name={name} {...props} />
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  )
}

SwitchField.displayName = 'SwitchField'
