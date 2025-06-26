import { executeCommands, normalizeNumber0to255 } from './exercise-1.js';
import { describe, it, expect } from 'vitest';

describe('executeCommands()', () => {
  it('should return an array of 8 elements with zero if no parameters are provided', () => {
    expect(executeCommands()).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('should throw an error if the parameter is not an array', () => {
    expect(() => executeCommands('hola')).toThrow(
      'The parameter must be an Array of Strings'
    );
    expect(() => executeCommands(4)).toThrow(
      'The parameter must be an Array of Strings'
    );
  });

  it('should throw an error if the parameter is an array but contains a non-string element', () => {
    expect(() => executeCommands(['hola', 4])).toThrow();
  });

  it(`MOV n,Vxx: assigns the numeric constant n to register Vxx (overwrites if it already has a value)`, () => {
    expect(executeCommands(['MOV 5,V00'])).toEqual([5, 0, 0, 0, 0, 0, 0, 0]);
  });

  it(`MOV Vxx,Vyy: copies the value from register Vxx to register Vyy`, () => {
    expect(executeCommands(['MOV 1,V00', 'MOV 2,V01', 'MOV V00,V01'])).toEqual([
      1, 1, 0, 0, 0, 0, 0, 0
    ]);
  });

  it(`ADD Vxx,Vyy: calculates (Vxx + Vyy) and stores the result in Vxx`, () => {
    expect(executeCommands(['MOV 1,V00', 'MOV 2,V01', 'ADD V00,V01'])).toEqual([
      3, 2, 0, 0, 0, 0, 0, 0
    ]);
  });

  it(`DEC Vxx: decrements the value of Vxx by 1`, () => {
    expect(executeCommands(['MOV 1,V00', 'DEC V00'])).toEqual([
      0, 0, 0, 0, 0, 0, 0, 0
    ]);
  });

  it(`INC Vxx: increments the value of Vxx by 1`, () => {
    expect(executeCommands(['MOV 1,V00', 'INC V00'])).toEqual([
      2, 0, 0, 0, 0, 0, 0, 0
    ]);
  });

  it(`should pass this test: ['MOV 256,V00']`, () => {
    expect(executeCommands(['MOV 256,V00'])).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it(`should pass this test: ['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']`, () => {
    expect(
      executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01'])
    ).toEqual([14, 10, 0, 0, 0, 0, 0, 0]);
  });

  it(`should pass this test: ['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']`, () => {
    expect(
      executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'])
    ).toEqual([0, 254, 0, 0, 0, 0, 0, 0]);
  });

  it(`should pass this test: ['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06']`, () => {
    expect(
      executeCommands(['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'])
    ).toEqual([0, 10, 0, 0, 0, 0, 1, 0]);
  });
});

describe('normalizeNumber0to255()', () => {
  it('should return 0 if the parameter is 0', () => {
    expect(normalizeNumber0to255(0)).toBe(0);
  });
  it('should return 255 if the parameter is -1', () => {
    expect(normalizeNumber0to255(-1)).toBe(255);
  });
  it('should return 0 if the parameter is 256', () => {
    expect(normalizeNumber0to255(256)).toBe(0);
  });
});
