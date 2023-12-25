const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // rewrite
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let ii = 0; ii < matrix[i].length; ii++) {
      let minesAround = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][ii - 1] === true) minesAround += 1;
        if (matrix[i - 1][ii] === true) minesAround += 1;
        if (matrix[i - 1][ii + 1] === true) minesAround += 1;
      }

      if (matrix[i][ii - 1] === true) minesAround += 1;
      if (matrix[i][ii + 1] === true) minesAround += 1;

      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][ii - 1] === true) minesAround += 1;
        if (matrix[i + 1][ii] === true) minesAround += 1;
        if (matrix[i + 1][ii + 1] === true) minesAround += 1;
      }
      row.push(minesAround);
    }
    newMatrix.push(row);
  }
  return newMatrix;
}

module.exports = {
  minesweeper,
};
