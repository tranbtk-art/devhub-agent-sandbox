/**
 * Formats a duration in milliseconds to a human-readable string.
 * Uses the largest unit (h, m, s, ms) that divides evenly.
 * 
 * @param ms - Duration in milliseconds (must be non-negative)
 * @returns Formatted duration string (e.g., "90s", "5m", "2h", "1500ms")
 * 
 * @example
 * formatDuration(90000) // "90s"
 * formatDuration(300000) // "5m"
 * formatDuration(7200000) // "2h"
 * formatDuration(1500) // "1500ms"
 * formatDuration(0) // "0ms"
 */
export function formatDuration(ms: number): string {
  if (ms < 0) {
    throw new Error('Duration must be non-negative');
  }

  if (ms === 0) {
    return '0ms';
  }

  const units = [
    { suffix: 'h', divisor: 3600000 },
    { suffix: 'm', divisor: 60000 },
    { suffix: 's', divisor: 1000 },
    { suffix: 'ms', divisor: 1 },
  ];

  for (const { suffix, divisor } of units) {
    if (ms % divisor === 0) {
      return `${ms / divisor}${suffix}`;
    }
  }

  // This line is unreachable since ms % 1 === 0 is always true
  // but TypeScript requires a return statement
  return `${ms}ms`;
}
