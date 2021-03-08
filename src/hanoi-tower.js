const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {};
  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor((2 ** disksNumber - 1) / (turnsSpeed / (60 ** 2)));
  return result;
};
