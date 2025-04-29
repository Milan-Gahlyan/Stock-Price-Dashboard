import React from 'react';
import { useStocks } from '../../hooks/useStocks';
import SearchBar from '../ui/SearchBar';
import StockTable from './StockTable';
import TimeIntervalSelector from './TimeIntervalSelector';

const StockDashboard: React.FC = () => {
  const {
    stocks,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    timeInterval,
    setTimeInterval,
    sortConfig,
    requestSort,
    toggleFavorite,
  } = useStocks();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Market Overview</h2>
        <p className="text-gray-400">
          Track and monitor real-time stock performance
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
        <SearchBar
          onSearch={handleSearch}
          initialValue={searchQuery}
          className="w-full md:w-64"
        />
        <TimeIntervalSelector
          selectedInterval={timeInterval}
          onChange={setTimeInterval}
        />
      </div>

      <StockTable
        stocks={stocks}
        loading={loading}
        error={error}
        sortConfig={sortConfig}
        onSort={requestSort}
        onToggleFavorite={toggleFavorite}
      />

      <div className="mt-6 text-sm text-gray-500">
        <p>Last updated: {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default StockDashboard;