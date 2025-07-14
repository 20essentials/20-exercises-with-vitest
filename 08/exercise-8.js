/*
  The reindeer on Trial
  - Exercise from: https://2023.adventjs.dev/challenges/2023/6

 The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

  For this, they have a text string movements where each character represents the direction of the reindeer's movement:

  > = Moves to the right
  < = Moves to the left
  * = Can move forward or backward
  For example, if the movement is >>*<, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

  The elves want to know what the maximum distance the reindeer travels is after completing all movements.

  In the previous example, the maximum distance the reindeer travels is 2. It goes to the right twice +2, then with the * it can go to the right again to maximize the distance +1 and then it goes to the left -1.

  Create a maxDistance function that takes the text string movements and returns the maximum distance that the reindeer can travel in any direction.

  Keep in mind that it doesn't matter whether it is to the left or right, the distance is the absolute value of the maximum distance traveled at the end of the movements.
*/

export function maxDistance(movements) {
  if (typeof movements !== 'string')
    throw new Error('The parameter must be a string');
  const arrayOfMovements = movements.split('');
  const objectOfSimbols = { '>': 0, '<': 0, '*': 0 };
  arrayOfMovements.reduce((_, currentChar) => {
    objectOfSimbols[currentChar]++;
    return objectOfSimbols;
  }, objectOfSimbols);

  const difference = Math.abs(objectOfSimbols['>'] - objectOfSimbols['<']);
  return difference + objectOfSimbols['*'];
}
