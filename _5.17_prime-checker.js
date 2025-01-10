/*
    Write a function that takes a positive integer as input and returns a Boolean value indicating whether the input is a prime number.
*/

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  let candidate = 2;
  while (candidate <= Math.sqrt(n)) {
    if (n % candidate === 0) {
      return false;
    }
    candidate += 1;
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(91)); // false
console.log(isPrime(101)); // true
