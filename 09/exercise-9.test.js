import { describe, it, expect } from 'vitest';
import { drawGift } from './exercise-9.js';

describe('drawGift()', () => {
  it('should be defined as a function', () => {
    expect(drawGift).toBeTypeOf('function');
  });

  it('should throw an error if the first argument is not a number', () => {
    expect(() => drawGift('8', '+')).toThrow();
  });

  it('should throw an error if the second argument is not a string', () => {
    expect(() => drawGift(8, 4)).toThrow();
  });

  it('should correctly draw a gift of size 5 using "*" as the fill character', () => {
    expect(drawGift(5, '*')).toEqual([
      '    #####',
      '   #***##',
      '  #***#*#',
      ' #***#**#',
      '#####***#',
      '#***#**#',
      '#***#*#',
      '#***##',
      '#####',
      ''
    ].join('\n'));
  });

  it('should correctly draw a gift of size 4 using "+" as the fill character', () => {
    expect(drawGift(4, '+')).toEqual([
      '   ####',
      '  #++##',
      ' #++#+#',
      '####++#',
      '#++#+#',
      '#++##',
      '####',
      ''
    ].join('\n'));
  });

  it('should produce the same output for repeated calls with the same inputs', () => {
    expect(drawGift(4, '+')).toEqual([
      '   ####',
      '  #++##',
      ' #++#+#',
      '####++#',
      '#++#+#',
      '#++##',
      '####',
      ''
    ].join('\n'));
  });

  it('should draw a gift of size 1 using "^" as the fill character', () => {
    expect(drawGift(1, '^')).toEqual('#\n');
  });
});
