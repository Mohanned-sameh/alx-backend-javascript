const Utils = {
  calculateNumber(type, a, b) {
    const aNumber = Number(a);
    const bNumber = Number(b);

    if (Number.isNaN(aNumber) || Number.isNaN(bNumber)) {
      throw TypeError;
    }

    if (type === 'SUM') {
      return Math.round(aNumber) + Math.round(bNumber);
    } else if (type === 'SUBTRACT') {
      return Math.round(aNumber) - Math.round(bNumber);
    } else if (type === 'DIVIDE') {
      if (Math.round(bNumber) === 0) {
        return 'Error';
      }
      return Math.round(aNumber) / Math.round(bNumber);
    }
  },
};

module.exports = Utils;
