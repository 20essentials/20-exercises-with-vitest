/*
  We start the Factory
  - Exercise from: https://2023.adventjs.dev/challenges/2023/2

  In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

  Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

  A gift can be made if we have all the necessary materials to make it.
*/

export function manufacture(gifts, materials) {
  if (!Array.isArray(gifts))
    throw new Error('The first parameter must be an Array');
  if (gifts.length === 0) return [];
  if (gifts.some(el => typeof el !== 'string'))
    throw new Error('The first parameter must be an Array of Strings');
  if (typeof materials !== 'string')
    throw new Error('The second parameter must be a string');
  const uniqueLettersOfMaterial = [...new Set(materials.split(''))];
  const state = [];

  gifts.forEach(gift => {
    const lettersOfGift = [...new Set(gift.split(''))];

    if (
      lettersOfGift.every(char => uniqueLettersOfMaterial.includes(char))
    ) {
      state.push(gift);
    }
  });

  return state;
}
