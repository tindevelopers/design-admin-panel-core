import React from 'react';

export interface ChartThreeProps {
  data: any;
  className?: string;
}

export const ChartThree: React.FC<ChartThreeProps> = ({ data, className }) => {
  return (
    <div className={`h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-600">Chart Three</div>
        <div className="text-sm text-gray-500">Data visualization placeholder</div>
      </div>
    </div>
  );
};
