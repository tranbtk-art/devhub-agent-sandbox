/** Naive English pluralization used for UI counters. (Intentionally untested — a good first agent task.) */
export function pluralize(count: number, singular: string, plural?: string): string {
  const word = count === 1 ? singular : plural ?? `${singular}s`;
  return `${count} ${word}`;
}
