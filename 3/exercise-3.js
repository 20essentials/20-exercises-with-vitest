/*
  First repeated Gift
  - Exercise from: https://2023.adventjs.dev/es/challenges/2023/1

  In the toy factory of the North Pole, each toy has a unique identification number.

  However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

  Find the first identification number that has been repeated, where the second occurrence has the smallest index!

  In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

  Watch out! The elves say this is a Google technical test.
*/

export function findFirstRepeated(gifts) {
  if (gifts == null) return -1;
  if (!Array.isArray(gifts)) return -1;
  const { length } = gifts;
  let minIndex = Infinity;
  const memoryArray = [];
  for (let i = 0; i < length; i++) {
    const currentIdOfGift = gifts[i];
    if (memoryArray.includes(currentIdOfGift) && minIndex > i) {
      minIndex = i;
      continue;
    }
    memoryArray.push(currentIdOfGift);
  }

  return minIndex === Infinity ? -1 : gifts[minIndex];
}
