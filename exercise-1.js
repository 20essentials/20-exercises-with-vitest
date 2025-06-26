/*
  Santa Claus Compiler
  - Exercise from: https://2022.adventjs.dev/challenges/2022/23

  We are testing a new CPU for the Santa Claus' sleigh. But we still have to program the software that will run on it.

  The CPU has available 8 registers, which are named V00..V07. At the start of the program, all the registers contain 0. The CPU supports the following instructions:

  MOV Vxx,Vyy: copies the value from register Vxx to register Vyy; MOV n,Vxx: assign the numeric constant n to register Vxx (overwrite if already has a value); ADD Vxx,Vyy: calculates (Vxx + Vyy) and stores the result in Vxx; DEC Vxx: decrements Vxx value by 1. INC Vxx: increments Vxx value by 1. JMP i: jumps to instruction number i if V00 is different to 0. i is guaranteed to be a valid instruction number and 0 would be the first command.

  As the CPU is 8-bit, the number it could represent goes from 0 to 255. If you increment the number 255 causes overflow and results in 0. And if you decrement 0, it results in 255. Keep in mind then that number 280 is the same as 24 (280 - 256 = 24).

  After the last instruction has been executed, you should return an array with the result for every register. From V00 to V07.

*/

export function normalizeNumber0to255(num) {
  return ((num % 256) + 256) % 256;
}

export function executeCommands(commands) {
  const MAX_LENGTH = 8;
  let state = Array.from({ length: MAX_LENGTH }, () => 0);
  if (commands == null) return state;
  if (!Array.isArray(commands))
    throw new Error('The parameter must be an Array of Strings');
  if (commands.some(n => typeof n !== 'string'))
    throw new Error('The parameter commands must be an Array only of Strings!');

  for (let i = 0; i < commands.length; i++) {
    const texto = commands[i];
    const [instruction, theCommands] = texto.split(' ');
    const [command1, command2] = theCommands.split(',');
    const command1Number = Number(command1);
    const commandOneIsNumber = typeof command1Number === 'number';
    const commandOneIsString = Number.isNaN(command1Number);
    const indexA = +command1.at(-1);
    const indexB = +command2?.at(-1);

    if (instruction === 'MOV' && commandOneIsNumber && !commandOneIsString) {
      state[indexB] = command1Number;
    } else if (instruction === 'MOV' && commandOneIsString) {
      state[indexB] = state[indexA];
    } else if (instruction === 'ADD') {
      state[indexA] += state[indexB];
    } else if (instruction === 'DEC') {
      state[indexA] -= 1;
    } else if (instruction === 'INC') {
      state[indexA] += 1;
    } else if (instruction === 'JMP') {
      const indexOfV00 = 0;
      if (state[indexOfV00] !== 0) {
        i = command1Number - 1;
      }
      continue;
    }
  }

  return state.map(normalizeNumber0to255);
}
