import { useState, useEffect, useCallback } from 'react';
import { Stock, TimeInterval } from '../types/stock';
import { fetchStocks, searchStocks } from '../services/api';

export function useStocks(initialQuery = '') {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [timeInterval, setTimeInterval] = useState<TimeInterval>('daily');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Stock;
    direction: 'ascending' | 'descending';
  }>({
    key: 'symbol',
    direction: 'ascending',
  });

  // Load initial stock data
  useEffect(() => {
    const loadStocks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchStocks();
        setStocks(data);
        setFilteredStocks(data);
      } catch (err) {
        setError('Failed to load stock data. Please try again later.');
        console.error('Error fetching stocks:', err);
      } finally {
        setLoading(false);
      }
    };

    loadStocks();
  }, [timeInterval]);

  // Handle search functionality
  useEffect(() => {
    const handleSearch = async () => {
      if (!searchQuery.trim()) {
        setFilteredStocks(stocks);
        return;
      }

      try {
        const results = await searchStocks(searchQuery);
        setFilteredStocks(results);
      } catch (err) {
        setError('Search failed. Please try again.');
        console.error('Error searching stocks:', err);
      }
    };

    handleSearch();
  }, [searchQuery, stocks]);

  // Sort functionality
  useEffect(() => {
    const sortedStocks = [...filteredStocks].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === undefined || bValue === undefined) return 0;
      
      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else {
        comparison = (aValue as number) - (bValue as number);
      }

      return sortConfig.direction === 'ascending' ? comparison : -comparison;
    });

    setFilteredStocks(sortedStocks);
  }, [sortConfig]);

  // Toggle favorite status
  const toggleFavorite = useCallback((symbol: string) => {
    setStocks(prevStocks => 
      prevStocks.map(stock => 
        stock.symbol === symbol 
          ? { ...stock, favorite: !stock.favorite } 
          : stock
      )
    );
    
    setFilteredStocks(prevStocks => 
      prevStocks.map(stock => 
        stock.symbol === symbol 
          ? { ...stock, favorite: !stock.favorite } 
          : stock
      )
    );
  }, []);

  // Request sort
  const requestSort = useCallback((key: keyof Stock) => {
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return {
          key,
          direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
        };
      }
      return { key, direction: 'ascending' };
    });
  }, []);

  return {
    stocks: filteredStocks,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    timeInterval,
    setTimeInterval,
    sortConfig,
    requestSort,
    toggleFavorite,
  };
}