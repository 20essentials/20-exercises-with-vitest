import { describe, it, expect } from 'vitest';
import { getIndexsForPalindrome } from './exercise-13.js';

describe('getIndexsForPalindrome()', () => {
  it('should be a function', () => {
    expect(getIndexsForPalindrome).toBeTypeOf('function');
  });

  it('should thrown an error if the parameter word is not a string', () => {
    expect(() => getIndexsForPalindrome()).toThrow();
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([]);
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([]);
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('rotavator')).toEqual([]);
  });
  
  it('should pass this test', () => {
    expect(getIndexsForPalindrome('saippuakivikauppias')).toEqual([]);
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8]);
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('abac')).toBeNull();
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('caababa')).toBeNull();
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1]);
  });

  it('should pass this test', () => {
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3]);
  });
});
