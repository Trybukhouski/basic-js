const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrOfSubarsLength = matrix.map(el => el = el.filter(ell => ell === '^^').length);
  return matrix.length === 0 ? 0 : arrOfSubarsLength.reduce((ac, el) => ac + el);
};
