function calculateModularExponentiation(base, exponent, modulo) {
    let result = 1;
  
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulo;
      }
      base = (base * base) % modulo;
      exponent = Math.floor(exponent / 2);
    }
  
    return result;
  }
  
  function calculatePowerModulo(base, exponent, modulo) {
    const result = calculateModularExponentiation(base % modulo, exponent, modulo);
    return result;
  }
  
  function main() {
    const base = 40;
    const exponent = 59;
    const modulo = 89;
  
    const result = calculatePowerModulo(base, exponent, modulo);
    console.log(`${base}^${exponent} mod ${modulo} = ${result}`);
  }
  
  main();
  