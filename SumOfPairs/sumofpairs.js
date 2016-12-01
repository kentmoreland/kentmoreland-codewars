const sum_pairs = (arr, sum) => {
  for(let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
      if(sum - arr[i] === arr[j] && arr[i] != arr[j]){
        return [arr[i], arr[j]];
      }
    }
  }
};
