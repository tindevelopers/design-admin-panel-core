import React from 'react';
import { cn } from '../../utils/cn';

export interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp = false,
  levelDown = false,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{total}</p>
          <div className="flex items-center space-x-1">
            <span
              className={cn(
                'text-sm font-medium',
                levelUp && 'text-green-600',
                levelDown && 'text-red-600',
                !levelUp && !levelDown && 'text-gray-600'
              )}
            >
              {rate}
            </span>
            {levelUp && (
              <svg
                className="h-4 w-4 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            )}
            {levelDown && (
              <svg
                className="h-4 w-4 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            )}
          </div>
        </div>
        {children && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
