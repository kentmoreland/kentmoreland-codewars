const cutIt = (arr) => {
  sl = arr.reduce((sm, st, i) => {
    i === 0 ? sm = st.length : sm < st.length ? sm : sm = st.length;
    return sm; }, 0);
  return arr.map((st) => { return st.slice(0, sl); });
};


let test1 = ['ab','cde','fgh'];
let test2 = ['abc','defgh','ijklmn'];
console.log(cutIt(test1)); // ['ab','cd','fg']
console.log(cutIt(test2)); // ['abc','def','ijk']
