function stirlingSecondKind(n, k) {
  if (k === 0 || n === 0 || k > n) {
    return 0;
  } else if (k === 1 || k === n) {
    return 1;
  } else {
    return k * stirlingSecondKind(n - 1, k) + stirlingSecondKind(n - 1, k - 1);
  }
}
function stirlingFirstKind(n, k) {
  if (n === k || k === 1) {
    return 1;
  }
  if (k === 0 || k > n) {
    return 0;
  }
  return (
    (n - 1) * stirlingFirstKind(n - 1, k) + stirlingFirstKind(n - 1, k - 1)
  );
}
const n = 4;
const k = 2;
const result1 = stirlingSecondKind(n, k);
const result2 = stirlingFirstKind(n, k);
console.log(result1);
console.log(result2 + 1);
