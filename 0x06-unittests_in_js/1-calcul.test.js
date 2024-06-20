let assert = require('assert');
let calcul = require('./1-calcul');

describe('calc', () => {
  it('should return 14', () => {
    assert.strictEqual(calcul('SUM', 5, 9), 14);
  });

  it('should return -4', () => {
    assert.strictEqual(calcul('SUBTRACT', 5, 9), -4);
  });

  it('should return 0.2', () => {
    assert.strictEqual(calcul('DIVIDE', 1, 5), 0.2);
  });
});
