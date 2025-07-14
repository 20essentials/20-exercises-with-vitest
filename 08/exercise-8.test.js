import { describe, it, expect } from "vitest";
import { maxDistance } from "./exercise-8.js";

describe('maxDistance()', () => {
  it('should be defined as a function', () => {
    expect(maxDistance).toBeTypeOf('function')
  })

  it('should throw an error if the argument is not a string', () => {
    expect(() => maxDistance(4)).toThrow();
  })

  it('should return 2 for the input ">>*<"', () => {
    expect(maxDistance('>>*<')).toBe(2)
  })

  it('should return 2 for the input "<<<>"', () => {
    expect(maxDistance('<<<>')).toBe(2)
  })

  it('should return 5 for the input ">***>"', () => {
    expect(maxDistance('>***>')).toBe(5)
  })

  it('should return 5 for the input "<<<<<"', () => {
    expect(maxDistance('<<<<<')).toBe(5)
  })

  it('should return 10 for the input "**********"', () => {
    expect(maxDistance('**********')).toBe(10)
  })

  it('should return 2 for the input "<<**>>"', () => {
    expect(maxDistance('<<**>>')).toBe(2)
  })
})
