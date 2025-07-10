import { describe, it, expect } from 'vitest';
import { calculateTime } from './exercise-17.js';

describe('calculateTime()', () => {
  it('should be a function', () => {
    expect(calculateTime).toBeTypeOf('function');
  });

  it('should throw an error if the argument is not an array of strings', () => {
    expect(() => calculateTime(4)).toThrow();
    expect(() => calculateTime([4, 5, 8])).toThrow();
  });

  it('should return "-02:20:00" when input is ["00:10:00", "01:00:00", "03:30:00"]', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toEqual(
      '-02:20:00'
    );
  });

  it('should return "00:30:00" when input is ["02:00:00", "05:00:00", "00:30:00"]', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toEqual(
      '00:30:00'
    );
  });

  it('should return "-00:30:00" when input is ["01:00:00", "05:00:00", "00:30:00"]', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toEqual(
      '-00:30:00'
    );
  });

  it('should return "-05:29:00" when input is ["00:45:00", "00:45:00", "00:00:30", "00:00:30"]', () => {
    expect(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    ).toEqual('-05:29:00');
  });

  it('should return "00:00:00" when all durations sum to zero', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toEqual(
      '00:00:00'
    );
  });

  it('should return "05:02:01" when input is ["01:01:01", "09:59:59", "01:01:01"]', () => {
    expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toEqual(
      '05:02:01'
    );
  });

  it('should return "-00:00:01" when input is ["01:01:01", "03:59:59", "01:01:01", "00:57:58"]', () => {
    expect(
      calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    ).toEqual('-00:00:01');
  });
});
