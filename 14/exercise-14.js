/**
 * A function that given a number:
 * - Print `fizz` if is a multiple of 3
 * - Print `buzz` if is a multiple of 5
 * - Print `fizzbuzz` if is a multiple of 3 and 5
 * - Print the number if not
 */

export function fizzbuzz(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new Error('A number must be provided');
  }

  const multiples = { 3: 'fizz', 5: 'buzz' }; 
  let output = '';
  for (const multiplier in multiples) {
    const message = multiples[multiplier];
    if (number % multiplier === 0) output += message;
  }

  return output || number;
}
