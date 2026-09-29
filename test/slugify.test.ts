import { describe, expect, it } from 'vitest';
import { slugify } from '../src/slugify';

describe('slugify', () => {
  it('lowercases and replaces spaces', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });
  it('strips accents and punctuation', () => {
    expect(slugify('Crème Brûlée!')).toBe('creme-brulee');
  });
});
