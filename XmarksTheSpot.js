
// Given a two dimensional array, return the co-ordinates of 'x'.
//
// The co-ordinates should be zero indexed.
//
// You should assume you will always get an array as input.

//O: tuple with two numbers denoting the location of x
//I: two dimensional array
//C: return 0 if no x found
//E: [] => 0

//check each index of the array
//if the array at the index contains an "x" return the indexes

const xMarksTheSpot = (input) => {
  let result = []
  for(let outer = 0; outer < input.length; outer++){
    for(let inner = 0; inner < input[outer].length; inner++){
      if(input[outer][inner] === 'x'){
        result.push(outer, inner);
      }//endif
    }//endfor
  }//endfor
  if(result.length === 0 || result.length > 2){
    return []
  }else{
    return result;
  };
}

let multipleX =  [
  ['o', 'o'],
  ['o', 'x']
]

console.log(xMarksTheSpot(multipleX));
