/**
 * Shortens text to at most max characters (including the ellipsis) without cutting
 * in the middle of a word when a space exists in the last 30% of the allowed length.
 * 
 * @param text - The text to clip
 * @param max - Maximum length including ellipsis
 * @param ellipsis - The ellipsis string to append (default: '…')
 * @returns The clipped text or original text if it fits
 * @throws {RangeError} If max is smaller than the ellipsis length
 */
export function clip(text: string, max: number, ellipsis = '…'): string {
  if (max < ellipsis.length) {
    throw new RangeError(`max (${max}) must be at least the length of ellipsis (${ellipsis.length})`);
  }

  if (text.length <= max) {
    return text;
  }

  const cutPoint = max - ellipsis.length;
  const searchStart = Math.floor(cutPoint * 0.7);
  
  // Look for a space in the last 30% of the allowed length
  const lastSpaceIndex = text.lastIndexOf(' ', cutPoint);
  
  if (lastSpaceIndex >= searchStart) {
    return text.slice(0, lastSpaceIndex) + ellipsis;
  }
  
  // No suitable space found, hard cut
  return text.slice(0, cutPoint) + ellipsis;
}
