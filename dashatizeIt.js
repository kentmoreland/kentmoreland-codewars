// Description:
//
// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.


dashatize = (num) => {
 if(num === -1){return '1'}
 if(!num){ return num.toString();}
 num = Math.abs(num);
 let index = num

 let aNum = [], result = ''
 while(index > 0){
   aNum.unshift(index % 10);
   index = Math.floor(index / 10);
 };

 if(aNum.length === 1 ){return num.toString()}

 if(aNum.length === 1){ return index}
 for(let i = 0; i < aNum.length; i++){
   if(aNum[i] % 2 === 0){
     result += aNum[i];
   }else{
     //if it is the first num in the set
     if(i === 0 ){
       result += aNum[i] + '-';
     // if it is the last num in the set
     }else if(i === aNum.length - 1 && aNum[i - 1] % 2 !== 0){
       result += aNum[i];
     }else if(i === aNum.length - 1 && aNum[i - 1] % 2 === 0){
       result += '-' + aNum[i];
     }else{
       // if prev value was pos.
       if(aNum[i - 1] % 2 === 0){
         result += '-' + aNum[i] + '-';
       // if prev value was neg.
       }else{
         result += aNum[i] + '-';
       }
     }// endif
   }// endif
 }
 return result;
};



// console.log(dashatize(274)) // -> '2-7-4'
console.log(dashatize(6815)) // -> '68-1-5'
// console.log(dashatize(5311)) // -> '5-3-1-1'
console.log(dashatize(5321)) // -> '5-3-2-1'
console.log(dashatize(NaN)) // -> NaN
console.log(dashatize(0)) // -> 0
console.log(dashatize(-1)) // -> 1
console.log(dashatize(-28369))
console.log(dashatize(1))
