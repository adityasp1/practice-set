// program to print prime numbers from 1 to 100

let allPrimes = (n) => {
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i] === true) {
      primes.push(i);
      let next = i * i;
      while (next <= n) {
        isPrime[next] = false;
        next += i;
      }
    }
  }
  return primes;
};

// console.log(allPrimes(100));

// ******************************************************

// find if a year is a leap year or not

// conditions for leap year
// 1. year is divisible by 4 but not by 100
// 2. year is divisible by 400

const isLeap = (n) => {
  if (n % 400 === 0) {
    return true;
  }
  if (n % 4 === 0 && n % 100 !== 0) {
    return true;
  }
  return false;
};
// console.log(isLeap(2024));

// ******************************************************

// generate a random number between 350 to 730

console.log(Math.floor(Math.random() * 381 + 350));

// ******************************************************
