const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // passedDate check
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // isDate check
  try {
    date.getTime()
  } catch (e) {
    throw new Error(e)
  }

  // Actual month implement
  const actualMonth = date.getMonth() + 1;
  return actualMonth <= 2 || actualMonth === 12 ? 'winter' :
    actualMonth <= 5 ? 'spring' :
      actualMonth <= 8 ? 'summer' :
        actualMonth <= 11 ? 'autumn(fall)' :
          false;
};
