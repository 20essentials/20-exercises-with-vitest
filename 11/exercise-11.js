/*
  Switch the Lights
  - Exercise from: https://2023.adventjs.dev/challenges/2023/9

  They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

  The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

  We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of lights that need to be changed for the colors to alternate.
*/

export function adjustLights(lights) {
  if (!Array.isArray(lights) || lights.some(l => typeof l !== 'string'))
    throw new Error('The parameter must be an array of strings');

  const objetInverse = {
    '🟢': '🔴',
    '🔴': '🟢'
  };

  function handleCount({ array }) {
    const lights = array.slice();
    const { length } = lights;
    let counter = 0;
    for (let i = 0; i < length; i++) {
      const currentLigth = lights[i];
      const nextLight = lights[i + 1];
      if (currentLigth === nextLight) {
        counter++;
        lights[i + 1] = objetInverse[currentLigth];
      }
    }
    return counter;
  }

  const counter1 = handleCount({ array: lights });
  const counter2 = handleCount({ array: lights.toReversed() });

  return Math.min(counter1, counter2);
}
