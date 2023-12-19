const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = `${n}`.split("");
  let result = 0;
  arr.forEach((el, i) => {
    let arrCopy = Object.assign([], arr);
    arrCopy[i] = "";
    result = arrCopy.join("") > result ? arrCopy.join("") : result;
  });
  return +result;
}

module.exports = {
  deleteDigit,
};
