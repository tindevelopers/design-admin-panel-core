import React from 'react'

export interface ChartThreeProps {
  data: unknown
  className?: string
}

export const ChartThree: React.FC<ChartThreeProps> = ({ data: _data, className }) => {
  return (
    <div
      className={`flex h-64 w-full items-center justify-center rounded-lg bg-gray-100 ${className}`}
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-600">Chart Three</div>
        <div className="text-sm text-gray-500">Data visualization placeholder</div>
      </div>
    </div>
  )
}
