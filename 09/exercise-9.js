/*
  The 3D Boxes
  - Exercise from: https://2023.adventjs.dev/challenges/2023/7

  Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

  Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

  The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter

  Important: We have been told that there is always to leave a newline at the end of the drawing.
*/

export function drawGift(size, symbol) {
  if (size === 1) return '#\n';
  if (typeof size !== 'number')
    throw new Error('The first parameter must be a number');
  if (typeof symbol !== 'string')
    throw new Error('The second parameter must be a string');
  let initialSpace = size - 1;
  const spaceChar = ' ';
  const firstRow = `${spaceChar.repeat(initialSpace)}${'#'.repeat(size)}`;
  const stateResult = [firstRow];
  const secondToPenultim = size - 2;
  for (let i = 0; i < secondToPenultim; i++) {
    initialSpace--;
    const texto = `${spaceChar.repeat(initialSpace)}#${symbol.repeat(
      secondToPenultim
    )}#${symbol.repeat(i)}#`;
    stateResult.push(texto);
  }

  const stateInverse = stateResult.toReversed().map((row, i) => {
    const arrayChars = row.split('');
    arrayChars.splice(0, i + 1);
    return `${arrayChars.join('')}`;
  });

  const middleRow = `${'#'.repeat(size)}${symbol.repeat(secondToPenultim)}#`;
  stateResult.push(middleRow);
  stateResult.push(...stateInverse);
  const text = stateResult.map(r => `${r.split('').join('')}\n`);
  return text.join('');
}
