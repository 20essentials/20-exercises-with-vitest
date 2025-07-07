/*
  Create your Own Christmas Tree
  - Exercise from: https://2023.adventjs.dev/challenges/2023/10

  What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

  To create it, we are given a string to form the tree and a number that indicates its height.

  Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

  We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

  Note:

  The tree should always be centered, for that reason add blank spaces to the left of each line.

  Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.

  The ornaments have a white space between them for separation.
*/

export function createChristmasTree(ornaments, height) {
  if (typeof ornaments !== 'string')
    throw new Error('The first parameter must be a string');
  if (typeof height !== 'number')
    throw new Error('The second parameter must be a number');
  let initialCountOfSpacesLeft = height - 1;
  let countChar = 1;
  let state = [];
  let lastNum = 0;
  for (let numOfRows = 1; numOfRows <= height; numOfRows++) {
    const spaceChar = ' ';
    const spaceLeft = spaceChar.repeat(initialCountOfSpacesLeft);
    const arrayChars = Array.from({ length: countChar }, (_, num) => {
      if (num % 2 === 0) return ornaments[lastNum++ % ornaments.length];
      return ' ';
    });
    const result = `${spaceLeft}${arrayChars.join('')}\n`;
    initialCountOfSpacesLeft--;
    countChar += 2;
    state.push(result);
  }
  const lastRow = state[0].replace(/\s(.)\n/i, (_, __) => ' |\n');
  state.push(lastRow);
  return state.join('');
}
