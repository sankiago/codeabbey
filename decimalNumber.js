const decimalNumber = (num) => {
  if (num % 1 == 0) {
    return 0;
  }
  let n = 2;
  let result = 0;
  for (i = 0; i < n; i++) {
    result += Math.trunc((num * 10 ** (i + 1)) % 10) * 10 ** -(i + 1);
  }
  result = result.toFixed(n);
  return result;
};