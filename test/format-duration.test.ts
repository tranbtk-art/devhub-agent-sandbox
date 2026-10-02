import { describe, it, expect } from 'vitest';
import { formatDuration } from '../src/format-duration';

describe('formatDuration', () => {
  it('formats hours when evenly divisible', () => {
    expect(formatDuration(3600000)).toBe('1h');
    expect(formatDuration(7200000)).toBe('2h');
    expect(formatDuration(10800000)).toBe('3h');
  });

  it('formats minutes when evenly divisible', () => {
    expect(formatDuration(60000)).toBe('1m');
    expect(formatDuration(300000)).toBe('5m');
    expect(formatDuration(1800000)).toBe('30m');
  });

  it('formats seconds when evenly divisible', () => {
    expect(formatDuration(1000)).toBe('1s');
    expect(formatDuration(90000)).toBe('90s');
    expect(formatDuration(45000)).toBe('45s');
  });

  it('formats milliseconds when not evenly divisible by larger units', () => {
    expect(formatDuration(1)).toBe('1ms');
    expect(formatDuration(500)).toBe('500ms');
    expect(formatDuration(1500)).toBe('1500ms');
    expect(formatDuration(999)).toBe('999ms');
  });

  it('handles zero', () => {
    expect(formatDuration(0)).toBe('0h');
  });

  it('uses the largest unit that divides evenly', () => {
    // 120000ms = 2m = 120s, should use minutes
    expect(formatDuration(120000)).toBe('2m');
    
    // 3661000ms doesn't divide evenly by h, m, or s, so use ms
    expect(formatDuration(3661000)).toBe('3661000ms');
    
    // 3600000ms = 1h = 60m = 3600s, should use hours
    expect(formatDuration(3600000)).toBe('1h');
  });
});
