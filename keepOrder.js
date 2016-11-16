// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
//
// // Do not modify the input.

const keepOrder = (arr, val) => {
  for (let i = 0; i < arr.length; i++){
    if ( val <= arr[i] ) {
      return i;
    }
  }
  return arr.length;
};






// console.log(keepOrder([1, 2, 3, 4, 7], 5));// #=> 4
                    // ^(index 4)
// console.log(keepOrder([1, 2, 3, 4, 7], 0));// #=> 0
        // ^(index 0)
console.log(keepOrder([1, 1, 2, 2, 2], 3));// #=> 2
             // ^(index 2)
