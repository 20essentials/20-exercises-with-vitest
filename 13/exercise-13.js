/*
 The Studious Elves
  - Exercise from: https://2023.adventjs.dev/challenges/2023/11

  In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

  A palindrome is a word that reads the same forwards and backwards. The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

  Create a function getIndexsForPalindrome that receives a string and returns:

  If it is already a palindrome, an empty array.
  If it is not possible, null.
  If a palindrome can be formed with one change, an array with the two positions (indexes) that must be swapped to create it.
*/

export function getIndexsForPalindrome(word) {
  if (typeof word !== 'string') {
    throw new Error('The parameter word must be a string');
  }

  const { length } = word;

  function isPalindrome(word) {
    let left = 0;
    let right = length - 1;

    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }

    return true;
  }

  if (isPalindrome(word)) return [];

  function swap(str, i, j) {
    let array = str.split('');
    [array[j], array[i]] = [array[i], array[j]];
    return array.join('');
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const swappedWord = swap(word, i, j);
      if (isPalindrome(swappedWord)) {
        return [i, j];
      }
    }
  }

  return null;
}
