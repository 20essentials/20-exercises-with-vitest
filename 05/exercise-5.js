/*
  The Naughty Elf
  - Exercise from: https://2023.adventjs.dev/challenges/2023/3

  In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

  You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

  Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.


  Please, keep in mind:

  - There will always be one different step or none.
  - The modification can occur anywhere in the string.
  - The original steps could be empty

*/

export function findNaughtyStep(original, modified) {
  if (typeof original !== 'string')
    throw new Error('The first parameter must be a string');
  if (typeof modified !== 'string')
    throw new Error('The second parameter must be a string');
  const originalArray = original.split('');
  const modifiedArray = modified.split('');
  const { length: originalLength } = original;
  const { length: modifiedLength } = modified;
  if (originalLength === modifiedLength) return '';

  const comprobe = ({ length, returnOriginal }) => {
    for (let i = 0; i < length; i++) {
      const originalChar = originalArray[i];
      const modifiedChar = modifiedArray[i];
      if (originalChar !== modifiedChar) {
        if (returnOriginal) return originalChar;
        return modifiedChar;
      }
    }
  };

  if (originalLength < modifiedLength) {
    return comprobe({ length: modifiedLength, returnOriginal: false });
  }

  if (originalLength > modifiedLength) {
    return comprobe({ length: originalLength, returnOriginal: true });
  }
}
