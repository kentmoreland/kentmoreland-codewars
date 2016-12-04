const sumSquares = (array) => {
  return array.reduce((sum, num) => { return sum += (num *= num); }, 0);
};
