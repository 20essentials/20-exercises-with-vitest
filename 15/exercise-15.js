/**
 * Determines whether a machine can be reconfigured from the `from` string to the `to` string.
 *
 * A valid reconfiguration must meet all of the following conditions:
 * 1. Both strings must have the same length.
 * 2. Both must contain the same number of unique characters.
 * 3. Each character transformation must be consistent:
 *    - Each character in `from` must always map to the same character in `to`.
 *    - No two different characters in `from` may map to the same character in `to`.
 */

export function canReconfigure(from, to) {
  // Validate: both parameters must exist and be strings
  if (from === undefined) throw new Error('"from" parameter is required');
  if (typeof from !== 'string')
    throw new Error('"from" parameter must be a string');

  if (to === undefined) throw new Error('"to" parameter is required');
  if (typeof to !== 'string') throw new Error('"to" parameter must be a string');

  // Check: strings must have equal length
  if (from.length !== to.length) return false;

  // Check: strings must have the same number of unique characters
  if (countUniqueLetters(from) !== countUniqueLetters(to)) return false;

  // Check: transformation mapping must be valid
  if (!haveSameTransformationOrder(from, to)) return false;

  return true;
}

function countUniqueLetters(word) {
  return new Set(word).size;
}

/**
 * Checks if the transformation from `from` to `to` is consistent.
 * Each character in `from` must always map to the same character in `to`,
 * and no two characters in `from` can map to the same character in `to`.
 */
function haveSameTransformationOrder(from, to) {
  const transformation = { [from[0]]: to[0] };

  for (let i = 1; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    for (const key in transformation) {
      if (key !== fromLetter && transformation[key] === toLetter) {
        return false; // Conflict: multiple letters mapping to the same output
      }
    }

    transformation[fromLetter] = toLetter;
  }

  return true;
}
