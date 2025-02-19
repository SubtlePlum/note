const fibonacci = (n) => {
  if (n < 2) return n;
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

console.log(fibonacci(10)); // 55

const fibonacci2 = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
};

console.log(fibonacci2(6)); // 8
