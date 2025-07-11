import { describe, it, expect } from 'vitest';
import { maxGifts } from './exercise-18.js';

describe('maxGifts()', () => {
  it('should be a function', () => {
    expect(maxGifts).toBeTypeOf('function');
  });

  it('should throw an error if the argument is not an array of numbers', () => {
    expect(() => maxGifts(4)).toThrow();
    expect(() => maxGifts(['4'])).toThrow();
  });

  it('should return 4 for [1, 2, 3, 1] (choose 1 + 3, skipping adjacent)', () => {
    expect(maxGifts([1, 2, 3, 1])).toBe(4);
  });

  it('should return 12 for [2, 7, 9, 3, 1] (choose 2 + 9 + 1)', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toBe(12);
  });

  it('should return 1 for [0, 0, 0, 0, 1] (only one non-zero value)', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toBe(1);
  });

  it('should return 100 for [100] (only one house)', () => {
    expect(maxGifts([100])).toBe(100);
  });

  it('should return 99 for [99] (only one house)', () => {
    expect(maxGifts([99])).toBe(99);
  });

  it('should return 2 for [1, 1, 1, 1] (choose first and third or second and fourth)', () => {
    expect(maxGifts([1, 1, 1, 1])).toBe(2);
  });

  it('should return 2 for [1, 1, 1] (choose first and third)', () => {
    expect(maxGifts([1, 1, 1])).toBe(2);
  });

  it('should return 8 for [3, 4, 5] (choose 3 and 5)', () => {
    expect(maxGifts([3, 4, 5])).toBe(8);
  });
});
