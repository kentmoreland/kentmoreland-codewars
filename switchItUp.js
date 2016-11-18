// When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// Try using "Switch" statements.


const switchItUp = (num) => {
  const map = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    0: 'Zero',
  };
  return map[num];
};


console.log(switchItUp(1));
