let arr = [
  0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 48, 49, 50, 51, 52, 53, 54,
  55, 56, 57, 58, 59, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 96, 97, 98,
  99,
];

const hashMapSearch = (arr, target) => {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = i;
  }
  return hashTable[target] !== undefined ? hashTable[target] : -1; // 찾지 못하면 -1 반환
};

console.log(hashMapSearch(arr, 8)); // 68
console.log(hashMapSearch(arr, 10)); // 70
