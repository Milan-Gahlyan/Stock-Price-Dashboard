import React from 'react';
import { Stock } from '../../types/stock';
import StockTableHeader from './StockTableHeader';
import StockTableRow from './StockTableRow';
import LoadingSpinner from '../ui/LoadingSpinner';
import ErrorMessage from '../ui/ErrorMessage';

interface StockTableProps {
  stocks: Stock[];
  loading: boolean;
  error: string | null;
  sortConfig: {
    key: keyof Stock;
    direction: 'ascending' | 'descending';
  };
  onSort: (key: keyof Stock) => void;
  onToggleFavorite: (symbol: string) => void;
  onRetry?: () => void;
}

const StockTable: React.FC<StockTableProps> = ({
  stocks,
  loading,
  error,
  sortConfig,
  onSort,
  onToggleFavorite,
  onRetry,
}) => {
  if (loading) {
    return (
      <div className="w-full py-16 flex flex-col items-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-gray-400">Loading stock data...</p>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (stocks.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-400">
        <p>No stocks found. Try adjusting your search.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <table className="w-full min-w-[768px] border-collapse">
        <StockTableHeader onSort={onSort} sortConfig={sortConfig} />
        <tbody>
          {stocks.map((stock) => (
            <StockTableRow
              key={stock.symbol}
              stock={stock}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;