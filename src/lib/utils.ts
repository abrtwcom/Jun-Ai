import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeStyle(styleObj: Record<string, unknown>): Record<string, unknown> {
  const safeObj: Record<string, unknown> = {};
  Object.entries(styleObj).forEach(([key, value]) => {
    const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    safeObj[camelKey] = value;
  });
  return safeObj;
}
