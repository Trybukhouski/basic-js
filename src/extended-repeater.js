const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strAddition = innerRepeater(
    options.addition,
    options.additionRepeatTimes,
    options.additionSeparator || "|"
  );
  function innerRepeater(str = "", repeatTimes = 1, separator, addition = "") {
    let result = "";
    for (let i = repeatTimes; i >= 1; i--) {
      if (i === 1) {
        result += str + addition;
      } else {
        result += str + addition + separator;
      }
    }
    return result;
  }
  return innerRepeater(
    str,
    options.repeatTimes,
    options.separator || "+",
    strAddition
  );
}

module.exports = {
  repeater,
};
