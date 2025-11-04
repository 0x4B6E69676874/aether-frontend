import type { AetherData } from "@/types";

const now = Date.now();

export const mockAetherData: AetherData = {
  tokensBurnt: {
    transactions: [
      { id: 1, amount: 12450, timestamp: now - 2 * 3600 * 1000, hash: "0x7a3f8b9c2d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a" },
      { id: 2, amount: 8230, timestamp: now - 5 * 3600 * 1000, hash: "0x4b8e1f6a9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f" },
      { id: 3, amount: 15670, timestamp: now - 12 * 3600 * 1000, hash: "0x9d2c8e4b5f6a7c8d9e0f1a2b3c4d5e6f7a8b9c0d" },
      { id: 4, amount: 9120, timestamp: now - 1 * 86400 * 1000, hash: "0x3f6a7c9e1b2d4e5f6a7b8c9d0e1f2a3b4c5d6e7f" },
      { id: 5, amount: 11340, timestamp: now - 2 * 86400 * 1000, hash: "0x8c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d" },
      { id: 6, amount: 7890, timestamp: now - 3 * 86400 * 1000, hash: "0x2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a" },
      { id: 7, amount: 13560, timestamp: now - 4 * 86400 * 1000, hash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b" },
      { id: 8, amount: 10230, timestamp: now - 5 * 86400 * 1000, hash: "0x9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f" },
      { id: 9, amount: 13560, timestamp: now - 20 * 86400 * 1000, hash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b" },
      { id: 10, amount: 10230, timestamp: now - 54 * 86400 * 1000, hash: "0x9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f" },
    ],
    transactionCount: 1123,
    totalBurnt: 1203456,
  },
  liquidityAdded: {
    transactions: [
      { id: 1, amount: 2340000, timestamp: now - 3 * 3600 * 1000, hash: "0x5e7b4d8f9a2c3e4f5b6d7e8f9a0b1c2d3e4f5a6b" },
      { id: 2, amount: 1800000090, timestamp: now - 8 * 3600 * 1000, hash: "0x2c9a6e3b4f5d7e8a9b0c1d2e3f4a5b6c7d8e9f0a" },
      { id: 3, amount: 3120, timestamp: now - 15 * 3600 * 1000, hash: "0x8f4d9a2c5e6b7f8a9c0d1e2f3a4b5c6d7e8f9a0b" },
      { id: 4, amount: 1450, timestamp: now - 2 * 86400 * 1000, hash: "0x6b3e5f7d8a9c0e1f2a3b4c5d6e7f8a9b0c1d2e3f" },
      { id: 5, amount: 2780, timestamp: now - 3 * 86400 * 1000, hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b" },
      { id: 6, amount: 1670, timestamp: now - 4 * 86400 * 1000, hash: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e" },
      { id: 7, amount: 3450, timestamp: now - 5 * 86400 * 1000, hash: "0x7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f" },
      { id: 8, amount: 2120, timestamp: now - 6 * 86400 * 1000, hash: "0x0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c" },
      { id: 9, amount: 13560, timestamp: now - 20 * 86400 * 1000, hash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b" },
      { id: 10, amount: 10230, timestamp: now - 26 * 86400 * 1000, hash: "0x9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f" },
    ],
    transactionCount: 101111,
    totalLiquidity: 3456789,
  },
  uniswapPosition: {
    protocolLiquidity: 18450,
    unclaimedFees: 37.35,
    volume24h: 12450,
  },
  priceChart: {
    data: [
      { time: "Jan 1", price: 0.00038 },
      { time: "Jan 2", price: 0.00036 },
      { time: "Jan 3", price: 0.00039 },
      { time: "Jan 4", price: 0.00041 },
      { time: "Jan 5", price: 0.00040 },
      { time: "Jan 6", price: 0.00042 },
      { time: "Jan 7", price: 0.00042 },
    ],
    currentPrice: 0.00042,
    changePercent: -12.5,
  },
};
