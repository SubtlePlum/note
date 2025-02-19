// 최소공약수 알고리즘
//
const N = 1501381;
const M = 50020;

const GCD_ALGO = (N, M) => {
  let big = N > M ? N : M;
  let small = big === N ? M : N;

  if (big === small) return small;
  return GCD_ALGO(small, big - small);
};

let GCD = GCD_ALGO(N, M);

console.log(GCD);
