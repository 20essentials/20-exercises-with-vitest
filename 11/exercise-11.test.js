import { describe, it, expect } from 'vitest';
import { adjustLights } from './exercise-11.js';

describe('adjustLights()', () => {
  it('should be a function', () => {
    expect(adjustLights).toBeTypeOf('function');
  });

  it('should throw an error when called without arguments', () => {
    expect(() => adjustLights()).toThrow();
  });

  it('should throw an error if the argument is not an array of lights', () => {
    expect(() => adjustLights([4, 5, 6])).toThrow();
  });

  it('should return 1 when one light needs to be changed to alternate correctly', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1);
  });

  it('should return 2 when two lights need to be changed to alternate correctly', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2);
  });

  it('should return 0 when the lights already alternate correctly', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0);
  });

  it('should return 1 when one light needs to be changed in a uniform sequence', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1);
  });

  it('should return 1 when one light needs to be changed in a mixed pattern', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(1);
  });
});
