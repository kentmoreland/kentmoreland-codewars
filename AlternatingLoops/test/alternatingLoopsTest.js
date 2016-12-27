expect = require('chai').expect;

describe('alternating loops', () => {
  const alternatingLoops = require('../alternatingLoops.js').alternatingLoops

  it('should have a function called alternatingLoops', () => {
    expect(alternatingLoops).to.be.a('function');
  });

  it('should return an array', () => {
    expect(alternatingLoops([1])).to.deep.equal([1]);
  });

  it('should combine two arrays', () => {
    expect(alternatingLoops([1], ['a'])).to.deep.equal([1, 'a']);
  })

  it('should combine multiple arrays with a single value', () => {
    expect(alternatingLoops([1], ['a'], [2])).to.deep.equal([1, 'a', 2]);
  });

  it ('should combine multiple arrays with multiple values', () => {
    expect(alternatingLoops([1, 2], ['a', 'b'], ['1a', '2b'])).to.deep.equal([1, 'a', '1a', 2, 'b', '2b'])
  });

  it('should combine multiple arrays with varying lengths', () => {
    expect(alternatingLoops(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])).to.deep.equal(['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]);
  });

});