const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    if (Array.isArray(arr)) {
      arr.forEach(el => {
        if (Array.isArray(el)) {
          let newDepth = this.calculateDepth(el) + 1;
          depth < newDepth ? depth = newDepth : depth;
        }
      });
      return depth;
    }
    return depth;
  };
};