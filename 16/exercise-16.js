/*
  Is it a valid Copy?
  - Exercise from: https://2023.adventjs.dev/challenges/2023/12

  In the North Pole they still use paper photocopiers. Elves use them to copy the letters that children send to Santa, so they can send them to all the gift departments.

  However, they are very old and do not work very well. Every time they make a copy, the quality of the copy slightly decreases, a phenomenon known as generation loss.

  You need to detect if a letter is a copy of another. The letters are very long and you can't read them, but you can compare them with an algorithm.

  There is a high probability that a character will degrade with each copy (it doesn't always happen!). And when it happens, the rule it follows is:

  The characters from A to Z degrade from capital letters to lower-case letters (A-Z ⇒ a-z)
  Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
  Once the letters have degraded into the symbols, they can continue to degrade.
  Note that the last one is a blank space, not an empty character.
  Characters that are not letters (like digits) do not degrade.
  Knowing this and receiving two letters. The supposed original and the copy. You must determine if the copy is a copy of the other.
*/

export function checkIsValidCopy(original, copy) {
  if (typeof original !== 'string' || typeof copy !== 'string')
    throw new Error('The first and second parameter must be strings');
  const validChars = ['#', '+', ':', '.', ' '];
  const { length } = original;

  for (let i = 0; i < length; i++) {
    const originalChar = original[i];
    const charCopy = copy[i];
    const areDifferentChars = originalChar !== charCopy;
    if (areDifferentChars) {
      if (validChars.includes(originalChar, charCopy)) {
        const copyIndex = validChars.indexOf(charCopy);
        const originalIndex = validChars.indexOf(originalChar);
        if (copyIndex > originalIndex) continue;
        return false;
      }
      const originalIsASpace = originalChar === ' ';
      const originalWasUpperCase = originalChar.toLowerCase() === charCopy;
      if (originalWasUpperCase) continue;
      const charCopyIsNotAValidChar = !validChars.includes(charCopy);
      if (charCopyIsNotAValidChar) return false;
      if (originalIsASpace && areDifferentChars) return false;
    }
  }

  return true;
}
