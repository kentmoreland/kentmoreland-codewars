const ranks = (arr) => {
  let cp = arr.slice().sort((a,b) => {return b - a;} );
  let key = cp.reduce((sm, sc, index) => {
    sm[sc] ? sm[sc] : sm[sc] = index + 1; return sm; }, {});
  return arr.map((sc) => { return key[sc]; });
};

let test1 = [9,3,6,10];
console.log(ranks(test1))
