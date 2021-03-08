const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let dreamTeamName = members
    .filter(el => typeof el === 'string')
    .map(el => el
      .trim()
      .toUpperCase()
      .slice(0, 1))
    .sort()
    .join('');

  return dreamTeamName;
};
