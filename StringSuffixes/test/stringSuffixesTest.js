const expect = require('chai').expect;

describe('stringSuffix', () => {
  const stringSuffix = require('../stringSuffixes').stringSuffix
  let a = 'ababaa';
  let b = 'abc';

  it('should contain a function named stringSuffix', () =>{
    expect(stringSuffix).to.be.a('Function');
  });

  it('should return a number', () =>{
    expect(stringSuffix(a)).to.be.a('Number');
  });

  it('should return the correct sum', () => {
    expect(stringSuffix(b)).to.equal(3);
    expect(stringSuffix(a)).to.equal(11);
  });

})