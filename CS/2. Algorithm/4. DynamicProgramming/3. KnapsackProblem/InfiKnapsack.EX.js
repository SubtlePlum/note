const unboundedKnapsack = (weights, values, capacity) => {
  const n = weights.length;
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 1; i <= capacity; i++) {
    for (let j = 0; j < n; j++) {
      if (weights[j] <= i) {
        dp[i] = Math.max(dp[i], dp[i - weights[j]] + values[j]);
      }
    }
  }

  return dp[capacity];
};

// 예제 실행
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 10;

const result = unboundedKnapsack(weights, values, capacity);
console.log(result); // 15
