const generateRange = (min, max, step, results) => {
  results = results || [];
  if(min > max){ return results; }
  results.push(min);
  return generateRange(min += step, max, step, results);
};



console.log(generateRange(2, 10, 2)); // should return array of [2,4,6,8,10]
console.log(generateRange(1, 10, 3)); // should return array of [1,4,7,10]
