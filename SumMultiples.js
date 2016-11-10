// Find the sum of the multiples of n i.e. less than m

// Output: Number -> sum of the multiples of n
// Input: a number n and a second max number
// Constraints/Complexity: any time or space complexity?
//                         what to return if m is less than n? INVALID
// Examples: 2,9 => 20

//check if m is less than or equal to 0
  //if m is less than or equal to zero or m is equal to n do this:
    //return "INVALID"
//initiate a variable total to store the result
//initiate an array to store the multiples
//calculate the multiples of m
  //**for each number greater than zero and less than m do this:
    //add the number to the array of multiples
//for each multiple of m do this:
    //if the multiple divided by num has no remainder do this:
      //add the multiple to the result
      //return the result.

sumMul = (n,m) => {
  if(m<=0){return 'INVALID'};
  let mults = [];
  while(m>0){mults.push(m);m--};
  return mults.reduce((sum, num)=>{
    num%n === 0 ? sum+=num : sum;
    return sum;
  }, 0);
}

console.log(sumMul(4,123));
