let arr = [
  0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 48, 49, 50, 51, 52, 53, 54,
  55, 56, 57, 58, 59, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 96, 97, 98,
  99,
];

const countingSort = (arr) => {
  // 최대값을 찾기
  let max = Math.max(...arr);

  // 계수 배열을 초기화
  let count = new Array(max + 1).fill(0);

  // 각 요소의 빈도수 계산
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // 각 요소의 누적합 계산
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 정렬된 배열을 담을 배열 생성
  let result = new Array(arr.length).fill(0);

  // 배열을 순회하며 각 요소를 정렬된 위치에 삽입
  for (let i = arr.length - 1; i >= 0; i--) {
    result[--count[arr[i]]] = arr[i];
  }

  return result;
};

console.log(countingSort(arr));
