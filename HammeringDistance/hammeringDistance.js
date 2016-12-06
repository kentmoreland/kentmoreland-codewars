const hammingDistance = (a, b) => {
  a = a.split(''); b = b.split('');
  return a.reduce((ct, it, ix) => {
    it !== b[ix] ? ct += 1 : ct;
    return ct;
  }, 0);
};

console.log(hammingDistance('100101', '101001')); //2