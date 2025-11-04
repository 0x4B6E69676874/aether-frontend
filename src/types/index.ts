// Transaction types
export interface Transaction {
  id: number;
  amount: number;
  timestamp: number;
  hash: string;
}

// Token stats data
export interface TokensBurntData {
  transactions: Transaction[];
  transactionCount: number;
  totalBurnt: number;
}

// Liquidity data
export interface LiquidityAddedData {
  transactions: Transaction[];
  transactionCount: number;
  totalLiquidity: number;
}

// Uniswap position data
export interface UniswapPositionData {
  protocolLiquidity: number;
  unclaimedFees: number;
  volume24h: number;
}

// Price chart data
export interface PriceDataPoint {
  time: string;
  price: number;
}

export interface PriceChartData {
  data: PriceDataPoint[];
  currentPrice: number;
  changePercent: number;
}

// Combined dashboard data from single endpoint
export interface AetherData {
  tokensBurnt: TokensBurntData;
  liquidityAdded: LiquidityAddedData;
  uniswapPosition: UniswapPositionData;
  priceChart: PriceChartData;
}

// API Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
