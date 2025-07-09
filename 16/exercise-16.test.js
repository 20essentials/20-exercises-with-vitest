import { describe, it, expect } from 'vitest';
import { checkIsValidCopy } from './exercise-16.js';

describe('checkIsValidCopy()', () => {
  it('should be a function', () => {
    expect(checkIsValidCopy).toBeTypeOf('function');
  });

  it('should throw an error if the first parameter is not a string', () => {
    expect(() => checkIsValidCopy(4, 'a')).toThrow();
  });

  it('should throw an error if the second parameter is not a string', () => {
    expect(() => checkIsValidCopy('a', 4)).toThrow();
  });

  it('should return false when the copy contains invalid characters or mismatched casing', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false);
  });

  it('should return false when the copy contains extra leading and trailing whitespace', () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toBe(false);
  });

  it('should return false when the copy has multiple mismatches including casing and wrong characters', () => {
    expect(
      checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')
    ).toBe(false);
  });

  it('should return false when the copy contains special characters not allowed in the original text', () => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toBe(false);
  });

  it('should return false when the copy has altered characters and incorrect format', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false);
  });

  it('should return true when the copy replaces all characters with valid substitutes', () => {
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBe(true);
  });

  it('should return true when the copy uses only spaces to represent original characters', () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toBe(true);
  });

  it('should return true when the copy includes valid substitutions and preserves correct spacing', () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBe(true);
  });

  it('should return false when the copy omits characters from the original string', () => {
    expect(
      checkIsValidCopy(
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños',
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño'
      )
    ).toBe(false);
  });

  it('should return false when the copy alters the case of some letters incorrectly', () => {
    expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toBe(false);
  });

  it('should return true when the copy uses valid symbols in place of each original character', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')
    ).toBe(true);
  });

  it('should return true when the copy uses a valid combination of symbols and spaces', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true);
  });

  it('should return true when both strings match valid pattern rules with symbols', () => {
    expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBe(true);
  });

  it('should return true when the entire copy uses valid special characters in place of the original', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true);
  });

  it('should return false when the original contains symbols and the copy attempts to match them literally', () => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBe(false);
  });
});
