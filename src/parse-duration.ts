/** Parse strings like "90s", "5m", "2h" into milliseconds. Returns null when invalid. */
export function parseDuration(input: string): number | null {
  const m = /^(\d+)(ms|s|m|h)$/.exec(input.trim());
  if (!m) return null;
  const n = Number(m[1]);
  const unit = m[2];
  const factor = unit === 'ms' ? 1 : unit === 's' ? 1000 : unit === 'm' ? 60_000 : 3_600_000;
  return n * factor;
}
