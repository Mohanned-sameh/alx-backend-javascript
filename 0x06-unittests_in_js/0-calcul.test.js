let assert = require('assert');
let calcul = require('./0-calcul');

describe('calc', () => {
  it('should return 4', () => {
    assert.strictEqual(calcul(2.5, 1.4), 4);
  });

  it('should return 6', () => {
    assert.strictEqual(calcul(2.4, 3.6), 6);
  });

  it('should return 16', () => {
    assert.strictEqual(calcul(5.8, 9.9), 16);
  });

  it('should return 3', () => {
    assert.strictEqual(calcul(3.33, 0.33), 3);
  });

  it('should return 3', () => {
    assert.strictEqual(calcul(2.1, 0.5), 3);
  });
});
