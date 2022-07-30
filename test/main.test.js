const { expect }  = require('chai');
const findMaxProfit = require('../main');

describe('findMaxProfit test', () => {
  it('sholud return 16 when passed [45, 24, 35, 31, 40, 38, 11]', () => {
    const actual = findMaxProfit([45, 24, 35, 31, 40, 38, 11]);
    const expected = 16;
    expect(actual).to.equal(expected);
  });

  it('sholud return 0 when passed [30, 20, 10]', () => {
    const actual = findMaxProfit([30, 20, 10]);
    const expected = 0;
    expect(actual).to.equal(expected);
  });

  it('sholud return 0 when passed []', () => {
    const actual = findMaxProfit([]);
    const expected = 0;
    expect(actual).to.equal(expected);
  });

  it('sholud return 0 when passed [30]', () => {
    const actual = findMaxProfit([30]);
    const expected = 0;
    expect(actual).to.equal(expected);
  });
});
