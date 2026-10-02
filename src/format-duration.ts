/**
 * Formats a duration in milliseconds to a human-readable string.
 * Uses the largest unit (h, m, s, ms) that divides evenly.
 * 
 * @param ms - Duration in milliseconds
 * @returns Formatted duration string (e.g., "90s", "5m", "2h", "1500ms")
 * 
 * @example
 * formatDuration(90000) // "90s"
 * formatDuration(300000) // "5m"
 * formatDuration(7200000) // "2h"
 * formatDuration(1500) // "1500ms"
 */
export function formatDuration(ms: number): string {
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

  // Fallback (should never reach here since ms % 1 === 0 always)
  return `${ms}ms`;
}
