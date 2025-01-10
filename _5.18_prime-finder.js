/*
    Suppose we have a list of prime numbers. The first 6 numbers on the list are 2, 3, 5, 7, 11, and 13.
    Write a function that takes a positive integer as input and returns the n-th value in the prime number list.
*/

function nthPrime(number) {
  let primes = [2, 3, 5, 7, 11, 13];
  let candidate = 17;

  while (primes.length < number) {
    let primeCheck = true;
    for (let prime of primes) {
      if (prime > Math.sqrt(candidate)) {
        break;
      }
      if (candidate % prime === 0) {
        primeCheck = false;
        break;
      }
    }
    if (primeCheck) {
      primes.push(candidate);
    }
    candidate += 2; // Check the next odd number
  }

  return primes[number - 1];
}

// Test cases
console.log(nthPrime(10));   // 29
console.log(nthPrime(20));   // 71
console.log(nthPrime(30));   // 113
console.log(nthPrime(100));  // 541
