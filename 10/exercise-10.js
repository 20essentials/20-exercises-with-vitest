/*
  Sorting The WareHouse
  - Exercise from: https://2023.adventjs.dev/challenges/2023/8

  The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

  The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

  The elves have a special system for organizing the gifts:

  Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
  Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
  Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)
  The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

  Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.
*/

export function organizeGifts(gifts) {
  if (typeof gifts !== 'string')
    throw new Error('The parameter "gifts" must be a string');
  const arrayOfCommands = gifts.match(/\d+[a-z]/g);
  const AMOUNT = { PALETTE: 5, BOX: 10 };
  const EMPTY_STRING = '';
  let result = EMPTY_STRING;
  arrayOfCommands.forEach(command => {
    const char = command.at(-1);
    const num = Number(command.slice(0, -1));
    const numberOfBox = Number.parseInt(num / AMOUNT.BOX); //7
    const numberOfPalets = Number.parseInt(numberOfBox / AMOUNT.PALETTE); //1 [a]
    const numberOfBoxRemaining = numberOfBox % AMOUNT.PALETTE; //2 {a}[a]
    const numberBag = num % AMOUNT.BOX; //6 (aaaaaa)
    const charsPalettes =
      numberOfPalets > 0 ? `[${char}]`.repeat(numberOfPalets) : EMPTY_STRING;
    const charsBoxesRemaining =
      numberOfBoxRemaining > 0
        ? `{${char}}`.repeat(numberOfBoxRemaining)
        : EMPTY_STRING;
    const charsBags =
      numberBag > 0 ? `(${char.repeat(numberBag)})` : EMPTY_STRING;
    result += `${charsPalettes}${charsBoxesRemaining}${charsBags}`;
  });

  return result;
}

organizeGifts('76a');
