import { describe, it, expect } from 'vitest';
import { manufacture } from './exercise-4.js';

describe('manufacture()', () => {
  it('should be a function', () => {
    expect(manufacture).toBeTypeOf('function');
  });

  it('should throw an error if the first argument is not an array', () => {
    expect(() => manufacture('hola', 'juguete')).toThrow(
      'The first parameter must be an Array'
    );
  });

  it('should throw an error if the first argument is not an array of strings', () => {
    expect(() => manufacture([4, 'hola'], 'juguete')).toThrow(
      'The first parameter must be an Array of Strings'
    );
  });

  it('should return an empty array if the first argument is an empty array', () => {
    expect(manufacture([], 'juguete')).toEqual([]);
  });

  it('should throw an error if the second argument is not a string', () => {
    expect(() => manufacture(['hello', 'hola'], 4)).toThrow(
      'The second parameter must be a string'
    );
  });

  it('should return words that can be formed with the given letters (test 1)', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([
      'tren',
      'oso'
    ]);
  });

  it('should return words that can be formed with the given letters (test 2)', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle']);
  });

  it('should return an empty array when no words can be formed (test 1)', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([]);
  });

  it('should return an empty array when no words can be formed (test 2)', () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toEqual([]);
  });

  it('should return an empty array when no words can be formed (test 3)', () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toEqual([]);
  });

  it('should return an empty array when both parameters are valid but the word list is empty', () => {
    expect(manufacture([], 'letras')).toEqual([]);
  });
});
