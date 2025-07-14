/*
  Santa's Cybertruck
  - Exercise from: https://2023.adventjs.dev/challenges/2023/5

  Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

  . = Road
  S = Santa's Sled
  * = Open barrier
  | = Closed barrier
  Example of a road: S...|....|.....

  Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

  All barriers start closed, but after 5 units of time, they all open forever.

  Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time.

  The result is an array where each element shows the road at each unit of time.

  Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

  The elves were inspired by this Code Wars challenge.
*/

export function cyberReindeer(road, time) {
  if (typeof road !== 'string')
    throw new Error('The parameter road must be a string');
  if (typeof time !== 'number')
    throw new Error('The parameter time must be a number');
  let state = [road];

  const arrayOfIndexOfClosedBarried = road
    .split('')
    .map((el, i) => {
      if (el === '|') return i;
    })
    .filter(Boolean);

  for (let i = 1; i < time; i++) {
    const lastRoad = state[state.length - 1];
    let lastRoadArray = lastRoad.split('');
    const charSIndex = lastRoadArray.indexOf('S');
    const nextCharIndex = charSIndex + 1;
    const currentCharWasABarried =
      arrayOfIndexOfClosedBarried.includes(charSIndex);
    const nextChar = lastRoadArray.at(nextCharIndex);
    const barrierOpens = i > 4;
    const barrierIsClose = !barrierOpens;

    if (i === 5) {
      lastRoadArray = lastRoadArray.map(c => {
        if (c === '|') return '*';
        return c;
      });
    }

    if (nextChar === '|') {
      if (barrierIsClose) {
        state.push(lastRoadArray.join(''));
        continue;
      }
      lastRoadArray[charSIndex] = currentCharWasABarried ? '*' : '.';
      lastRoadArray[nextCharIndex] = 'S';
      state.push(lastRoadArray.join(''));
      continue;
    }

    if (nextChar === '.' || nextChar === '*') {
      lastRoadArray[charSIndex] = currentCharWasABarried ? '*' : '.';
      lastRoadArray[nextCharIndex] = 'S';
      state.push(lastRoadArray.join(''));
      continue;
    }
  }

  return state;
}
