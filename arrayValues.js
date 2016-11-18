// Is every value in the array in an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.



const arrCheck = (value) => {
  return value.every((item) => { return Array.isArray(item); } );
};


let test1 = [[1],[2]]; // => true
let test2 = ['1','2']; // => false
let test3 = [{1:1},{2:2}]; //  => false

console.log(arrCheck(test1));
console.log(arrCheck(test2));
console.log(arrCheck(test3));
