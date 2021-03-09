const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let {
    repeatTimes = 1,
    additionRepeatTimes = 1,
    addition = '',
    separator = '+',
    additionSeparator = '|'
  } = options;

  if (repeatTimes === undefined) repeatTimes = 1;
  if (str === null) str = 'null';
  if (addition === null) addition = 'null';
  if (typeof addition === 'boolean') addition = String(addition);


  let finalAddition = `--separator--${addition}`
    .repeat(additionRepeatTimes)
    .split('--separator--')
    .slice(1)
    .join(additionSeparator);


  let finalString = `--separator--${str}${finalAddition}`
    .repeat(repeatTimes)
    .split('--separator--')
    .slice(1)
    .join(separator);

  return finalString
};
