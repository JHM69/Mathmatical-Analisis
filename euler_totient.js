function eulerTotient(n) {
    if (n <= 0) {
      throw new Error("Input must be a positive integer.");
    }
  
    let result = n;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        while (n % i === 0) {
          n /= i;
        }
        result -= result / i;
      }
    }
  
    if (n > 1) {
      result -= result / n;
    }
  
    return result;
  }

  var a = 89
  console.log(eulerTotient(a))