const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

// const CustomError = require("../extensions/custom-error");

// module.exports = function repeater(str, options) {

//   let finalAddition = `--separator--${options.addition || ''}`
//     .repeat(+options.additionRepeatTimes || 1)
//     .split('--separator--')
//     .slice(1)
//     .join(String(options.additionSeparator || '|'))


//   let finalString = `--separator--${str}${finalAddition}`
//     .repeat(+options.repeatTimes || 1)
//     .split('--separator--')
//     .slice(1)
//     .join(String(options.separator || '+'));

//   return finalString
// };
