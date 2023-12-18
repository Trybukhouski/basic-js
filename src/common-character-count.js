const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function charactersCount(word) {
    const obj = {};
    for (let el of word) {
      if (obj.hasOwnProperty(el)) {
        obj[el] += 1;
      } else {
        obj[el] = 1;
      }
    }
    return obj;
  }
  const obj1 = charactersCount(s1);
  const obj2 = charactersCount(s2);
  let sum = 0;

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      sum += obj1[key] >= obj2[key] ? obj2[key] : obj1[key];
    }
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
