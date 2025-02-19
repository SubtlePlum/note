const longestIncreasingSubsequence = (arr) => {
  const dp = new Array(arr.length).fill(1);
  let maxLen = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};

// 예제 실행
const arr = [10, 20, 10, 30, 20, 50];
const lis = longestIncreasingSubsequence(arr);
console.log(lis); // 4
