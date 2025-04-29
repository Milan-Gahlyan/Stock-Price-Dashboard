import React from 'react';
import { Star } from 'lucide-react';
import { Stock } from '../../types/stock';
import { formatCurrency, formatPercentage, formatLargeNumber, getPriceChangeClass } from '../../utils/formatters';

interface StockTableRowProps {
  stock: Stock;
  onToggleFavorite: (symbol: string) => void;
}

const StockTableRow: React.FC<StockTableRowProps> = ({ stock, onToggleFavorite }) => {
  const { symbol, name, price, change, changePercent, volume, favorite = false } = stock;
  
  const priceChangeClass = getPriceChangeClass(change);
  
  return (
    <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
      <td className="py-4 pl-4">
        <button 
          onClick={() => onToggleFavorite(symbol)}
          className="text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <Star 
            className={`h-5 w-5 ${favorite ? 'text-yellow-400 fill-yellow-400' : ''}`} 
          />
        </button>
      </td>
      <td className="py-4 px-4 font-mono font-medium text-white">{symbol}</td>
      <td className="py-4 px-4 text-gray-300">{name}</td>
      <td className="py-4 px-4 font-mono font-medium text-white">{formatCurrency(price)}</td>
      <td className={`py-4 px-4 font-mono font-medium ${priceChangeClass}`}>
        {formatCurrency(change)}
      </td>
      <td className={`py-4 px-4 font-mono font-medium ${priceChangeClass}`}>
        {formatPercentage(changePercent)}
      </td>
      <td className="py-4 px-4 font-mono text-gray-400">{formatLargeNumber(volume)}</td>
    </tr>
  );
};

export default StockTableRow;