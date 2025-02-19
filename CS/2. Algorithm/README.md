# Algorithm

## 시간 복잡도와 공간 복잡도

### 시간 복잡도

시간 복잡도는 알고리즘이 입력 크기에 대해 얼마나 빠르게 실행되는지 나타내는 표기법이다.

입력 크기가 n일 때 알고리즘이 얼만마 많은 연산을 수행하는지 나타내며, 최악의 경우 연산 횟수를 기준으로 표기한다.

### 공간 복잡도

공간 복잡도는 알고리즘이 필요로 하는 메모리 공간의 양이 입력 크기와 비례하는지 나타내는 것이 목적이다.

입력 크기가 n에 대한 알고리즘의 추가 메모리 사용량의 상한을 나타내며, 시간 복잡도와 마찬가지로 공간 복잡도의 표기는 최악의 경우를 나타내는 것이 일반적이다.

### Big O 표기법

Big O 표기법은 알고리즘의 시간 복잡도/공간 복잡도를 나타내는 표기법 중 하나이다. 알고리즘의 입력 크기에 대한 함수로서, 임력 크기가 무한히 커질 때 알고리즘이 어떻게 실행되는지를 표현한다.

> 일반적으로 최악의 경우에 대한 복잡도를 나타낸다.

1. O(1) - 상수 시간 : 입력 크기와 상관없이 일정한 실행 시간이 소요되는 알고리즘이다.

2. O(log n) - 로그 시간 : 입력 크기가 증가할 때마다 실행 시간이 로그의 증가율로 증가하는 알고리즘이다. 대표적으로 이진 검색 알고리즘이 있다.

3. O(n) - 선형 시간 : 입력 크기에 비례하여 실행 시간이 증가하는 알고리즘이다. 예를 들어 리스트의 모든 항목을 한 번씩만 반복하는 알고리즘이다.

4. O(n log n) - 선형 로그 시간 : 입력 크기가 증가할 때마다 실행 시간이 n과 log n의 곱으로 증가하는 알고리즘이다. 대표적으로 병합 정렬과 퀵 정렬이 있다.

5. O(n^2) - 제곱 시간 : 입력 크기에 제곱에 비례하여 실행 시간이 증가하는 알고리즘이다. 대표적으로 선택 정렬과 삽입 정렬이 있다.

6. O(2^n) - 지수 시간 : 입력 크기에 지수에 비례하여 실행 시간이 증가하는 알고리즘이다. 이는 매우 느리고 비효율적인 알고리즘이다. 대표적으로 피보나치 수열을 구하는 재귀 함수가 있다.

7. O(n!) - n 팩토리얼 시간 : n개의 요소를 가진 집합의 모든 순열을 생성하는 알고리즘에 대한 시간 복잡도이다. 즉, 입력의 크기가 커질수록 알고리즘의 수행 시간이 급격하게 증가한다. 따라서 n이 증가할수록 알고리즘의 수행 시간이 지수적으로 증가하기 때문에 매우 느린 알고리즘이다.

8. O(n^n) - n 제곱 시간 : 크기가 n인 집합에서 n개의 요소를 선택하는 모든 조합을 생성하는 알고리즘의 시간 복잡도이다. O(n!)과 마찬가지로 n이 증가할수록 알고리즘의 수행 시간이 급격하게 증가한다. 그러나 O(n!)보다는 약간 더 빠른 수행 속도를 가지므로, 크기가 작은 입력에 대해서는 적절한 알고리즘이 될 수 있다.

![image](https://user-images.githubusercontent.com/85297720/229361405-373e09a4-f969-48c9-b3b8-219d7cf2ef7f.png "BigO 표기법 - 출처 Google")

### Big O 표기법 예제

O(1)

```javascript
const arr = [1, 2, 3];
console.log(arr[0]); // 1
```

O(log n)

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch(arr, 7)); // 6
```

O(n)

```javascript
const arr = [1, 2, 3, 4, 5];
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(arr, 4)); // 3
```

O(n log n)

```javascript
const arr = [5, 4, 3, 2, 1];
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
};

console.log(mergeSort(arr)); // [ 1, 2, 3, 4, 5 ]
```

O(n^2)

```javascript
const arr = [5, 4, 3, 2, 1];
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr)); // [ 1, 2, 3, 4, 5 ]
```

O(2^n)

```javascript
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
```

O(n!)

```javascript
const permute = (arr) => {
  if (arr.length <= 1) {
    return [arr];
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permute(remaining);

    for (let j = 0; j < perms.length; j++) {
      result.push([arr[i], ...perms[j]]);
    }
  }

  return result;
};

const arr = [1, 2, 3];

console.log(permute(arr));
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1],
// ];
```

O(n^n)

```javascript
const powerSet = (arr) => {
  const result = [[]];

  for (let i = 0; i < arr.length; i++) {
    const len = result.length;

    for (let j = 0; j < len; j++) {
      result.push([...result[j], arr[i]]);
    }
  }

  return result;
};

const arr = [1, 2, 3];
console.log(powerSet(arr)); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
```
