import { describe, it, expect } from 'vitest';
import { transformTree } from './exercise-20.js';

describe('transformTree()', () => {
  it('should be a function', () => {
    expect(transformTree).toBeTypeOf('function');
  });

  it('should return null for an empty array', () => {
    expect(transformTree([])).toEqual(null);
  });

  it('should transform a single-element array into a root node with null children', () => {
    expect(transformTree([1])).toEqual({
      value: 1,
      left: null,
      right: null
    });
  });

  it('should correctly build a tree with nested left and right nodes including nulls', () => {
    expect(
      transformTree([
        2,
        7,
        5,
        null,
        6,
        null,
        9,
        null,
        null,
        1,
        11,
        null,
        null,
        null,
        10
      ])
    ).toEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null
          },
          right: {
            value: 11,
            left: null,
            right: null
          }
        }
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      }
    });
  });

  it('should build a tree with a balanced structure and one null value in the left of a right node', () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    });
  });

  it('should handle a right child being null while left child has its own right subtree', () => {
    expect(transformTree([17, 0, null, null, 1])).toEqual({
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      },
      right: null
    });
  });

  it('should transform a full binary tree with 7 elements', () => {
    expect(transformTree([1, 2, 3, 4, 5, 6, 7])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    });
  });

  it('should transform a tree with missing right child in left subtree', () => {
    expect(transformTree([1, 2, 3, 4, 5])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    });
  });

  it('should correctly build a tree with root and its two children only', () => {
    expect(transformTree([1, 2, 3])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    });
  });
});
