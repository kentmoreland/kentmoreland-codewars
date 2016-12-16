const uniq = (a) => {
  if(a.length === 0){ return a };
  const result = []; let it = 0;
  while(a[it + 1] !== undefined) {
    if (a[it] !== a[it + 1]){
      result.push(a[it]);
      it++;
    }else{ it++; }
  }
  result.push(a[it]);
  return result
}
