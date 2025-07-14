import { describe, it, expect } from 'vitest';
import { findFirstRepeated } from './exercise-3.js';

describe('findFirstRepeated()', () => {
  it('should return -1 if the parameter is not provided', () => {
    expect(findFirstRepeated(null)).toBe(-1);
  });

  it('should return -1 if the parameter is not an Array', () => {
    expect(findFirstRepeated('hola')).toBe(-1);
  });

  it('should return -1 if there are not numbers repeated', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1);
  });

  it('should return 3. Although 2 and 3 repeating, 3 appears before 2', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
  });

  it('should return 5', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5);
  });

  it('should return 2', () => {
    expect(findFirstRepeated([2, 2])).toBe(2);
  });

  it('should return -1', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1);
  });

  it('should return 1', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toBe(1);
  });

  it('should return -1', () => {
    expect(findFirstRepeated([])).toBe(-1);
  });

  it('should return -1', () => {
    expect(findFirstRepeated([10, 20, 30])).toBe(-1);
  });

  it('should return 2', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toBe(2);
  });

  it('should return 10', () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toBe(10);
  });
});
