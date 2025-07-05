import { describe, it, expect } from 'vitest';
import { organizeGifts } from './exercise-10.js';

describe('organizeGifts()', () => {
  it('should be a function', () => {
    expect(organizeGifts).toBeTypeOf('function');
  });

  it('should throw an error if the parameter is not a string', () => {
    expect(() => organizeGifts()).toThrow();
  });

  it('should organize 76 "a" gifts into 1 pallet, 2 boxes and 1 bag', () => {
    expect(organizeGifts('76a')).toBe('[a]{a}{a}(aaaaaa)');
  });

  it('should organize 11 "b" gifts into 1 box and 1 bag', () => {
    expect(organizeGifts('11b')).toBe('{b}(b)');
  });

  it('should organize 76 "a" and 11 "b" gifts correctly in order', () => {
    expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)');
  });

  it('should organize 20 "a" gifts into 2 boxes', () => {
    expect(organizeGifts('20a')).toBe('{a}{a}');
  });

  it('should organize multiple gift types correctly: 70 "b", 120 "a", and 4 "c"', () => {
    expect(organizeGifts('70b120a4c')).toBe('[b]{b}{b}[a][a]{a}{a}(cccc)');
  });

  it('should place 9 "c" gifts in a bag', () => {
    expect(organizeGifts('9c')).toBe('(ccccccccc)');
  });

  it('should organize 19 "d" and 51 "e" gifts correctly', () => {
    expect(organizeGifts('19d51e')).toBe('{d}(ddddddddd)[e](e)');
  });
});
