import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeStamp(mongoDate: Date | string, locales = 'en-US') {
  // Convert to the client's local timezone
  const localDate = new Intl.DateTimeFormat(locales, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }).format(new Date(mongoDate));

  // Parse the local date back to a Date object
  const now = new Date();
  const localTime = new Date(localDate);
  const diffInSeconds = Math.floor((now.getTime() - localTime.getTime()) / 1000);

  const units = [
    { name: 'year', value: 60 * 60 * 24 * 365 },
    { name: 'month', value: 60 * 60 * 24 * 30 },
    { name: 'week', value: 60 * 60 * 24 * 7 },
    { name: 'day', value: 60 * 60 * 24 },
    { name: 'hour', value: 60 * 60 },
    { name: 'minute', value: 60 },
    { name: 'second', value: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffInSeconds / unit.value);
    if (value >= 1) {
      return new Intl.RelativeTimeFormat(locales, { numeric: 'auto' }).format(-value, unit.name as Intl.RelativeTimeFormatUnit);
    }
  }

  return 'just now';
}



export const formatNumber = (number: number): string => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
}