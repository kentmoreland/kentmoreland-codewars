// You get an array of numbers, return the sum of all of the positives ones.
//O: one number that is the sum of all positive numbers
//I: an array of numbers
//C: time complexity
//E: [1, -4, 7, 12] => 20

//get each number in the array
  //functional
//if the number is greater than 0 add it to the sum

function positiveSum(arr) {
  return arr.reduce((sum, item) => {
    item > 0 ? sum+=item : sum+=0;
      return sum;
    }, 0)
};

console.log(positiveSum([1, -4, 7, 12]))
