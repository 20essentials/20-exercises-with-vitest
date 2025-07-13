/*
  Friday Deployment
  - Exercise from: https://2023.adventjs.dev/challenges/2023/16

  Yesterday, someone did a production deployment and the application for assembling Christmas trees broke. We've been asked to fix it as soon as possible.

  The problem is that the format of the trees has changed. It's an array of numbers… but it should be an object! For example, the tree: [3, 1, 0, 8, 12, null, 1] looks like this:

  //        3
  //      /   \
  //     1     0
  //    / \     \
  //   8  12     1
  What we need is to transform the array into an object where each node of the tree has value, left, and right properties.

  For example, running your transformTree function with [3, 1, 0, 8, 12, null, 1] should return this:

  {
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
  }
  The elf on duty who tried to solve the problem before going home, left us some clues:

  If a node doesn't have a value, it's represented with null. Therefore, if a node has a null value, it won't have any children.
  The root node is at index 0 in the array.
  There's a relationship between the index of a node and the index of its children. Look for the pattern!
*/

export function transformTree(tree) {
  function build(index) {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    return {
      value: tree[index],
      left: build(2 * index + 1),
      right: build(2 * index + 2)
    };
  }

  return build(0);
}
