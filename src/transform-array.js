const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   try {
//     Array.isArray(arr)
//   } catch (e) {
//     throw new Error(e)
//   }

//   let comand = arr.filter(el => el === '--discard-next' || el === '--discard-prev' || el === '--double-next' || el === '--double-prev');

//   if (comand.length === 0) return arr;
//   let result = arr;
//   for (let i = 0; i < comand.length; i++) {
//     switch (comand[i]) {
//       case '--discard-next': (result.indexOf(comand[i]) === result.length - 1) ?
//         result.splice(result.indexOf('--discard-next'), 1) :
//         result.splice(result.indexOf('--discard-next'), 2);
//         break;
//       case '--discard-prev': (arr.indexOf(comand[i]) === 0) ?
//         result.splice(result.indexOf('--discard-prev'), 1) :
//         result.splice(result.indexOf('--discard-prev') - 1, 2);
//         break;
//       case '--double-next': (result.indexOf(comand[i]) === result.length - 1) ?
//         result.splice(result.indexOf('--double-next'), 1) :
//         result[result.indexOf('--double-next')] = result[result.indexOf('--double-next') + 1];
//         break;
//       case '--double-prev': (result.indexOf(comand[i]) === 0) ?
//         result.splice(arr.indexOf('--double-prev'), 1) :
//         result[result.indexOf('--double-prev')] = result[result.indexOf('--double-prev') - 1];
//         break;
//     }
//   }
//   return result;
// };