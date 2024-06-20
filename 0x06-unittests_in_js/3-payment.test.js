const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber', function () {
    const calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    calculateNumber.restore();
  });
});
