import React from 'react';
import { cn } from '../../utils/cn';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
}

export const Table: React.FC<TableProps> = ({ className, ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn('min-w-full divide-y divide-gray-200', className)}
        {...props}
      />
    </div>
  );
};

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }) => {
  return (
    <thead className={cn('bg-gray-50', className)} {...props} />
  );
};

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ className, ...props }) => {
  return (
    <tbody className={cn('bg-white divide-y divide-gray-200', className)} {...props} />
  );
};

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ className, ...props }) => {
  return (
    <tr className={cn('hover:bg-gray-50', className)} {...props} />
  );
};

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ className, ...props }) => {
  return (
    <td className={cn('px-6 py-4 whitespace-nowrap text-sm text-gray-900', className)} {...props} />
  );
};
