const alternatingLoops = (...params) => {
  const result = []
  let j = 0;
  const long = params.reduce((high, arr) => {
    high <= arr.length ? high = arr.length : high = high;
    return high
  }, 0);
  while(j <= long){
    for (var i = 0; i < params.length; i++) {
      if(params[i].length){
        result.push(params[i].shift())
      }
    }
    j++;
  }
  return result;
};

module.exports.alternatingLoops = alternatingLoops;