export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap?: number;
  favorite?: boolean;
}

export interface StockAPIResponse {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export type TimeInterval = 'daily' | 'weekly' | 'monthly';