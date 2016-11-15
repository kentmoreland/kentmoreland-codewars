// Given a string, swap the case for each of the letters.
//
// e.g. CodEwArs --> cODeWaRS

const swap = (str) => {
  return str.split('').map((ltr) => {
    ltr.toLowerCase() === ltr ?
    ltr = ltr.toUpperCase() :
    ltr = ltr.toLowerCase();
    return ltr;
  }).join('');
};

console.log(swap('TeSt'))
