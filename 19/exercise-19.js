/*
  Autonomus Robot
  - Exercise from: https://2023.adventjs.dev/challenges/2023/15

  We are programming some robots called giftbot 🤖🎁 that autonomously navigate gift warehouses.

  We are creating a function to which we pass: the warehouse 🏬 they must navigate and the movements ↔️ they can make.

  The warehouse is represented as an array of text strings, where:

  . means there is a clear path.
  * means there is an obstacle.
  ! is the robot's initial position.
  The movements are an array of text strings, where:

  R moves the robot one position to the right.
  L moves the robot one position to the left.
  U moves the robot one position upwards.
  D moves the robot one position downwards.
  It must be taken into account that the robot cannot overcome obstacles or the warehouse boundaries.

  Given a warehouse and the movements, we need to return the array with the robot's final position.

  const store = ['..!....', '...*.*.']

  const movements = ['R', 'R', 'D', 'L']
  const result = autonomousDrive(store, movements)
  console.log(result)

  //
  [
    ".......",
    "...*!*."
  ]
  //

  // The last movement is to the left, but it cannot move because there is an obstacle.
  Keep in mind that the store is an array that can have a number of rows ranging from 1 to 100, as we have warehouses of all sizes.

  Also note that the robot might end up in its initial position if it can't move or if it's going around in circles.

*/

export function autonomousDrive(store, movements) {
  const matrix = store.map(row => row.split(''));

  let robotRow = 0;
  let robotCol = 0;
  let found = false;

  for (let i = 0; i < matrix.length && !found; i++) {
    const col = matrix[i].indexOf('!');
    if (col !== -1) {
      robotRow = i;
      robotCol = col;
      found = true;
    }
  }

  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0]
  };

  for (const move of movements) {
    const [dRow, dCol] = moves[move];
    const newRow = robotRow + dRow;
    const newCol = robotCol + dCol;

    const isInsideBounds =
      newRow >= 0 &&
      newRow < matrix.length &&
      newCol >= 0 &&
      newCol < matrix[newRow].length;

    if (isInsideBounds && matrix[newRow][newCol] !== '*') {
      matrix[robotRow][robotCol] = '.';
      robotRow = newRow;
      robotCol = newCol;
      matrix[robotRow][robotCol] = '!';
    }
  }

  return matrix.map(row => row.join(''));
}
