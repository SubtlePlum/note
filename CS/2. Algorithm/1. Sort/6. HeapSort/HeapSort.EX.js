let arr = [
  0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 48, 49, 50, 51, 52, 53, 54,
  55, 56, 57, 58, 59, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 96, 97, 98,
  99,
];

const buildMaxHeap = (arr) => {
  let i = Math.floor(arr.length / 2 - 1);
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i--;
  }
};

const heapify = (arr, i, length) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < length && arr[left] > arr[max]) {
    max = left;
  }

  if (right < length && arr[right] > arr[max]) {
    max = right;
  }

  if (max != i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    heapify(arr, max, length);
  }
};

const heapSort = (arr) => {
  buildMaxHeap(arr);

  let end = arr.length - 1;
  while (end > 0) {
    [arr[end], arr[0]] = [arr[0], arr[end]];
    heapify(arr, 0, end);
    end--;
  }

  return arr;
};

console.log(heapSort(arr));
