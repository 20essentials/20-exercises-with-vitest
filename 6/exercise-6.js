/*
  Turn the parentheses around
  - Exercise from: https://2023.adventjs.dev/challenges/2023/4

  In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

  Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

  However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

*/

export function decode(message) {
  if (typeof message !== 'string')
    throw new Error('The parameter provided must be a string');
  let newWord = message;

  while (/\([^\(\)]+\)/.test(newWord)) {
    newWord = newWord.replace(/\(([^()]+)\)/g, (_, match) => {
      return match.split('').reverse().join('');
    });
  }

  return newWord;
}

