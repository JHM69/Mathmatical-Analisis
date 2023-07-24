function findXWithValueOfReminderZero(A, B) {
  for (let x = 1; x <= 10000000; x++) {
    const result = (A * x - 1) / B;
    if (result % 1 === 0) {
      return x;
    }
  }
  return -1; // If no x with a reminder of 0 is found, return -1 as a flag.
}

// Test the function with example values of A and B
//  A^-1 mod B
const A = 35;
const B = 100;
const result = findXWithValueOfReminderZero(A, B);

if (result !== -1) {
  console.log(
    `The value of x is ${result} for the equation ((A*x)-1)/B) to have a remainder of 0.`
  );
} else {
  console.log("No value of x from 1 to 10000000 satisfies the condition.");
}
