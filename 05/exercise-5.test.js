import { describe, it, expect } from 'vitest';
import { findNaughtyStep } from './exercise-5.js';

describe('findNaughtyStep()', () => {
  it('should be a function', () => {
    expect(findNaughtyStep).toBeTypeOf('function');
  });

  it('should throw an error if the first parameter is not a string', () => {
    expect(() => findNaughtyStep(4, 'hello')).toThrow(
      'The first parameter must be a string'
    );
  });

  it('should throw an error if the second parameter is not a string', () => {
    expect(() => findNaughtyStep('bye', 4)).toThrow(
      'The second parameter must be a string'
    );
  });

  it('should return "e" when added at the end: "abcd" vs "abcde"', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e');
  });

  it('should return "e" when removed from the end: "abcde" vs "abcd"', () => {
    expect(findNaughtyStep('abcde', 'abcd')).toBe('e');
  });

  it('should return "f" when removed from the middle: "stepfor" vs "stepor"', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f');
  });

  it('should return an empty string when both strings are equal: "abcde"', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toBe('');
  });

  it('should return an empty string when both strings are equal: "iiiii"', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toBe('');
  });

  it('should return "o" when added in the middle: "xxxx" vs "xxoxx"', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o');
  });

  it('should return an empty string when both strings are empty', () => {
    expect(findNaughtyStep('', '')).toBe('');
  });

  it('should return an empty string when both strings are equal: "aaa"', () => {
    expect(findNaughtyStep('aaa', 'aaa')).toBe('');
  });

  it('should return "i" when removed from the end: "iiiii" vs "iiii"', () => {
    expect(findNaughtyStep('iiiii', 'iiii')).toBe('i');
  });

  it('should return "a" when added at the end: "aaaa" vs "aaaaa"', () => {
    expect(findNaughtyStep('aaaa', 'aaaaa')).toBe('a');
  });
});
