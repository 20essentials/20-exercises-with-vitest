import { describe, it, expect } from 'vitest';
import { canExit } from './exercise-2.js';

describe('canExit()', () => {
  it('should return false when no parameter is provided', () => {
    expect(canExit(null)).toEqual(false);
  });

  it('should throw an error if the parameter is not an array', () => {
    expect(() => canExit(4)).toThrow('The parameter provided must be an Array');
  });

  it('should throw an error if the parameter is not a multidimensional array', () => {
    expect(() => canExit([])).toThrow(
      'The parameter provided must be an Array Multidimensional'
    );
  });

  it('should throw an error if the array contains non-string elements', () => {
    expect(() => canExit([[[4, 3, 2, '']]])).toThrow(
      'The parameter provided must be an Array Multidimensional of Strings'
    );
  });

  it('should return true for a maze where exit is reachable', () => {
    expect(
      canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toBe(true);
  });

  it('should return false for a maze where the exit is blocked (test 1)', () => {
    expect(
      canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toBe(false);
  });

  it('should return false for a maze where the exit is blocked (test 2)', () => {
    expect(
      canExit([
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E']
      ])
    ).toBe(false);
  });

  it('should return true when the exit is in the same row as start with no obstacles', () => {
    expect(canExit([['E', ' ', ' ', ' ', 'S']])).toBe(true);
  });

  it('should return false when the exit is blocked by a wall in the same row', () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S']])).toBe(false);
  });

  it('should return true when exit is reachable in a two-row maze', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' ']
      ])
    ).toBe(true);
  });

  it('should return true when exit is reachable despite a full wall in a lower row', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toBe(true);
  });

  it('should return false when the path is blocked by walls preventing exit', () => {
    expect(
      canExit([
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', 'W', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toBe(false);
  });

  it('should return true when the start is adjacent to the exit without obstacles', () => {
    expect(
      canExit([
        ['E', 'S', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W']
      ])
    ).toBe(true);
  });
});
