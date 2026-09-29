import { describe, expect, it } from 'vitest';
import { parseDuration } from '../src/parse-duration';

describe('parseDuration', () => {
  it('parses seconds, minutes and hours', () => {
    expect(parseDuration('90s')).toBe(90_000);
    expect(parseDuration('5m')).toBe(300_000);
    expect(parseDuration('2h')).toBe(7_200_000);
  });
  it('returns null for invalid input', () => {
    expect(parseDuration('soon')).toBeNull();
  });
});
