const twoCount = (n, result) => {
  result = result || 0;
  return n % 2 === 0 ? twoCount(n / 2, ++result) : result;
}

console.log(twoCount(24));
console.log(twoCount(2));
console.log(twoCount(256));