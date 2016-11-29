function sumPrimes(num) {
  
  var sieve = [], i, j, primes = [];
  
  for (i = 2; i <= num; ++i) {
      if (!sieve[i]) {
          primes.push(i);
          for (j = i * 2; j <= num; j += i) {
              sieve[j] = true;
          }
      }
  }
  
  return primes.reduce(function(a, b) {
    return a + b;
  }, 0);

}

sumPrimes(10);
