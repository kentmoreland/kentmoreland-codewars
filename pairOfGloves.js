// Pair of gloves
//
// Winter is comming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
//
// A pair of gloves is constituted of two gloves of the same color.
//
// You are given an array containing the color of each glove.
//
// You must return the number of pair you can constitute.

const numberOfPairs = (array) => {
  let numPairs = 0;
  array.reduce((pairs, glove) => {
    if(!pairs[glove]){
      pairs[glove] = 1;
    }else{
      pairs[glove]++;
      if(pairs[glove] % 2 === 0){ numPairs++; }
    }
    return pairs
  }, {})
  return numPairs;
};




let myGloves = ['red','green','red','blue','blue'];
let redGloves = ['red','red','red','red','red','red'];

console.log(numberOfPairs(myGloves)); // == 2;// red and blue
console.log(numberOfPairs(redGloves)); // == 3; // 3 red pairs
