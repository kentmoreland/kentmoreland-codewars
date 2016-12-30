const stringSuffix = (s) => {
  const template = s; let result = 0;
  while(s.length > 0){
    for(let i = 0; i < s.length; i++){
    if(s[i] !== template[i] || i === s.length){ break; }; result++; };
    s = s.slice(1);
  }
  return result;
};

module.exports.stringSuffix = stringSuffix;