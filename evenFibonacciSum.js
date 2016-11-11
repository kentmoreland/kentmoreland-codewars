// Give the summation of all even numbers in a Fibonacci sequence up to,
// but not including, the maximum value.
// The Fibonacci sequence is a series of numbers where the next value is
// the addition of the previous two values. The series starts with 0 and 1:
// 0 1 1 2 3 5 8 13 21...

const fibonacci = (max) => {
  let storage = []; // store fibonacci numbers

  // calculate fibonacci sum
  let getFib = (max, prev, curr) => {
    let temp = 0;
    prev = prev || 0, curr = curr || 1;

    // add even values to storage
    if(curr % 2 === 0){
      storage.push(curr);
    }

    // kill switch
    if(curr >= max){
      return;
    }

    // recursive instantiation
    temp = curr;
    curr += prev;
    prev = temp;

    // recursive call
    getFib(max, prev, curr);
  };

  //initiate function
  getFib(max);

  //tally up fibonacci sum
  console.log(storage);
  return storage.reduce((sum, num) => {
    if(num < max){
      sum += num;
    }
    return sum;
  }, 0);
};

console.log(fibonacci(8));
