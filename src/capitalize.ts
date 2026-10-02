/**
 * Capitalize the first character of a string.
 * @param s - The input string
 * @returns The string with its first character upper-cased and the rest unchanged
 */
export function capitalize(s: string): string {
  if (s.length === 0) {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}
