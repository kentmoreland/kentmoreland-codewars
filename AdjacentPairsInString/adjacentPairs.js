const countAdjacentPairs = (strings) => {
  strings = strings.split(' ');
  let count = 0, dupMap = {};
  for(let i = 0; i < strings.length; i++){
    if(strings[i + 1] && strings[i].toLowerCase() === strings[i + 1].toLowerCase() && !dupMap[strings[i]]){
      dupMap[strings[i]] = strings[i];
      count += 1;
    }
  }
  return count;
}


let test1 = 'cat dog dog'
let test2 = 'dog dog dog'
let test3 = 'cat cat dog dog cat'

console.log(countAdjacentPairs(test3))