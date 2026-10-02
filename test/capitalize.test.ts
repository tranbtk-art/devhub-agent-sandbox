import { describe, it, expect } from 'vitest';
import { capitalize } from '../src/capitalize';

describe('capitalize', () => {
  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('capitalizes a single lowercase character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('leaves a single uppercase character unchanged', () => {
    expect(capitalize('A')).toBe('A');
  });

  it('capitalizes the first character of a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('leaves already capitalized string unchanged', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('capitalizes first character and leaves rest unchanged', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });

  it('handles strings with numbers', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });

  it('handles strings starting with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });

  it('handles strings with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('handles strings with mixed case', () => {
    expect(capitalize('hElLo WoRlD')).toBe('HElLo WoRlD');
  });
});
