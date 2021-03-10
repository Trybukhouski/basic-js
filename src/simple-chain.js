const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push((`( ${value} )`));
    return this;
  },

  removeLink(position) {
    if (isNaN(+position) || position < 1 || this.chain[position] === undefined) {
      this.chain = []
      throw Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishStrokeChain = this.chain.join('~~');
    this.chain = [];
    return finishStrokeChain;
  }
};

module.exports = chainMaker;
