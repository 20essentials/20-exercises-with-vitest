import { describe, it, expect } from 'vitest';
import { createChristmasTree } from './exercise-12.js';

describe('createChristmasTree()', () => {
  it('should be a function', () => {
    expect(createChristmasTree).toBeTypeOf('function');
  });

  it('should throw if the first parameter is not a string', () => {
    expect(() => createChristmasTree(4, 4)).toThrow();
  });

  it('should throw if the second parameter is not a number', () => {
    expect(() => createChristmasTree('abc', '4')).toThrow();
  });

  it('should build a tree of height 3 using the character "x"', () => {
    expect(createChristmasTree('x', 3)).toEqual(`  x
 x x
x x x
  |
`);
  });

  it('should build a tree of height 3 using "x" with correct spacing and line breaks', () => {
    // prettier-ignore
    expect(createChristmasTree("x", 3)).toEqual([
      " ", " ", "x", "\n",
      " ", "x", " ", "x", "\n",
      "x", " ", "x", " ", "x", "\n",
      " ", " ", "|", "\n"
    ].join(''))
  });

  it('should build a tree of height 4 using the characters "123"', () => {
    // prettier-ignore
    expect(createChristmasTree('123', 4)).toEqual([
      ' ',' ',' ','1',  '\n',
      ' ',' ','2',' ','3', '\n',
      ' ','1',' ','2',' ','3', '\n',
      '1',' ','2',' ','3',' ','1', '\n',
      ' ',' ',' ','|', '\n',
    ].join(''))
  });

  it('should build a tree of height 3 using the characters "*@o"', () => {
    // prettier-ignore
    expect(createChristmasTree('*@o', 3)).toEqual([
      ' ',' ','*', '\n',
      ' ','@',' ','o', '\n',
      '*',' ','@',' ','o', '\n',
      ' ',' ','|','\n',
    ].join(''))
  });

  it('should build a tree of height 4 using the characters "xo"', () => {
    // prettier-ignore
    expect(createChristmasTree('xo', 4)).toEqual([
      ' ',' ',' ','x',  '\n',
      ' ',' ','o',' ','x', '\n',
      ' ','o',' ','x',' ','o', '\n',
      'x',' ','o',' ','x',' ','o', '\n',
      ' ',' ',' ','|', '\n',
    ].join(''))
  });

  it('should build a tree of height 5 using the characters "123"', () => {
    // prettier-ignore
    expect(createChristmasTree('123', 5)).toEqual([
      ' ',' ',' ',' ','1', '\n',
      ' ',' ',' ','2',' ','3', '\n',
      ' ',' ','1',' ','2',' ','3', '\n',
      ' ','1',' ','2',' ','3',' ','1', '\n',
      '2',' ','3',' ','1',' ','2',' ','3', '\n',
      ' ',' ',' ',' ','|', '\n',
    ].join(''))
  });
});
