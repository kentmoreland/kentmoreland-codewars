
const wordPattern  = (pattern, str) => {
  pattern = pattern.split(''); str = str.split(' ');
  const pm = {}; const values = [];
  for(var i = 0; i < pattern.length; i++){
    if(pm[ pattern[i] ] === undefined && values.indexOf(str[i]) < 0){
      pm[ pattern[i] ] = str[i];
      values.push(str[i])
    }else{
      if (str[i] !== pm[ pattern[i] ] ){
        return false;
      }
    }
  }
  return true;
}
