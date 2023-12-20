const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renamed = [];

  const namesObj = {
    addName(fileName) {
      this[fileName] = 1;
    },
    countName(fileName) {
      this[fileName] += 1;
    },
    getUniqueName(fileName) {
      return `${fileName}(${this[fileName] - 1})`;
    },
  };

  for (let fileName of names) {
    if (renamed.includes(fileName)) {
      namesObj.countName(fileName);
      let uniqueName = namesObj.getUniqueName(fileName);
      namesObj.addName(uniqueName);
      renamed.push(uniqueName);
    } else {
      namesObj.addName(fileName);
      renamed.push(fileName);
    }
  }
  return renamed;
}

module.exports = {
  renameFiles,
};
