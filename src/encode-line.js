const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let i = 0;
  let count = 1;
  let previousChar = "";
  for (let char of str) {
    if (char === previousChar) {
      count++;
      result[i - 1] = count + char;
    } else {
      result.push(char);
      count = 1;
      i++;
    }
    previousChar = char;
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};
