import { describe, it, expect } from 'vitest';
import { autonomousDrive } from './exercise-19.js';

describe('autonomousDrive()', () => {
  it('should be a function', () => {
    expect(autonomousDrive).toBeTypeOf('function');
  });

  it('should return the same store when robot moves into free cells and returns to start', () => {
    expect(autonomousDrive(['..!....'], ['R', 'L'])).toEqual(['..!....']);
  });

  it('should not move the robot if it would hit obstacles on all moves', () => {
    expect(autonomousDrive(['!..', '***'], ['R', 'L'])).toEqual(['!..', '***']);
  });

  it('should move the robot down and left avoiding obstacle', () => {
    expect(autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])).toEqual([
      '.......',
      '..!...*'
    ]);
  });

  it('should move the robot two steps right and one down, skipping final down due to bounds', () => {
    expect(autonomousDrive(['*..!..*', '*.....*'], ['R', 'R', 'D', 'D'])).toEqual(
      ['*.....*', '*....!*']
    );
  });

  it('should move right through empty spaces after failing to move down or up due to obstacles', () => {
    expect(
      autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    ).toEqual(['***', '..!', '***']);
  });

  it('should stay in place if all directions are blocked by obstacles', () => {
    expect(autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])).toEqual([
      '***',
      '*!*',
      '***'
    ]);
  });

  it('should correctly navigate across multiple rows and avoid obstacles', () => {
    expect(
      autonomousDrive(
        ['.**.*.*.', '.***....', '..!.....'],
        ['D', 'U', 'R', 'R', 'R']
      )
    ).toEqual(['.**.*.*.', '.***....', '.....!..']);
  });
});
