import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Stock } from '../../types/stock';

interface SortIndicatorProps {
  active: boolean;
  direction: 'ascending' | 'descending';
}

const SortIndicator: React.FC<SortIndicatorProps> = ({ active, direction }) => {
  if (!active) return null;
  
  return direction === 'ascending' ? (
    <ArrowUp className="h-3 w-3 ml-1 inline" />
  ) : (
    <ArrowDown className="h-3 w-3 ml-1 inline" />
  );
};

interface StockTableHeaderProps {
  onSort: (key: keyof Stock) => void;
  sortConfig: {
    key: keyof Stock;
    direction: 'ascending' | 'descending';
  };
}

const StockTableHeader: React.FC<StockTableHeaderProps> = ({ 
  onSort, 
  sortConfig 
}) => {
  const headers: { key: keyof Stock; label: string }[] = [
    { key: 'symbol', label: 'Symbol' },
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'change', label: 'Change' },
    { key: 'changePercent', label: 'Change %' },
    { key: 'volume', label: 'Volume' },
  ];

  return (
    <thead className="bg-gray-900 text-left">
      <tr>
        <th className="w-10 py-3 pl-4"></th> {/* Favorite column */}
        {headers.map(({ key, label }) => (
          <th 
            key={key} 
            className="py-3 px-4 font-semibold text-gray-400 cursor-pointer hover:text-white transition-colors"
            onClick={() => onSort(key)}
          >
            <div className="flex items-center">
              {label}
              <SortIndicator 
                active={sortConfig.key === key} 
                direction={sortConfig.direction} 
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default StockTableHeader;