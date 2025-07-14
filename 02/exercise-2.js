/*
  The Last Challenge is a Maze
  - Exercise from: https://2022.adventjs.dev/challenges/2022/24

  It's the day! Today we're going to deliver gifts… but the warehouses are a maze and the elves are lost.

  Indielfo Jones wants to write a program that, upon receiving a matrix, knows if it can quickly exit the maze from its entrance to the exit.

  Mazes have the following positions:

  W: It's a wall, you can't pass through there. S: Entry point to the warehouse. E: Exit point from the warehouse. : White spaces are where you can pass through.

  Valid movements are from one position up, down, left, or right. You can't move diagonally.

  Remember that:

  You only have to return whether you can exit the maze with a boolean.
  You can't jump over W walls.
  You can't exit the limits of the matrix, you always have to follow an internal path.
*/

export function canExit(maze) {
  if (maze == null) return false;
  if (!Array.isArray(maze))
    throw new Error('The parameter provided must be an Array');
  if (!Array.isArray(maze[0]))
    throw new Error('The parameter provided must be an Array Multidimensional');
  if (maze.some(array => array.some(el => typeof el !== 'string')))
    throw new Error(
      'The parameter provided must be an Array Multidimensional of Strings'
    );

  const columnsLength = maze[0].length;
  const rowsLength = maze.length;
  let startColumn = -1;
  let startRow = -1;

  for (let row = 0; row < rowsLength; row++) {
    const currentCol = maze[row].indexOf('S');
    if (currentCol !== -1) {
      startColumn = currentCol;
      startRow = row;
      break;
    }
  }

  if (startColumn === -1 || startRow === -1) return false;

  const colita = [[startRow, startColumn]];
  const arrayVisited = Array.from({ length: rowsLength }, () =>
    Array(columnsLength).fill(false)
  );

  const moves = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];

  arrayVisited[startRow][startColumn] = true;

  while (colita.length > 0) {
    const [r, c] = colita.shift();

    if (maze[r][c] === 'E') return true;

    for (const [dr, dc] of moves) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rowsLength &&
        nc >= 0 &&
        nc < columnsLength &&
        !arrayVisited[nr][nc] &&
        maze[nr][nc] !== 'W'
      ) {
        arrayVisited[nr][nc] = true;
        colita.push([nr, nc]);
      }
    }
  }

  return false;
}
