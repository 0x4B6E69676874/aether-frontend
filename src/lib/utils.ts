import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateHash(hash: string) {
  return `${hash.slice(0, 5)}...${hash.slice(-3)}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(3)}B`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(3)}M`;
  }
  if (num >= 100000) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toLocaleString('en-US');
}

export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString('en-US');
}

export function formatTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diffInSeconds = Math.floor((now - timestamp) / 1000);

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);
  const months = Math.floor(diffInSeconds / 2592000);
  const years = Math.floor(diffInSeconds / 31536000);

  if (years > 0) {
    return `${years}Y ago`;
  } else if (months > 0) {
    return `${months}M ago`;
  } else if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return 'just now';
  }
}
