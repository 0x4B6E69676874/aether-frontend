import type { ApiResponse, AetherData } from "@/types";
import { mockAetherData } from "./mockData";

// Base API URL - should be moved to environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";
const PRODUCTION = false;

async function fetchApi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result: ApiResponse<T> = await response.json();

    if (!result.success) {
      throw new Error(result.error || "API request failed");
    }

    return result.data;
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

export const api = {
  getAetherData: async (): Promise<AetherData> => {
    if (!PRODUCTION) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockAetherData;
    }
    return fetchApi<AetherData>("/aether");
  },
};
