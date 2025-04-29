import { Stock, StockAPIResponse } from '../types/stock';

// Mock data for development purposes
const MOCK_STOCKS: Stock[] = [
  { 
    symbol: 'AAPL', 
    name: 'Apple Inc.', 
    price: 187.72, 
    change: 1.32, 
    changePercent: 0.71, 
    volume: 55876543,
    marketCap: 2950000000000,
  },
  { 
    symbol: 'MSFT', 
    name: 'Microsoft Corporation', 
    price: 420.55, 
    change: 2.45, 
    changePercent: 0.59, 
    volume: 23456789,
    marketCap: 3120000000000,
  },
  { 
    symbol: 'GOOGL', 
    name: 'Alphabet Inc.', 
    price: 142.35, 
    change: -1.28, 
    changePercent: -0.89, 
    volume: 18345678,
    marketCap: 1780000000000,
  },
  { 
    symbol: 'AMZN', 
    name: 'Amazon.com Inc.', 
    price: 178.25, 
    change: 0.87, 
    changePercent: 0.49, 
    volume: 32456789,
    marketCap: 1850000000000,
  },
  { 
    symbol: 'META', 
    name: 'Meta Platforms Inc.', 
    price: 476.70, 
    change: -3.45, 
    changePercent: -0.72, 
    volume: 25678654,
    marketCap: 1220000000000,
  },
  { 
    symbol: 'TSLA', 
    name: 'Tesla Inc.', 
    price: 238.83, 
    change: 5.27, 
    changePercent: 2.26, 
    volume: 98763456,
    marketCap: 760000000000,
  },
  { 
    symbol: 'NVDA', 
    name: 'NVIDIA Corporation', 
    price: 116.52, 
    change: 0.32, 
    changePercent: 0.28, 
    volume: 67890123,
    marketCap: 2870000000000,
  },
  { 
    symbol: 'JPM', 
    name: 'JPMorgan Chase & Co.', 
    price: 195.80, 
    change: -1.15, 
    changePercent: -0.58, 
    volume: 15678654,
    marketCap: 560000000000,
  },
  { 
    symbol: 'V', 
    name: 'Visa Inc.', 
    price: 275.96, 
    change: 2.08, 
    changePercent: 0.76, 
    volume: 12345678,
    marketCap: 570000000000,
  },
  { 
    symbol: 'WMT', 
    name: 'Walmart Inc.', 
    price: 69.15, 
    change: -0.23, 
    changePercent: -0.33, 
    volume: 21345678,
    marketCap: 550000000000,
  },
];

/**
 * Fetch all available stocks
 */
export const fetchStocks = async (): Promise<Stock[]> => {
  // Simulate network request delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  return MOCK_STOCKS;
};

/**
 * Fetch a specific stock by symbol
 */
export const fetchStockBySymbol = async (symbol: string): Promise<Stock | undefined> => {
  // Simulate network request delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return MOCK_STOCKS.find(stock => stock.symbol === symbol);
};

/**
 * Search stocks by symbol or name
 */
export const searchStocks = async (query: string): Promise<Stock[]> => {
  if (!query) return MOCK_STOCKS;
  
  // Simulate network request delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const normalizedQuery = query.toLowerCase();
  return MOCK_STOCKS.filter(
    stock => 
      stock.symbol.toLowerCase().includes(normalizedQuery) || 
      stock.name.toLowerCase().includes(normalizedQuery)
  );
};
