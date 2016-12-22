const x = (n) => {
  const outer = [];
  let inc = 1, dec = n;
  for(i = 1; i <= n; i++){
    const inner = [];
    for(j = 1; j <= n; j++){
      if( (j === inc || j === dec) || (j === inc && j === dec) ){
        inner.push(1);
      }else{
        inner.push(0);
      }
    }
    outer.push(inner);
    inc++; dec--;
  }
  return outer;
}