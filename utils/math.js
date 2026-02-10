function fibonacci(n) {
  if (n < 0) return [];
  if (n === 0) return [0];
  
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function getPrimes(arr) {
  return arr.filter(isPrime);
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function hcf(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((acc, current) => gcd(acc, current));
}

function lcmTwo(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function lcm(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((acc, current) => lcmTwo(acc, current));
}

module.exports = {
  fibonacci,
  getPrimes,
  hcf,
  lcm,
  gcd
};
