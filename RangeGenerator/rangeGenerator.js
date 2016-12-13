const range = (start, step, stop) => {
  let result = [], it = 1;
  if(!!stop === false && !!step === false){

    while(it <= start){ result.push(it++); }
  } else if(!!stop === false){
    it = start;

    while(it <= step){ result.push(it++); }
  } else {

    while(start <= stop){ result.push(start); start += step; }
  }
  return result;
 }


console.log(range(3, 7))