import { describe, it, expect } from 'vitest';
import { formatDuration } from '../src/format-duration';

describe('formatDuration', () => {
  it('formats hours when evenly divisible', () => {
    expect(formatDuration(7200000)).toBe('2h');
    expect(formatDuration(3600000)).toBe('1h');
    expect(formatDuration(10800000)).toBe('3h');
  });

  it('formats minutes when evenly divisible', () => {
    expect(formatDuration(300000)).toBe('5m');
    expect(formatDuration(60000)).toBe('1m');
    expect(formatDuration(120000)).toBe('2m');
  });

  it('formats seconds when evenly divisible', () => {
    expect(formatDuration(90000)).toBe('90s');
    expect(formatDuration(1000)).toBe('1s');
    expect(formatDuration(45000)).toBe('45s');
  });

  it('formats milliseconds when not evenly divisible by seconds', () => {
    expect(formatDuration(1500)).toBe('1500ms');
    expect(formatDuration(1)).toBe('1ms');
    expect(formatDuration(999)).toBe('999ms');
    expect(formatDuration(1001)).toBe('1001ms');
  });

  it('handles zero', () => {
    expect(formatDuration(0)).toBe('0h');
  });

  it('uses largest unit that divides evenly', () => {
    // 90000ms = 90s (not 1m30s, because 90000 % 60000 !== 0)
    expect(formatDuration(90000)).toBe('90s');
    // 3600000ms = 1h (evenly divisible)
    expect(formatDuration(3600000)).toBe('1h');
    // 3660000ms = 61m (not 1h1m, because 3660000 % 3600000 !== 0, but 3660000 % 60000 === 0)
    expect(formatDuration(3660000)).toBe('61m');
  });
});
