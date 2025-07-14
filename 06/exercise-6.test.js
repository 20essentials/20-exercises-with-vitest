import { describe, it, expect } from 'vitest';
import { decode } from './exercise-6.js';

describe('decode()', () => {
  it('should be a function', () => {
    expect(decode).toBeTypeOf('function');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => decode()).toThrow();
  });

  it('should decode a single pair of parentheses with reversed content', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!');
  });

  it('should decode a word wrapped in parentheses within a sentence', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo');
  });

  it('should correctly decode nested parentheses', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus');
  });

  it('should decode multiple nested pairs of parentheses in correct order', () => {
    expect(decode('((nta)(sa))')).toBe('santa');
  });
});
