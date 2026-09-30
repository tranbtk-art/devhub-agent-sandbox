import { describe, it, expect } from 'vitest';
import { clip } from '../src/clip.js';

describe('clip', () => {
  it('returns text unchanged if it fits within max', () => {
    expect(clip('hello', 10)).toBe('hello');
    expect(clip('hello world', 11)).toBe('hello world');
    expect(clip('test', 4)).toBe('test');
  });

  it('clips at word boundary when space exists in last 30%', () => {
    expect(clip('hello world test', 12)).toBe('hello world…');
    expect(clip('the quick brown fox', 15)).toBe('the quick…');
    expect(clip('one two three four', 14)).toBe('one two three…');
  });

  it('clips hard when no space in last 30%', () => {
    expect(clip('verylongword', 8)).toBe('verylon…');
    expect(clip('hello worldtest', 12)).toBe('hello world…');
    expect(clip('abcdefghijklmnop', 10)).toBe('abcdefghi…');
  });

  it('uses custom ellipsis', () => {
    expect(clip('hello world test', 12, '...')).toBe('hello wor...');
    expect(clip('the quick brown', 10, '--')).toBe('the quic--');
    expect(clip('test string', 8, '')).toBe('test str');
  });

  it('throws RangeError if max is smaller than ellipsis length', () => {
    expect(() => clip('hello', 0)).toThrow(RangeError);
    expect(() => clip('hello', 0, '...')).toThrow(RangeError);
    expect(() => clip('test', 2, '...')).toThrow(RangeError);
  });

  it('handles edge cases', () => {
    expect(clip('', 10)).toBe('');
    expect(clip('a', 1)).toBe('a');
    expect(clip('ab', 2, '…')).toBe('ab');
  });
});
